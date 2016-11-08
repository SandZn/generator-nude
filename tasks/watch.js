import gulp from 'gulp';
import {lint as scripts} from './config.js';

gulp.task('watch', watchTask);

function watchTask() {
  return gulp.watch(scripts, ['lint']);
}
