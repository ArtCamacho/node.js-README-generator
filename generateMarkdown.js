//Returns a license badge; if there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Creative Commons") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else return "";
}
// Returns the license link; if there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/license/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/license/apache-2-0";
  } else if (license === "Creative Commons") {
    return "https://creativecommons.org/publicdomain/zero/1.0/";
  } else return "";
}
// Returns the license section; if there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "";
  } else if (license === "Apache 2.0") {
    return "";
  } else if (license === "Creative Commons") {
    return "";
  } else return "";
}
