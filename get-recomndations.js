const NPR = require('npr-api'),
      npr = new NPR(),
      spawn = require('child_process').spawn;

const config = require('./config');

// paste in your token here
//const token = '079cb7780369cd16adea95b570efc820adc16728dee4d29c30a39c9aa03ab9988bda87e5cfd81879';
const token = config.get('ACCESS_TOKEN');

npr.one.init(token)
  .then(function() {
    return npr.one.listening.getRecommendations({ channel: 'npr' });
    //return npr.one.listening.getChannels();
    //return npr.one.identity.getUser();
  })
  .then(function(recommendations) {

    for(let r of recommendations.items){
      r.links.audio.forEach(function (audio){
	console.log(audio.href);
	let domain = audio.href.match(/([a-z]+(\.[a-z]+)+)/g)[0];
	let checkDomain = spawn('host', ['-t', 'AAAA', domain]);
	let output = '';
	checkDomain.stdout.on('data', function(chunk){
	  output += chunk.toString();
	});
	checkDomain.on('close', function(){
	  if(output.match('IPv6')){
	    console.log(output);
	  }else{
	    console.log(`Domain ${domain} doesn't support IPv6`);
	  }
	});
      });
    }
  }).catch(console.err);
