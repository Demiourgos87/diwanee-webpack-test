# Diwanee test page with webpack

## Usage
Install webpack cli globally on your machine ```npm instal -g webpack``` (on Linux, may require ```sudo```)  
Install **yarn:** [Installation instructions](https://yarnpkg.com/en/docs/install)  

## Development setup:
* Clone the repository ```git clone <repo url>```
* Navigate to project directory and run ```yarn install``` to install required modules

### Assets folders:
> Required assets are bundled into dist/ directory
*Put source assets here:*
* Fonts: *src/assets/fonts/*
* Images: *src/assets/images/*

### Bundle paths:
* CSS is bundled to: *dist/css/*
* Javascript is bundled to: *dist/js/*
* Assets are bundled to: *dist/assets*

### Commands:
* ```yarn run dev``` - Runs webpack-dev-server for development mode
* ```yarn run build``` - Bundle source code
* ```yarn run prod``` - Bundle source code for production, includes css and javascript minification

## Bundle analysis
A tool for bundle analysis, provides useful information about the state of the bundle, errors, warnings, module interconnectivity, etc.

1. Generate webpack stats file, from project root enter ```webpack --profile --json --config=config/build.config.js > stats.json```
2. Go to: [http://webpack.github.io/analyse/](http://webpack.github.io/analyse/)
3. Upload the generated stats.json file

Check the live page [here](https://demiourgos87.github.io/diwanee-webpack-test/dist)
