
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/button"
  },
  {
    "renderMode": 2,
    "route": "/alert"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23696, hash: 'de4475ee1cf7be3036b19aaccecc23eb4ef831e4f588f55157e23f805dfef4c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17170, hash: 'd1ff431bbdd162c7def0d90329ec7d45fd9c28e981bf319e0ef26b5d63395904', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 31563, hash: '9a2b106e1018df5868ff0ebc00a21dc89651a18dc257815184b9d6f6fe61859a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'button/index.html': {size: 29732, hash: 'ced12897fc525f8ddf0ea1fbe2813b81e599d706d963ea2f53a45a5e4410583d', text: () => import('./assets-chunks/button_index_html.mjs').then(m => m.default)},
    'alert/index.html': {size: 34191, hash: '5078e65b603b3f700a310e0e9d0294b076686bdc636dcfdcab16beea54288bfb', text: () => import('./assets-chunks/alert_index_html.mjs').then(m => m.default)},
    'styles-EJPOJKZW.css': {size: 7159, hash: 'Kf90JcOAkhE', text: () => import('./assets-chunks/styles-EJPOJKZW_css.mjs').then(m => m.default)}
  },
};
