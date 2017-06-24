
/**
* @method shopify_auth
* This function initializes the Shopify OAuth Process
* The template in views/embedded_app_redirect.ejs is rendered
*/
import config from '../config.js';
const shopify_auth =(req, res) => {
  const shop = req.query.shop;
  req.session.shop = req.query.shop;
  if(shop){
    const nonce = config.shopifyToken.generateNonce();
    const scopes = "read_content,write_content,read_checkouts,write_checkouts,read_price_rules,write_price_rules,read_products,write_products,read_fulfillments,write_fulfillments,write_shipping,read_shipping,read_customers,write_customers,write_orders,read_orders,read_product_listings,write_apps,read_apps,read_script_tags,write_script_tags"
    //const scopes = 'read_products,read_customers,read_orders'
    const authUrl = config.shopifyToken.generateAuthUrl(shop, scopes, nonce)
    res.render(`${__dirname}/../redirect`, { authUrl })
  } else {
    res.status(400).send('Bad request: No shop param specified')
  }
}

export default shopify_auth
