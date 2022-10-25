# Autism facebook friend cleaner web extension
This web extension consists of a Node.js project with Typescript source files.

# Build instructions

## 1. Install Node.js

## 2. Initialize and install the required dependencies for the Node.js project
Run the following:
- `npm init -y`
- `npm install --save-dev webpack webpack-cli`
- `npm install --save-dev copy-webpack-plugin`
- `npm install --save-dev typescript ts-loader`
- `npm install --save-dev @types/chrome`

## 3.Build the extension
Run the following:
- `npm run build`

## 4. Load the extension into Chrome
- Navigate to [chrome://extensions]()
- Select `Load Unpacked`
- Select the `chrome-extension/dist` folder of this project
- After making changes to this project and building it, go to [chrome://extensions]() and click the refresh icon on the extension to reload it

# File descriptions
- `src/` - Directory for Typescript source files which will be compiled into minified Javascript.
- `public/` - Directory for resources that should be directly inserted into extension.
- `public/manifest.json` - Contains information for configuring Chrome extension. Has things like extension name, permissions, assets, etc.
- `tsconfig.json` - Contains Typescript compiler options.
- `webpack/webpack.config.js` - Contains configuration for compiling Typescript files.
- `package.json` - Defines the package build step, calls on webpack with `webpack.config.js` values.

# Todo list
- Automatically gather number of mutual friends for each friend straight from the webpage
- Detect if each friend has set a profile picture or not
- Fix the way the scraper script runs - currently it runs once when a user navigates to the Facebook friends page so it doesn't ever even see friends rows that don't load until you scroll down
- Create a dropdown for filtering with the options: show all, show possibly real, show possibly fake
  - This can be first done using just information the extension is reading, and then once the server is created it can contribute additional information
- Make a call to backend scraper for additional information on friends and apply the information returned to the friends web page

# Finished items
- Project compiles to `dist/`
- Project runs on the Facebook friends page

This project is configured according to [this guide](https://betterprogramming.pub/creating-chrome-extensions-with-typescript-914873467b65).
