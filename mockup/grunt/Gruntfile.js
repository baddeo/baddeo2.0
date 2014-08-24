module.exports = function(grunt) 
{

	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),

		compass: 
		{
			// shared options for this task  
			options: 
			{
				sassDir: '../scss',
				environment: 'production',
				outputStyle: 'compressed',
				noLineComments: true
			},

			// specific options for dev
			dev:
			{
				options: 
				{
					cssDir: '../css',
					environment: 'development',
					outputStyle: 'expanded',
					noLineComments: false
				}
			}
		},

		watch:
		{
			css: 
			{
				files: ['../scss/*.scss'],
				tasks: ['compass:dev'],
				options: 
				{
					spawn: false,
					livereload: true
				}
			}
		}

	})
	
	grunt.loadNpmTasks('grunt-contrib-compass')
	grunt.loadNpmTasks('grunt-contrib-watch')

	grunt.registerTask('default', ['compass'])
}