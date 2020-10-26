'use strict';
var loadScript = require('@adobe/reactor-load-script');
var document = require('@adobe/reactor-document');


module.exports = function (settings, event) {

  switch(settings.method){
    case 'url':
      loadScript(settings.value).then(function () {
        turbine.logger.log("Script has been loaded from the url:" + settings.value);
      }).catch(function () {
        turbine.logger.error("Script failed to load from the url:" + settings.value);
      });
      break;
      case 'code':
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = settings.value;
        document.head.append(script);
        break;
  }

};
