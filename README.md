# grunt-why-you-no-bundle

> Grunt task for asserting that all of your AMD driver scripts are being bundled by r.js

## Getting Started
This plugin requires Grunt `~0.4.5`

```shell
npm install grunt-why-you-no-bundle --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-why-you-no-bundle');
```

### Overview

The plugin will throw an error if there are driver scripts in your codebase that aren't excluded and aren't in the modules section of your
requirejs configuration.

### Usage

```js
grunt.initConfig({
  why_you_no_bundle: {
    app: {
      root: 'path/to/my/js',
      config: 'path/to/my/config',
      exclude: [
        // If you really don't want this particular script bundled
        'a.js',
        '!vendor/**/*.js'
      ]
    }
  },
});
```

### Options

#### options.root
Type: `String`

The path to all of your JavaScript files

#### options.config
Type: `String`

The path to your requirejs config (containing the `modules` attribute)

#### options.exclude
Type: `String[]`

A list of files to exclude as driver scripts that you really don't want bundled for whatever reason.
