import { program } from "commander";
import fs from "fs";

program.argument('<file>', 'path to the file').parse(process.argv);

const filePath = program.args[0];

try {
    const content = fs.readFileSync(filePath, "utf-8");
    const cleanUp = content.trim();
    if (cleanUp === "") {
        console.log(`The given file ${filePath} has 0 words and is empty.`)
    } else {
        const words = cleanUp.split(/\s+/)
        const count = words.length

        // console.log(words);
        console.log(`The word count in ${filePath} is ${count}.\n`);
    }
} catch (error) {
    console.log("Encountered an error while reading the file.")
}
