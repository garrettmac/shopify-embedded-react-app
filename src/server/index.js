import express from 'express';
import session from 'express-session'
import path from 'path';
import routes from './routes';

// `${__dirname}/../../.env`
import config from './config';

let app =  express();
app.set('view engine', 'ejs');

app.use(session({secret: 'keyboard cat'}));
app.use(express.static(`${__dirname}/../public`))

// Public React App
app.get('/', routes.root)
// Unless it's needs to be private and passed from Server to React App
app.get('/install', routes.install)
app.get('/shopify_auth', routes.shopify_auth)
app.get('/callback', routes.callback)
app.get('/products', routes.products)
app.get('/products:/id', routes.products)

//The react app handles the rest of the urls




app.listen(config.PORT, ()=>{
  console.log(config.logger("green"),`\nApp started!`)
  console.log(config.logger("bright"),`--------------------`)
  console.log(config.logger("bright"),`Serving on:`)
  console.log(config.logger("cyan"),` http://localhost:${config.PORT}`)
  console.log(config.logger("cyan"),` ${config.SHOPIFY_REDIRECT_URI.replace("/callback", "")}\n`)
  console.log(config.logger("bright"),`Server Routes:`)
  Object.keys(routes).map((route) => {
    console.log(config.logger("blue"),`  /${route.replace("root","")}`)
  })
  console.log(config.logger("bright"),`--------------------`)
})
