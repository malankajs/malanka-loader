# Malanka loader

# Install

```bash
npm install malanka-loader --save-dev
```

# Usage

```js
var ComponentsScanner = require('malanka-loader').ComponentsScanner;

module.exports = {
   module: {
       loaders: [
           {
               test: /\.hbs$/,
               loader: 'malanka'
           }
       ]
   },
   
   plugins: [
       new ComponentsScanner({
            helpers: [
                __dirname + '/../../src/helpers/*.js'
            ],
            components: [
                __dirname + '/../../src/components/**/*.js'
            ]
       })
   ]
}
```