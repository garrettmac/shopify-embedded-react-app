

/**
* @method callback
* After the users clicks 'Install' on the Shopify website, they are redirected here
* Shopify provides the app the is authorization_code, which is exchanged for an access token
*/

import config from '../config.js';

const callback =(req, res) => {
  const verified = config.shopifyToken.verifyHmac(req.query);
  console.log(verified)
  if(verified){
    config.shopifyToken.getAccessToken(req.query.shop, req.query.code).then((token) => {
      req.session.token = token;
      console.log(req.session)
      res.redirect('/');
    }).catch((err) => console.err(err));
  }
}
export default callback
