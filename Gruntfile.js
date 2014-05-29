module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	nodewebkit: {
		options: {
			version: '0.9.2',
			build_dir: './build',
			win: true,
			mac: true,
			linux32: true,
			linux64: true,
			credits: false,
			mac_icns: "./images/favicon.icns",
			keep_nw: true,
			zip: false
		},
		src: ['**/**', '!**/node_modules/**', '!**/build/**', '!**/.gitignore', '!**/README.md', '!**/Gruntfile.js'] // Your node-wekit app
	}
});

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  // Default task(s).
  grunt.registerTask('default', ['nodewebkit']);

};
