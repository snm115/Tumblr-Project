
require('dotenv').config();

console.log(process.env);

const tumblr = require('tumblr.js');
const client = tumblr.createClient({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
});




client.userInfo(function(err, data) {
    data.user.blogs.forEach(function(blog) {
      console.log(blog.name);
    });
});



client.createPost(
	'jsetheoristguide',
	{
        content: [
            {
                "type": "text",
                "subtype": "heading1",
		        "text": "Have you recently experienced",
		        
            },
            {
                "type": "text",
                "text": "a terrible occurrance"
            },
            
            
        ],
        tags: [
            "that has impacted you significantly?"
        ]
        
		
	},
	function ( err, data, response ) {
		if ( err ){
			console.log( 'error:', err );
		}
		else{
			console.log( 'post sent!' );
		}
	}
);