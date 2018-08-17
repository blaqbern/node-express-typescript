import * as express from 'express'

const app = express()
app.get('/', (req: express.Request, res: express.Response) =>
  res.json({
    message: 'Oh! Hello, there!',
    version: require(`${__dirname}/../package.json`).version,
  })
)

app.listen(4000, (err: Error) => {
  if (err) console.error(`We ran into an error while starting the GraphQL server: ${err}`)
  console.log('GraphQL server running on port 4000')
})

module.exports = app
