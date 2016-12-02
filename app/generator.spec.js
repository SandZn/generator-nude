import test from 'yeoman-test';
import assert from 'yeoman-assert';
import packageJSON from '../package.json';

const generator = `${process.env.PWD}/${packageJSON.main}`;

describe('generate a scaffolding', scaffolding);

function scaffolding() {
  const params = {
    applicationName: 'lorem',
    appSecret: 'lorem',
  };

  it('files', done => {
    test
      .run(generator)
      .withPrompts(params)
      .toPromise()
      .then(assertionFiles);

    function assertionFiles() {
      assert.file([
        '.editorconfig',
        '.gitignore',
        '.eslintrc.js',
        '.yo-rc.json',
        'README.md',
        'app',
        'config.js',
        'app/controllers.js',
        'docs',
        'gulpfile.babel.js',
        'app/middlewares.js',
        'package.json',
        'app/routers.js',
        'test',
        'tasks',
      ]);

      done();
    }
  });
}
