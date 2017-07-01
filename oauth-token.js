var OAuth = require('oauth');

var OAuth2 = OAuth.OAuth2;
var nprOneConsumerKey ='nprone_trial_xVLPO91x2Xcqi';
var nprOneConsumerSecret = 'fQdjFEQyMdXFSPNMEfMhfwtr7qhG1990iSiBfnwt';
var oauth2 = new OAuth2(nprOneConsumerKey,
			nprOneConsumerSecret,
			'/https://api.npr.org/',
			null,
			'oauth2/token',
			null);
oauth2.getOAuthAccessToken(
  '',
  {'grant_type':'client_credentials'},
  function (e, access_token, refresh_token, results){
    console.log(e);
    console.log(results);
    console.log('bearer: ',access_token);
  });
