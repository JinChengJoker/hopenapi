#!/usr/bin/env node
import { run } from './src/run.js'

const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

if (major < 16) {
  console.error(
    'You are running Node ' +
    currentNodeVersion +
    '.\n' +
    'Create App requires Node 16 or higher. \n' +
    'Please update your version of Node.'
  );
  process.exit(1);
}

run()