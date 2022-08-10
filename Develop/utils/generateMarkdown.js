// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD 3-Clause "New" or "Revised" License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU Affero General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'GNU Lesser General Public License v3.0':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '<a href="https://opensource.org/licenses/Apache-2.0" target="_blank">Apache License 2.0</a>';
    case 'GNU General Public License v3.0':
      return '<a href="https://www.gnu.org/licenses/gpl-3.0" target="_blank">GNU General Public License v3.0</a>';
    case 'MIT License':
      return '<a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>';
    case 'BSD 2-Clause "Simplified" License':
      return '<a href="https://opensource.org/licenses/BSD-2-Clause" target="_blank">BSD 2-Clause "Simplified" License</a>';
    case 'BSD 3-Clause "New" or "Revised" License':
      return '<a href="https://opensource.org/licenses/BSD-3-Clause" target="_blank">BSD 3-Clause "New" or "Revised" License</a>';
    case 'Boost Software License 1.0':
      return '<a href="https://www.boost.org/LICENSE_1_0.txt" target="_blank">Boost Software License 1.0</a>';
    case 'Creative Commons Zero v1.0 Universal':
      return '<a href="http://creativecommons.org/publicdomain/zero/1.0/" target="_blank">Creative Commons Zero v1.0 Universal</a>';
    case 'Eclipse Public License 1.0':
      return '<a href="https://opensource.org/licenses/EPL-1.0" target="_blank">Eclipse Public License 1.0</a>';
    case 'GNU Affero General Public License v3.0':
      return '<a href="https://www.gnu.org/licenses/agpl-3.0" target="_blank">GNU Affero General Public License v3.0</a>';
    case 'GNU General Public License v2.0':
      return '<a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" target="_blank">GNU General Public License v2.0</a>';
    case 'GNU Lesser General Public License v3.0':
      return '<a href="https://www.gnu.org/licenses/lgpl-3.0" target="_blank">GNU Lesser General Public License v3.0</a>';
    case 'Mozilla Public License 2.0':
      return '<a href="https://opensource.org/licenses/MPL-2.0" target="_blank">Mozilla Public License 2.0</a>';
    case 'The Unlicense':
      return '<a href="http://unlicense.org/" target="_blank">The Unlicense</a>'
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  return `
   ${license} <br> 
Visit ${renderLicenseLink(license)} for more information.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage 
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}


## Questions
If you have any questions or feedback you can reach me at ${data.email} or my <a href="https://github.com/${data.github}">GitHub</a> page.

`;
}

module.exports = generateMarkdown;
