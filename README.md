# grunt-css-condense [![Build Status](https://travis-ci.org/CactusCommander/grunt-css-condense.png)](https://travis-ci.org/CactusCommander/grunt-css-condense)

> Condense your CSS.


## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-css-condense --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: http://gruntjs.com/getting-started

##Condense Task

_Run this task with the `grunt condense` command._

_This task is a [multi task][] so any targets, files and options should be specified according to the [multi task][] documentation._
[multi task]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks

##Options


Besides the `files` attribute, this task forwards all configuration options directly to `css-condense`, but for the sake of completeness, they're all documented below.  For more information on each of the configuration options, see the [css-condense configuration](https://github.com/rstacruz/css-condense).


#####safe
Don't do unsafe things.  Defaults to `false`

#####consolodateMediaQueries
Consolodate media queries together.  Defaults to `true`

#####consolodateViaSelectors
Consolodate rules via selectors.  Defaults to `true`

#####consolodateViaDeclarations
Consolodate rules via declarations.  Defaults to `true`

#####sortSelectors
Sort selectors in each rules.  Defaults to `true`

#####sortDeclarations
Sort declarations in a rule.  Defaults to `true`

#####compress
Strip whitespaces from output.  Defaults to `true`

#####lineBreaks
Add linebreaks to the output.  Defaults to `false`

#####debug
Debug mode.  Defaults to `false`


##Example Configuration
```js
condense: {
  build: {
    files: {

      // Compress a single file
      'path/to/compressed.css': 'path/to/uncompressed.css',

      // Compress multiple css files into a single one
      'path/to/other.css': [
        'path/to/css1.css',
        'path/to/css2.css',
        'path/to/css3.css'
      ],

      // Compress all files in the 'uncompressed' folder and move them to the 'compressed' folder
      'compressed/**/*.css': 'uncompressed/**/*.css'
    },

    consolodateViaDeclarations: false
  }
}
```


## Release History

 * TBA   v0.1.0   Initial release.

---

Task submitted by [Erich Healy](https://github.com/CactusCommander)
