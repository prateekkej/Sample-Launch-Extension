'use strict';
var loadScript = require('@adobe/reactor-load-script');
var document = require('@adobe/reactor-document');


module.exports = function (settings, event) {
  if (settings.method === "url") {
    loadScript(settings.value).then(function () {
      console.log("Script has been loaded from the url:" + settings.value);
    }).catch(function () {
      console.log("Script failed to load from the url:" + settings.value);
    });
    
  } else if (settings.method === "code") {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = settings.value;
    document.head.append(script);
  }

};
