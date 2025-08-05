'use strict';

var index = require('./index-canyZBEu.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await index.globalScripts();
  return index.bootstrapLazy([["atom-alert.cjs",[[1,"atom-alert",{"device":[1],"status":[1],"icon":[1],"text":[1],"textColor":[1,"textcolor"],"iconColor":[1,"iconcolor"],"strokeColor":[1,"strokecolor"],"hasCloseIcon":[4,"hascloseicon"],"hasStatusIcon":[4,"hasstatusicon"]}]]],["atom-button.cjs",[[1,"atom-button",{"label":[1],"type":[1],"variant":[1]}]]],["menu-accordion.cjs",[[1,"menu-accordion",{"heading":[1],"device":[1],"expanded":[4],"isExpanded":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
//# sourceMappingURL=loader.cjs.js.map

//# sourceMappingURL=loader.cjs.js.map