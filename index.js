const http = require('http')
const fs = require('fs')
const fetch = require("node-fetch")

let dataDirectory = 'result'
let filePath = fs.mkdir(__dirname + '/' + dataDirectory, { recursive: true }, (err) => {
  if (err) throw err;
});

const server = http.createServer(function (req, res) {
	fetch('http://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
	  .then(response => response.json())
	  .then(json => {
	  	console.log(json)
		let stringedData = JSON.stringify(json, null, 2)
		fs.writeFileSync(dataDirectory + '/posts.json', stringedData)	  
	  })

	res.writeHead(200)
	res.end('Data fetched & saved successfully!')
})

server.listen(8080, function() {
	console.log('Server is up...')
})