import fs  from 'fs';
import {getUserInputs} from "./lib/prompts.js";
import {Circle, Square, Triangle}from "./lib/shape.js";

const generateSVG = async () => {
  try {
    const { text, textColor, shape, shapeColor } = await getUserInputs();

    let selectedShape;
    switch (shape) {
      case "Circle":
        selectedShape = new Circle();
        break;
      case "Square":
        selectedShape = new Square();
        break;
      case "Triangle":
        selectedShape = new Triangle();
        break;
    }

    selectedShape.setColor(shapeColor);

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${selectedShape.render()}
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;

    fs.writeFileSync("./examples/logo.svg", svgContent.trim());
    console.log("Generated logo.svg");
  } catch (err) {
    console.error("Error generating SVG:", err);
  }
};

generateSVG();