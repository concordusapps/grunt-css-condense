

module.exports = function(grunt){
  'use strict';

  var path = require('path');
  var condense = require('css-condense');

  grunt.registerMultiTask('condense', 'Condense your CSS', function() {

    // Get some defaults for our options
    var options = this.options({
      separator: grunt.util.linefeed
    });

    // Write out the options that we got if we got any options
    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(file) {
      var output = file.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {

          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {

        // Actually condense a file
        debugger;
        return condense.compress(grunt.file.read(filepath), options);

      // Normalize CRLF
      }).join(grunt.util.normalizelf(options.separator));

      // debugger;

      if (output.length < 1) {
        grunt.log.warn('Destination not written because compiled files were empty.');
      } else {
        grunt.file.write(file.dest, output);
        grunt.log.writeln('File ' + file.dest + ' created.');
      }
    });
  });

  // var condense = function(file, options) {
  //   return condense(file)
  // };

};
