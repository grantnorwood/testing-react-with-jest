# Testing React with Jest & React Testing Library

**Welcome to the workshop!**

After using a number of mature unit testing frameworks for years, I was introduced to **[Jest](https://jestjs.io/)**. I mostly came into contact with it when contributing to projects other than my own, but as I was working on a few new React & React Native projects which used Jest, it became good opportunities to properly learn this popular testing framework.

We'll also be using **[React Testing Library](https://github.com/testing-library/react-testing-library)** _([docs](https://testing-library.com/docs/react-testing-library/intro/))_, another modern solution for testing React components.  Together, they allow us to test our UI in a way that more closely resembles how a real human uses our software.

React Testing Library's guiding principle is:

> The more your tests resemble the way your software is used, the more confidence they can give you.

In today's workshop, we'll start up a sandbox application using Create React App, and write some simple tests to verify that our application is working as expected.

<hr>

- [Required pre-work](#required-pre-work)
- [Setting up your environment](#setting-up-your-environment)
  - [Node.js](#nodejs)
  - [A Code Editor (IDE)](#a-code-editor-ide)
  - [Git](#git)
- [Clone the workshop repo from GitHub](#clone-the-workshop-repo-from-github)
  - [CLI](#cli)
  - [Sourcetree](#sourcetree)
- [Start up the example application](#start-up-the-example-application)
- [Exercises](#exercises)

<hr>

## Required pre-work

**It's important that you get your environment setup before you arrive at the workshop!** You can do this by completing each section of the instructions in this main README file.

We will spend some time reviewing the steps to [setting up your development environment](#setup-your-environment) and [cloning the workshop repo from GitHub](#clone-the-workshop-repo-from-github), but we won't have time to download & install everything you'll need. **Please come prepared!**

## Setting up your environment

_**Note:** These instructions are specifically for Mac, but they may or may not work with [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)).  Here's what you'll need to get started ..._

### Node.js

I'm using **v14.15.4**, but any of the "Fermium LTS" releases should be fine.

To check which version you have installed, simply run:

```bash
node --version
```

To install Node.js, you may either:

* Download & install from the [nodejs.org](https://nodejs.org/en/) site _(simplest method)_
* ... _or_, for maximum fun with switching quickly between various versions of Node.js, [install NVM](https://github.com/creationix/nvm)

### A Code Editor (IDE)

[Visual Studio Code](https://code.visualstudio.com/) is popular these days, this is my first recommendation. Lots of folks prefer [Atom](https://ide.atom.io/), and [Sublime Text](https://www.sublimetext.com/) is awesome, too. You'll just want a nice code editor to do syntax highlighting and other handy code stuff for you.

### Git

It's probably pre-installed on your Mac, or there's a ton of tutorials for installing git on the interwebs, just Google for `install git on mac`.

**Pro tip:** Make life easy for yourself and get a GUI for Git. [Sourcetree](https://www.sourcetreeapp.com/) is free and highly useful if you're a more visual person, or if you just want to keep your command line use to a minimum.

## Clone the workshop repo from GitHub

The code has a sample web server and application, and some starter code for our end-to-end test exercises. It was created using Facebook's [Create React App](https://github.com/facebook/create-react-app).

Each exercise is in its own folder, and we'll work through them one by one. For each, there will be our starter code, as well as the full solution.

The example app is located in the `/app` directory. We'll run our unit tests against the components within this app.

Once the app is running, you can view the UI in your browser of choice at [http://localhost:3000](http://localhost:3000).

### CLI

From your terminal, in whichever directory where you prefer to create your apps:

```bash
git clone git@github.com:grantnorwood/testing-react-with-jest.git
```

### Sourcetree

From the _Repository Browser_ or _File_ menu, click _New ..._ and choose to clone a new repo.

The SSH url to the repo is: `git@github.com:grantnorwood/testing-react-with-jest.git`

✅ _**Congratulations, your pre-work is done!** But of course you're free to look ahead to the exercises we'll be working on._

<hr>

## Start up the example application

![Welcome to PiggyBank](https://user-images.githubusercontent.com/707463/124850796-e9606900-df66-11eb-8de1-25c53788a1e1.png)

Our example app is called `piggy-bank`, and is a simple sandbox app that mimicks using an ATM.

To start the app:

```bash
cd piggy-bank
yarn start
```

Once started, you'll see some output in your console like this:

```bash
Compiled successfully!

You can now view piggy-bank in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.0.21:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

<hr>

## Exercises

_Let's go!_

- [Exercise 1: Writing your first test](docs/exercise-1.md)
- [Exercise 2: Determining if a user is logged in](docs/exercise-2.md)
- [Exercise 3: Testing user interactions](docs/exercise-3.md)
