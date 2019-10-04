"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.white("Wijnand Holleman"),
  handle: chalk.greenBright.bold("wijnandholleman"),
  work: chalk.white("Fullstack software engineer"),
  twitter: chalk.blueBright("https://twitter.com/Wijnand_17"),
  github: chalk.blueBright("https://github.com/WijnandHolleman"),
  gitlab: chalk.blueBright("https://gitlab.com/wijnandholleman"),
  linkedin: chalk.blueBright("https://www.linkedin.com/in/wijnandholleman/"),
  npx: chalk.white("npx wijnandholleman"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelGitLab: chalk.white.bold("    GitLab:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const gitlabbing = `${data.labelGitLab}  ${data.gitlab}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
// const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  githubing +
  newline + // data.labelGitHub + data.github
  gitlabbing +
  newline + // data.labelGitlab + data.Gitlab
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  // webing +
  newline +
  // newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
