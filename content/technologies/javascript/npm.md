---
title: "NPM"
showMetadata: true
editable: true
showToc: true
order: 0
tocDepth: 3
---

## NPM

npm does not stand for Node Package Manager. It is, however, the package manager for Node. (They don't say what it
stands for.) It also has all the packages in the front end scene. npm makes a command line tool, called `npm` as
well. `npm` allows you to bring in code from the npm registry which is a bunch of open source modules that people have
written, so you can use them in your project. Whenever you run `npm install react` (don't do this yet), it will install
the latest version of React from the registry.

In order to start an npm project, run `npm init` at the root of your project. If you don't have Node.js installed,
please go install that too. When you run `npm init` it'll ask you a bunch of questions, or you can me it is easier by `npm init -y`.
If you don't know the answer or don't care, just hit enter. You can always modify package.json later.
This will allow us to get started installing and saving packages.

- Kick off with create-react-app
      💡 Before Installing `create-react-app` 💡

If you already have Node.js on your machine, it's a good idea to reinstall it to make sure you have the latest version.
Keep in mind that Node.js now comes with `npm` by default.

### MacOS

1. Install [Homebrew](https://brew.sh/) by
   running `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` in the
   terminal.
2. Check that it was installed by running `brew --version`. You should see the version number that was installed.
3. Run `brew install node`.
4. Run `node --version`.
5. Check that `npm` was installed as well by running `npm --version`.
6. Run `brew install yarn`.
7. Run `npm --version`.
8. Run `yarn install && yarn --version`

### Windows

1. Please download the [Node.js Installer](https://nodejs.org/en/download/), go through the installation process, and
   restart your computer once you're done.
2. Please follow the [`yarn` installation instructions](https://yarnpkg.com/lang/en/docs/install).
3. Run `yarn --version` to make sure `yarn` has been successfully installed.

### Linux

1. Please follow [these instructions](https://www.ostechnix.com/install-node-js-linux) to
   install [Node.js](https://nodejs.org/en/download/).
2. Run `sudo apt-get install -y build-essential`.
3. Please follow the [`yarn` installation instructions](https://yarnpkg.com/lang/en/docs/install).
4. Run `yarn --version` to make sure `yarn` has been successfully installed.
