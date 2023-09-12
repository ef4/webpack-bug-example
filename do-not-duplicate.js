if (window.LOADED) {
  throw new Error('do-not-duplicate.js was loaded twice!');
} else {
  console.log('do-not-duplicate.js loaded');
  window.LOADED = true;
}