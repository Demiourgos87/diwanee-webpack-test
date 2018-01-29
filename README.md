# Diwanee test page with webpack

## Usage
Install **yarn:** [Installation instructions](https://yarnpkg.com/en/docs/install)  
Install webpack cli globally on your machine ```yarn add webpack``` (on Linux, may require ```sudo```)

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

Check the live page [here](https://demiourgos87.github.io/diwanee-webpack-test/dist)
