console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile('greetings.html', `<h2>Created my new commit </h2>${user.username}!`);
