'use strict';

module.exports = function(grunt) {
  var whyYouNoBundle = require('y-u-no-bundle');
  var ExclusionManager = require('exclusion-manager');

  grunt.registerMultiTask('y_u_no_bundle', 'Grunt task for asserting that all of your AMD driver scripts are being bundled by r.js', function() {
    if (!this.data.root) {
      grunt.warn('Root not specified');
    }

    if (!this.data.config) {
      grunt.warn('Requirejs config not specified');
    }

    var exclusions = this.data.exclude;
    var done = this.async();

    whyYouNoBundle(this.data.root, this.data.config, function(notBundled) {
      if (exclusions.length) {
        var em = new ExclusionManager(exclusions);
        notBundled = notBundled.filter(function(file) {
          return !em.shouldIgnore(file);
        });
      }

      if (notBundled.length) {
        grunt.warn('Y u no bundle these scripts?!?!\n' + notBundled.join('\n') + '\n');
      }

      done(!notBundled.length);
    });
  });
};
