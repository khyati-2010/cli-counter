const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('1.0.0');

program
    .command('lines')
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

program
    .command('words')
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const words = data.trim().split(/\s+/).length;
            console.log(`There are ${words} words in ${file}`);
        }
        });
    });

program
    .command('letters')
    .description('Count the number of letters in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const letters = data.replace(/[^a-zA-Z]/g, '').length;
            console.log(`There are ${letters} letters in ${file}`);
        }
        });
    });

program
    .command('sentences')
    .description('Count the number of sentences in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const sentences = data.split(/[.!?]+/).filter(Boolean).length;
            console.log(`There are ${sentences} sentences in ${file}`);
        }
        });
    });

program.parse();

// import { program } from "commander";
// import fs from "fs";

// program.argument('<file>', 'path to the file').parse(process.argv);

// const filePath = program.args[0];

// try {
//     const content = fs.readFileSync(filePath, "utf-8");
//     const cleanUp = content.trim();
//     if (cleanUp === "") {
//         console.log(`The given file ${filePath} has 0 words and is empty.`)
//     } else {
//         const words = cleanUp.split(/\s+/)
//         const count = words.length

//         // console.log(words);
//         console.log(`The word count in ${filePath} is ${count}.\n`);
//     }
// } catch (error) {
//     console.log("Encountered an error while reading the file.")
// }
