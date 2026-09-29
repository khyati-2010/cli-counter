# CLI Counter

A simple CLI tool built with Node.js and Commander library for counting different elements in a text file.

## Features

The CLI can count:

* Lines
* Words
* Letters
* Sentences

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Usage

The general format is:

```bash
node index.js <command> <file>
```

### Count Lines

```bash
node index.js lines <file>
```

Example output:

```text
There are 5 lines in <file>
```

### Count Words

```bash
node index.js words <file>
```

Example output:

```text
There are 25 words in <file>
```

### Count Letters

```bash
node index.js letters <file>
```

Example output:

```text
There are 120 letters in <file>
```

### Count Sentences

```bash
node index.js sentences <file>
```

Example output:

```text
There are 6 sentences in <file>
```

## Tech Stack

* Node.js
* Commander.js
* Node.js File System (`fs`) module

## Project Structure

```text
cli-counter/
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Notes

The program reads the specified text file and performs the requested count using Node.js filesystem operations and regular expressions.
