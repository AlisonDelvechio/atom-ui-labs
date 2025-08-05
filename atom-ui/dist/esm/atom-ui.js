import { p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-C63bCTfv.js';
export { s as setNonce } from './index-C63bCTfv.js';

/*
 Stencil Client Patch Browser v4.33.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["atom-alert",[[1,"atom-alert",{"device":[1],"status":[1],"icon":[1],"text":[1],"textColor":[1,"textcolor"],"iconColor":[1,"iconcolor"],"strokeColor":[1,"strokecolor"],"hasCloseIcon":[4,"hascloseicon"],"hasStatusIcon":[4,"hasstatusicon"]}]]],["atom-button",[[1,"atom-button",{"label":[1],"type":[1],"variant":[1]}]]],["menu-accordion",[[1,"menu-accordion",{"heading":[1],"device":[1],"expanded":[4],"isExpanded":[32]}]]]], options);
});
//# sourceMappingURL=atom-ui.js.map

//# sourceMappingURL=atom-ui.js.map