/* global after */
'use strict';

let Users = require('../../server/users/users.model.js');

after(removeUsers);

function removeUsers(done) {
  Users
    .remove({test: true})
    .then(function() {
      done();
    });
}
