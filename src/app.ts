import * as express from 'express'

export const app = express()
app.get('/', (req: express.Request, res: express.Response) =>
  res.json({
    message: 'Oh! Hello, there!',
    version: require(`${__dirname}/../package.json`).version,
  })
)

