/**
 * Sample getting OW2 project
 *
 * Copyright(c) 2013 Christophe Hamerling <chamerling@ow2.org>
 * MIT Licensed
 */


var app = require('bamboo-status');

app.start({bamboo : 'http://bamboo.ow2.org'}, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Started!');
  }
})
