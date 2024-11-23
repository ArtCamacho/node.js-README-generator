# a

![badge](https://img.shields.io/badge/license-c-green)

## description

b

## table of Contents

- [installation](#installation)
- [usage](#usage)
- [license](#license)
- [questions](#questions)
- [tests](#tests)
- [contributing](#contributing)

## installation

c

## usage

d

## license

c

## questions

sfd \
wef

## tests

wef

## contributing

swefg
function renderLicenseBadge(license) {
const licenseData = {
"MIT": {
badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
link: "https://opensource.org/licenses/MIT",

      text: `Copyright ${new Date().getFullYear()} [COPYRIGHT HOLDER]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software  
and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
},
"Apache 2.0": {
},
"CC0 1.0 Universal": {
}
};

return licenseData[license] ? licenseData[license].badge : "";
}

function renderLicenseLink(license) {
const licenseData = { /_ ... same as above ... _/ };
return licenseData[license] ? licenseData[license].link : "";
}

function renderLicenseSection(license) {
const licenseData = { /_ ... same as above ... _/ };
return licenseData[license] ? licenseData[license].text.replace("[COPYRIGHT HOLDER]", "[Name of Copyright Holder]") : "No Copyright Information Given";
}

function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Installation Instructions

${data.installation}

## License Information

${renderLicenseSection(data.license)}

## Contribution Guidelines

${data.guidelines}

## Testing Instructions

${data.testing}
`;
}

module.exports = generateMarkdown;
