const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const csv = require('csvtojson')

// APP 
const app = express()
app.use(bodyParser.json())
app.use(cors())

// Data
const csvFilePath='data.csv'
const jsonArray = []


// HELPER FUNCTIONS //////////////////////////
// TODO: cache via params
const paginate = (array, page_size = 20, page_number = 0) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((Math.max(page_number - 1, 0)) * page_size, page_number * page_size);
}

// TODO: cache via query 
const searchFor = (query) => {
  const filteredList = jsonArray.filter((line) => {
    // Basic string search of object
    return JSON.stringify(line).includes(query)
  })

  return filteredList;
}


// Endpoints //////////////////////////////////////////////////

app.get('/search', (req, res) => {
  let page = req.query.page;
  let limit = req.query.limit;
  let query = req.query.q

  console.log("SEARCH: ", { page, limit, query }) 
  const filteredList = searchFor(query);
  // uncomment to test search, note can be a very long list
  // console.log("LIST: ", filteredList)
 
  const search = paginate(filteredList, limit, page)
  console.log("SENDING: ",  {query, page, limit, total: filteredList.length, results: search})
  
  res.send({query, page, limit, total: filteredList.length, results: search})
});

// PORT 4000 //////////////////////////////////////////////

app.listen(4000, async () => {
  console.log("Listening on 4000")

  console.log ("PROCESSING CSV");
  // Mimic events on loading missed data on start up
  jsonArray.push(...await csv({ delimiter: "," }).fromFile(csvFilePath));
  console.log("UPLOADED TO JSON")  
})
