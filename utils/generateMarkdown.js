// function to generate markdown for README
function generateMarkdown(data) {
  //Check license they entered
  let license;
  switch (data.license) {
    case 'Apache':
      license = '[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Boost':
      license = '[![License](https://img.shields.io/badge/License-Boost-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'BSD':
      license = '[![License](https://img.shields.io/badge/License-BSD-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'Creative Commons':
      license = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
      break;
    case 'Eclipse':
      license = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
      break;
    case 'GNU':
      license = '[![License: GPL v3](https://img.shields.io/badge/License-GNU-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'IBM':
      license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      break;
    case 'MIT':
      license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Mozilla':
      license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    case 'Open Data Commons':
      license = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
      break;
    case 'Perl':
      license = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
      break;
    case 'Artistic':
      license = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
      break;
    case 'SIL':
      license = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
      break;
    case 'Unlicense':
      license = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      break;
    case 'WTFPL':
      license = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
      break;
    case 'Zlib':
      license = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
      break;
  }

  return `# ${data.title}

${license}

## Table of Contents
1. [Description](#description)
2. [Installation Instructions](#install-instructions)
3. [Usage](#usage)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Test Instuctions](#test-instructions)
6. [License Information](#license-information)
7. [Questions](#questions)

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## License Information
${data.license}

---

${data.licenseInfo}

## Questions
If you have further questions you can contact us at ${data.email}.\n
Github: ${data.github}
`;
}

module.exports = generateMarkdown;
