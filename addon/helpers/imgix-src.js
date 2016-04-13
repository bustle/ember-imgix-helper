import Ember from 'ember';

function buildUrl(src, query) {
  if (!src || !query) {
    return src;
  }
  if(src.indexOf('?') === -1) {
    src += '?';
  }
  return src + query;
}

var deviceDpr = Math.floor(window.devicePixelRatio) || 1;
var dprParams = deviceDpr > 1 ? ('&dpr=' + deviceDpr) : '';

export function imgixSrc(helperParams, helperOptions) {
  var src         = helperParams[0];
  var options     = helperOptions       || {};
  var query       = options.query       || '';
  var processGifs = options.processGifs || false;
  var applyDpr    = options.applyDpr    || false;

  if (applyDpr) {
    query += dprParams;
  }

  return buildUrl(src, query);
}

export default Ember.Helper.helper(imgixSrc);
