
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
    'index.csr.html': {size: 23696, hash: '41402423c5608306deeffd04cb567956e26b8bc33b992414c74fbb8b1829bc78', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17170, hash: 'b61e90d19fcb58e4f08eac14ada4984338e54e92b56a829f3c28e0198c7ac93d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'button/index.html': {size: 29732, hash: '8d5f0eea5de455fb0a9c08a93e008a36abcba71e3d6b92e591a1ed987e47db45', text: () => import('./assets-chunks/button_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31622, hash: '72d51ad1495e25848e9594fcac4a2d0fe2631c170fba640dfe720ff0f27e8be3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'alert/index.html': {size: 34191, hash: '0873c68dc000d1eac63da4363c033c2c8708905fede4c74bb325d6c9bf4240e3', text: () => import('./assets-chunks/alert_index_html.mjs').then(m => m.default)},
    'styles-EJPOJKZW.css': {size: 7159, hash: 'Kf90JcOAkhE', text: () => import('./assets-chunks/styles-EJPOJKZW_css.mjs').then(m => m.default)}
  },
};
