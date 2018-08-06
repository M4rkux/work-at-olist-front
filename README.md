# Work at Olist Frontend
The purpose of this project is to test my skills to see if I can get into the biggest company in the world.
For this, this project must have a page to register accounts with a strong password.

## Demo

This application is hosted at Github Pages.
Check it out: https://m4rkux.github.io/work-at-olist-front/

### Prerequisites
You need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com/) and optionally [yarn](https://yarnpkg.com)
After installing **node** and **npm** you must run the following command to install **yarn**
```shell
npm install yarn -g
```

## Installing / Getting started

To install all dependencies you need to run:
```shell
yarn
```
or 
```shell
npm install
```

To see the project in action you need to run:
```shell
yarn start
```
or
```shell
npm start
```
And you can check it out at: http://localhost:7700/

### Setting up Dev

Clone the project
```shell
git clone https://github.com/M4rkux/work-at-olist-front.git
```

or if you want to use ssh ([see how to configure ssh](https://help.github.com/articles/connecting-to-github-with-ssh/)):
```shell
git clone git@github.com:M4rkux/work-at-olist-front.git
```

Go to the folder:
```shell
cd work-at-olist-front/
```

And install all the dependencies:
```shell
yarn
```
or with npm
```shell
npm install
```

### Deploying / Publishing

To build the project, compile the Sass and minify everything you need to run:
```shell
yarn build
```
or with npm
```shell
npm build
```
And it will make a folder **/dist** with the project ready to go to production

### Built With
* [npm](https://www.npmjs.com/)
* [yarn](https://yarnpkg.com)
* [webpack](https://webpack.js.org/)
* [babel](https://babeljs.io/)
* [Sass](https://sass-lang.com/)


## Configuration

If you want/need to change the configurations of the build or development mode you need to edit these files in the root:
 * **webpack.config.js**
 * **webpack.prod.js**

## Tests

To run the unit tests you need to run:
```shell
yarn test
```
or
```shell
npm test
```

You can find them at **/test** folder.

## Style guide

This project uses [standard](https://github.com/standard/standard) lint.

You can check this out with
```shell
yarn lint
```
or
```shell
npm lint
```

## Api Reference

This project uses [mock api](https://www.mockapi.io/) to send the data of the accounts, and you can see all the accounts created here: http://5b664ca59daa3f0014cb8e7c.mockapi.io/account


## Work Environment

 * Laptop Asus X555B
   * CPU: Core i5-6200
   * GPU: NVIDIA GeForce 940m
   * Memory: 8gb
   * SO: Fedora 28 x64
   * HDD: 1TB

 * Desktop
   * CPU: Phenom II x6
   * GPU: NVIDIA GeForce GTX ROG Strix 1070
   * Memory: 8gb
   * SO: Windows 10 x64
   * SSD: 120gb
   * HDD: 1TB
   * PSU: Gamemax 1050w

 * Text editor: [Visual Studio Code](https://code.visualstudio.com/)