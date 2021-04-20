const http = require('http')
const fs = require('fs')

data = {
	name:"tony",
	track:"backend"
}
	fs.writeFile('posts.json', JSON.stringify(data), function() {
		console.log('file created...')
	})
const server = http.createServer(function (req, res) {
	res.writeHead(200)
	res.end('Server worked!')
})

server.listen(8080, function() {
	console.log('File served!!!')
})