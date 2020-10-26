module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1603728142864",
    "name": "Home",
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "load-scripts-in-head/src/lib/actions/loadScript.js",
      "settings": {
        "value": "https://assets.adobedtm.com/7b4b60abf672/7a8c22ed9c5e/launch-ad8b308e66b5-development.min.js",
        "method": "url"
      }
    }]
  }],
  "extensions": {},
  "property": {
    "settings": {
      "domains": ["example.com"]
    }
  },
  "company": {
    "orgId": "ABCDEFGHIJKLMNOPQRSTUVWX@AdobeOrg"
  },
  "buildInfo": {
    "turbineVersion": "26.0.2",
    "turbineBuildDate": "2020-10-26T16:02:24.288Z",
    "buildDate": "2020-10-26T16:02:24.288Z",
    "environment": "development"
  }
}