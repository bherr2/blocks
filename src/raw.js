var fetchCache = require('./../lib/fetch-cache')
var mime = require('mime-types')


module.exports = async function get(req, res, next) {
  var {user, id, file} = req.params

  var url =`https://gist.githubusercontent.com/${user}/${id}/raw/${file}`

  // console.time(file)
  try{
    var text = await fetchCache(url, 'text')
    res.writeHead('200', {'Content-Type': mime.lookup(file)})
    res.end(text)
  } catch(e){
    console.log(e)
    res.writeHead('404')
    res.end('')
  }

  // console.timeEnd(file)
}


if (require.main === module){
}