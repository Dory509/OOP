# OOP
SVG Logo Maker

Description

The SVG Logo Maker is a Node.js command-line application that allows users to create simple, customizable SVG logos without needing graphic design software. The application prompts users for text, colors, and shapes, then generates an SVG file that can be viewed in any browser.

Features

 Generates a 300x200px SVG logo
 Supports three shapes: Circle, Square, Triangle
 Allows custom text (up to 3 characters)
 Supports custom colors (color names or hex codes)
 Uses Inquirer for an interactive CLI experience
Includes Jest tests for shape rendering

Demo Walkthrough Video

🔗 Watch the Walkthrough Video

Table of Contents
	•	Installation
	•	Usage
	•	Example Output
	•	Testing
	•	Technologies Used
	•	Project Structure
	•	License

Installation

Prerequisites
	•	Node.js (Download from nodejs.org)
	•	npm (Comes with Node.js)

Clone the Repository

git clone https://github.com/Dory509/OOP.git
cd svg-logo-maker

Install Dependencies

npm install

Usage
	1.	Run the application:

node index.js


	2.	Follow the prompts to:
	•	Enter text (up to 3 characters)
	•	Choose a text color (name or hex code)
	•	Select a shape (Circle, Square, Triangle)
	•	Choose a shape color (name or hex code)
	3.	Once completed, an SVG file is generated:

Generated logo.svg


	4.	Open the examples/logo.svg file in a browser to view your logo.

Example Output

Here’s an example of a generated SVG logo with:
	•	Text: “SVG”
	•	Text Color: White
	•	Shape: Circle
	•	Shape Color: Green

Generated logo.svg File

<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">SVG</text>
</svg>

Testing

This project uses Jest for unit testing. The tests ensure that the shape classes (Circle, Square, Triangle) generate the correct SVG output.

Run Tests

npm test

If all tests pass, you’ll see output confirming successful execution.

Technologies Used
	•	Node.js – JavaScript runtime environment
	•	Inquirer.js – CLI user input handling
	•	Jest – Unit testing framework
	•	SVG – Scalable Vector Graphics format for logo creation

Project Structure

.
├── examples/           # Contains example SVG files
│   └── logo.svg        # Sample generated logo
├── lib/                # Logic for shapes and tests
│   ├── shapes.js       # Shape classes (Circle, Square, Triangle)
│   ├── shapes.test.js  # Jest tests for shape classes
│   ├── prompts.js      # Handles CLI user input (Inquirer)
├── .gitignore          # Specifies ignored files (node_modules, logs, etc.)
├── index.js            # Main application entry point
├── package.json        # npm package configuration
└── README.md           # Project documentation

Video:
https://app.screencastify.com/v3/watch/Ktmz3Pqeysp36OKtR9xE

License
This project is licensed under MIT License. 
