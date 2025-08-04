'use strict';

var index = require('./index-canyZBEu.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.33.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('atom-ui.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await index.globalScripts();
  return index.bootstrapLazy([["atom-alert.cjs",[[1,"atom-alert",{"device":[1],"status":[1],"icon":[1],"text":[1],"textColor":[1,"textcolor"],"iconColor":[1,"iconcolor"],"strokeColor":[1,"strokecolor"],"hasCloseIcon":[4,"hascloseicon"],"hasStatusIcon":[4,"hasstatusicon"]}]]],["atom-button.cjs",[[1,"atom-button",{"label":[1],"type":[1],"variant":[1]}]]],["menu-accordion.cjs",[[0,"menu-accordion",{"heading":[1],"device":[1],"expanded":[4],"items":[16],"isExpanded":[32]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=atom-ui.cjs.js.map

//# sourceMappingURL=atom-ui.cjs.js.map