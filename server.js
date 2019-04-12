const app = require('express')()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(4444, () => {
  console.log('Started on http://localhost:4444')
})
