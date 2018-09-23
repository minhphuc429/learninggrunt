'use strict';
module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        concat: {
            options: {
                separator: '\n\n//---------------------------\n',
                banner: '//---------------------------\n'
            },
            dist: {
                src: ['components/scripts/*.js'],
                dest: 'builds/development/js/script.js'
            }
        },

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'builds/development/css/style.css': 'components/sass/style.scss'
                }
            }
        }, //sass

        // Auto add link
        tags: {
            buildScripts: {
                options: {
                    scriptTemplate: '<script type="text/javascript" src="{{ path }}"></script>',
                    openTag: '<!-- start script template tags -->',
                    closeTag: '<!-- end script template tags -->'
                },
                src: [
                    'builds/development/js/*.js'
                ],
                dest: 'builds/development/index.html'
            },
            buildLinks: {
                options: {
                    linkTemplate: '<link rel="stylesheet" type="text/css" href="{{ path }}" media="screen"/>',
                    openTag: '<!-- start css template tags -->',
                    closeTag: '<!-- end css template tags -->'
                },
                src: [
                    'builds/development/css/*.css'
                ],
                dest: 'builds/development/index.html'
            }
        },

        // Clean dist folder
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp'
                    ]
                }]
            },
            server: '.tmp'
        },

    }); // init config

    grunt.registerTask('default', ['concat', 'sass', 'tags', 'clean']);
};