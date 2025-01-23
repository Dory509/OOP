import inquirer  from 'inquirer';
export const getUserInputs = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (up to 3 characters):",
      validate: (input) => input.length <= 3 || "Text must be 3 characters or fewer.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a color keyword or hex code for the text:",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for the logo:",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color keyword or hex code for the shape:",
    },
  ]);
};


