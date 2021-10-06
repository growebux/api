const express = require('express');
const app = express();
console.log('BestBuy section')

app.listen(3000, function() {
    console.log('listening on 3000')
  })

app.get('/', (req, res) => {
    res.send('Connection Stablish')
})

