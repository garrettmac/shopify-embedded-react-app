
/**
* @method root
*
*
*/
import config from '../config';
const root =(req, res) => {
  console.log(req.session)
  if (req.session.token) {
    res.render(`${__dirname}/../index`, {
      apiKey: config.SHOPIFY_APP_API_KEY,
      shopOrigin: req.session.shop
    })
  } else {
    res.redirect('/install');
  }
}
export default root
