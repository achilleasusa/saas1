    var elasticsearch = require('elasticsearch');

    var client = new elasticsearch.Client({
        hosts: 'localhost:9200',
        //log: 'trace'
        
        //configuration for production server
        /*hosts: [
    		'https://[username]:[password]@[server]:[port]/',
    		'https://[username]:[password]@[server]:[port]/'
    	]*/
    });
    
    module.exports = client;