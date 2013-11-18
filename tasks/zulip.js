/*
 * grunt-zulip
 * https://github.com/all9lives/grunt-zulip-notify
 *
 * Copyright (c) 2013 all9lives
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var zulip = require('zulip');

  grunt.registerMultiTask('zulip', 'Grunt plugin to send messages to the zulip chat service when grunt tasks are run.', function() {

    var options = this.options({
        content: "test content",
        to: ['grunt-test'],
        subject: "test subject"
    });


    var client = new zulip.Client({
        email: options.email,
        api_key: options.api_key,
        verbose: true
    });

    client.sendMessage({
        type: "stream",
        content: options.content,
        to: options.to,
        subject: options.subject
    }, function (error, response) {
        if (error) {
            grunt.log.writeln("Something went wrong!", error);
            done();
        } else {
            grunt.log.writeln("Message sent!");
            done();
        }
    });

  });

};
