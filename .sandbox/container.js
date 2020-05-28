module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1590687111000",
    "actions": [{
      "modulePath": "load-scripts-in-head/src/lib/actions/loadScript.js",
      "settings": {
        "value": "console.log(\"hello\");",
        "method": "code"
      }
    }],
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "name": "asd"
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
    "turbineVersion": "25.8.0",
    "turbineBuildDate": "2020-05-28T17:31:53.719Z",
    "buildDate": "2020-05-28T17:31:53.719Z",
    "environment": "development"
  }
}