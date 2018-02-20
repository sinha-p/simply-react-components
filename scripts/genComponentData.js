const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const docgen = require('react-docgen');
const chokidar = require('chokidar');

const parse = docgen.parse;

var paths = {
  examples: path.join(__dirname, '../lib','docs','examples'),
  components: path.join(__dirname, '../lib','components/form'),
  output: path.join(__dirname, '../config','componentData.js')
};

const enableWatchMode = process.argv.slice(2) === '--watch';
if (enableWatchMode) {
  // regenerate metadata
  chokidar.watch([paths.examples,paths.components])
    .on('change', function(event, path) {
      generate(paths);
    });
} else {
  // generate metadata
  generate(paths);
}

function generate(paths) {
  var errors = [];
  var componentData = getDirectories(paths.components).map(function(componentName) {
    try {
      return getComponentData(paths, componentName);
    } catch (error) {
      errors.push('ERR: while generating metadata for ' + componentName + '. ' + error);
    }
    return {};
  });
  writeFile(paths.output, 'module.exports = ' + JSON.stringify(errors.length ? errors : componentData));
}

function getComponentData(paths, componentName) {
  var filePath = path.join(paths.components, componentName, componentName + '.js');
  var content = readFile(filePath);
  var info = parse(content);

  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName)
  };
}

function getExampleData(examplesPath, componentName) {
  var examples = getExampleFiles(examplesPath, componentName);

  return examples.map(function (file) {
    var filePath = path.join(examplesPath, componentName, file);
    var content = readFile(filePath);
    var info = parse(content);

    return {
      // remove .js from filename
      name: file.slice(0,-3),
      description: info.description,
      code: content
    };
  });
}

function getExampleFiles(examplesPath, componentName) {
  var examplesFiles = [];
  try {
    examplesFiles = getFiles(path.join(examplesPath, componentName));
  } catch (error) {
    console.error(chalk.red(`No examples found for ${componentName}.`));
  }

  return examplesFiles;
}

function getDirectories(filePath) {
  return fs.readdirSync(filePath).filter(function(file){
    return fs.statSync(path.join(filePath, file)).isDirectory();
  });
}

function getFiles(filePath) {
  return fs.readdirSync(filePath).filter(function(file){
    return fs.statSync(path.join(filePath, file)).isFile();
  });
}

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, function (err) {
    err ? console.log(chalk.red(err)) : console.log(chalk.green('Component data saved'));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}
