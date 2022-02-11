import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'tomb-series.myshopify.com',
  storefrontAccessToken: 'c18fda81f0ba6a5408950740bd146685'
});

export { client }