const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('line counter')
  .description('CLI to count number of lines in a file')
  .argument('<string>');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });


program.parse();