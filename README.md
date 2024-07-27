# Logo genarator
## Description

  In this application you can input a three letter string, a text color, a shape, and a shape color to then be presented with an svg containing your logo


## Table of Contents

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Tests](#tests)

  [Contact](#tests)


## Installation

  The application must be run with node js and must have the inquirer npm package installed as well.

## Usage

  The user will initialize the application with node index.js and must have inquirer installed in their working inviroment. The user is then prompted with the option to input three letters max. This input does have user input validation so will prompt the user to make the string shorter if it is longer than three characters. The user is then allowed to enter a text color name or hexidecimal value. This input is also validated with an array containing all the standard css colors and a regular expression that checks for a hexidecimal value. The user is prompted to enter a valid input when the color name or the color hex code is incorrect. The use is then asked for a shape from a list and a color for the shape with the same validation as the text color input. An SVG file is then presented in the working directory with the logo.

## License
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) for more information on the MIT license or other licenses please got to [https://opensource.guide/](https://opensource.guide/)

## Contributing

  N/A

## Tests

  The test run will need to have jest installed and the test files are included in the lib directory.

## Contact

  Please contact me at:\
Github: AlejandroM2023\
 Email: alejandromeza437@gmail.com
  

