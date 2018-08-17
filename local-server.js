const app = require('./dist/server-bundle')

console.log({ app })
app.listen(4000, err => {
  if (err) console.error(`GraphQL server encountered an error: ${err}`)
  console.log('GraphQL server running on port 4000')
})
