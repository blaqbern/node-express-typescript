import { app } from './app'

app.listen(4000, (err: Error) => {
  if (err) console.error(`We ran into an error while starting the GraphQL server: ${err}`)
  console.log('GraphQL server running on port 4000')
})
