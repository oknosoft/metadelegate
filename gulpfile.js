/**
 * gulpfile.js for metastore.js
 *
 * Created 12.12.2015<br />
 * @author  Evgeniy Malyarov
 */

var gulp = require('gulp');
module.exports = gulp;
var base64 = require('gulp-base64');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var resources = require('./lib/gulp-resource-concat.js');
var umd = require('gulp-umd');

// Сборка ресурсов
gulp.task('injected', function(){
	gulp.src([
		'./src/templates/*.html',
		'./data/create_tables.sql'
	])
		.pipe(resources('merged_data.js', function (data) {
			return new Buffer('$p.injected_data._mixin(' + JSON.stringify(data) + ');');
		}))
		.pipe(gulp.dest('./data'));
});

// Сборка css
gulp.task('css-base64', function () {
	return gulp.src([
			'./src/templates/metadelegate.css'
		])
		.pipe(base64({
			maxImageSize: 32*1024 // bytes
		}))
		.pipe(concat('metadelegate.css'))
		.pipe(csso())
		.pipe(gulp.dest('./dist'));
});

// Основная сборка проекта
gulp.task('main', function(){
	gulp.src([
			'./src/modifiers/*.js',
			'./data/merged_data.js',
			'./src/wdg_*.js',
			'./src/wnd_main.js',
			'./src/view_*.js'

		])
		.pipe(concat('metadelegate.js'))
		.pipe(umd({
			exports: function(file) {
				return 'undefined';
			}
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(rename('metadelegate.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});


var toRun = ['injected', 'main'];

// Главная задача
gulp.task('default', toRun, function(){});