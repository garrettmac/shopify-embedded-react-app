import path from 'path';
require('dotenv').config({path: path.resolve(`${__dirname}/../../.env`)})
import ShopifyToken from 'shopify-token';

const config={
  shopifyToken: new ShopifyToken({
                  apiKey: process.env.SHOPIFY_APP_API_KEY,
                  sharedSecret: process.env.SHOPIFY_APP_SECRET,
                  redirectUri: process.env.SHOPIFY_REDIRECT_URI
            }),
    SHOPIFY_REDIRECT_URI:process.env.SHOPIFY_REDIRECT_URI,
    SHOPIFY_APP_API_KEY:process.env.SHOPIFY_APP_API_KEY,
    SHOPIFY_APP_SECRET:process.env.SHOPIFY_APP_SECRET,
    PORT:process.env.PORT || 3000,
    logger:function(color='bright'){
      const colors={
              reset:"\x1b[0m%s\x1b[0m",
              bright:"\x1b[1m%s\x1b[0m",
              dim:"\x1b[2m%s\x1b[0m",
              underscore:"\x1b[4m%s\x1b[0m",
              blink:"\x1b[5m%s\x1b[0m",
              reverse:"\x1b[7m%s\x1b[0m",
              hidden:"\x1b[8m%s\x1b[0m",
              black:"\x1b[30m%s\x1b[0m",
              red:"\x1b[31m%s\x1b[0m",
              green:"\x1b[32m%s\x1b[0m",
              yellow:"\x1b[33m%s\x1b[0m",
              blue:"\x1b[34m%s\x1b[0m",
              magenta:"\x1b[35m%s\x1b[0m",
              cyan:"\x1b[36m%s\x1b[0m",
              white:"\x1b[37m%s\x1b[0m",
    }
return colors[`${color}`]
    }

}


export default config
