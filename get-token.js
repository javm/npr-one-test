const NPR = require('npr-api'),
      npr = new NPR();
const config = require('./config');
/*
const client_id = 'nprone_trial_xVLPO91x2Xcq',
      client_secret = 'z4HK18pIXPCu5ySbV0OTaYow3wl6E8Hnxq2lXq6V';
*/

const client_id = config.get('CLIENT_ID'),
      client_secret = config.get('CLIENT_SECRET');

npr.one.init()
   .then(function() {

     return npr.one.authorization
      .generateDeviceCode({
         client_id: client_id,
         client_secret: client_secret,
         scope: 'identity.readonly identity.write listening.readonly listening.write localactivation'
       });

   })
  .then(function(res) {

    return new Promise(function(resolve, reject) {

      console.log('Please visit the following URL:');
      console.log(`${res.verification_uri}\n`);
      console.log(`Enter code: ${res.user_code}\n`);
      console.log('Press the Spacebar when complete.');

      process.stdin.setRawMode(true);
      process.stdin.resume();

      process.stdin.on('data', function() {
        resolve(res.device_code);
      });

    });

  })
  .then(function(code) {
    return npr.one.authorization
      .createToken({
         grant_type: 'device_code',
         client_id: client_id,
         client_secret: client_secret,
         code: code
       });
  })
  .then(function(res) {
    console.log(`ACCESS TOKEN: ${res.access_token}`);
    process.exit();
  })
  .catch(function(err) {
    console.log(err.statusText);
    process.exit(1);
  });
