var Keys{
	tweet{
		URL: "https://api.twitter.com/1.1/search/tweets.json?q=@burple_berry&result_type=recent&count=20&api_key=5ITwaUazjQNiG1JIXWrHskLvu",
		apiKey: "5ITwaUazjQNiG1JIXWrHskLvu",
		secret: "J8xbDiMVmOd94l0uD4c2Av4OApJNq2PJh2WdR918JUw67zfCxF",
		owner: "burple_berry"
		ownerId: "912492758136446976"
	},
	spotify{
		URL: "https://api.spotify.com/v1/search?q=" + musicalRequest + ""
	}
}

//GET https://api.spotify.com/v1/search
//Client ID: dc34cf44b460463b9589b361b137a61e
//Client Secret: fee5b1f4b10c4d3382f9851f755bc628
//GET https://api.spotify.com/v1/tracks/{dc34cf44b460463b9589b361b137a61e}

//https://api.twitter.com/1.1/statuses/mentions_timeline.json?count=20&since_id=14927799






var tweet{
	queryURL = "GET https://api.twitter.com/1.1/search/tweets.json?q=@burple_berry&result_type=recent&count=20&api_key=5ITwaUazjQNiG1JIXWrHskLvu"
	apiKey: "5ITwaUazjQNiG1JIXWrHskLvu",
	secret: "J8xbDiMVmOd94l0uD4c2Av4OApJNq2PJh2WdR918JUw67zfCxF",
	owner: "burple_berry"
	ownerId: "912492758136446976"
}

module.exports = Keys;
	//Twitter information
	// Consumer Key (API Key)	5ITwaUazjQNiG1JIXWrHskLvu
	// Consumer Secret (API Secret)	J8xbDiMVmOd94l0uD4c2Av4OApJNq2PJh2WdR918JUw67zfCxF
	// Access Level	Read and write (modify app permissions)
	// Owner	burple_berry
	// Owner ID	912492758136446976

	// GET https://api.twitter.com/1.1/search/tweets.json?
	// q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4



	//var key = "5ITwaUazjQNiG1JIXWrHskLvu";
	.ajax({
        url: queryURL,
        method: "GET"
      })
	var queryURL = "GET https://api.twitter.com/1.1/search/tweets.json?q=@burple_berry&since_id=912492758136446976&result_type=recent&count=20&api_key=5ITwaUazjQNiG1JIXWrHskLvu"


	//q=@burple_berry
	//since_id=912492758136446976
	//&result_type=recent
	//&count=4
var spotify{

}


