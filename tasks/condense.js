module.exports = function(grunt){
  'use strict';

  var condense = require('css-condense');

  grunt.registerMultiTask('condense', 'Condense your CSS', function() {

    // Get some defaults for our options
    var options = this.options();

    // Write out the options that we got if we got any options
    grunt.verbose.writeflags(options, 'Options');

    this.files.forEach(function(file) {
      var input = file.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {

          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {

        // Turn each file entry into is file contents
        return grunt.file.read(filepath);

      // Join all the css files
      }).join(grunt.util.linefeed);

      // Compress the css
      var output = condense.compress(input, options);

      if (output.length < 1) {
        grunt.log.warn('Destination not written because compiled files were empty.');
      } else {
        grunt.file.write(file.dest, output);
        grunt.log.writeln('File ' + file.dest + ' created.');
      }
    });
  });

};
