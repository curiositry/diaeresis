/* Diaeresis.js | Copyright (C) 2016 Curiositry (http://curiositry.com) | MIT Licensed */
(function(){
  var defaultConfig = {
      selector: "diaeresis",
      dictionary: {
        "naive": "naïve",
        "cooperat": "coöperat",
        "cooperatives": "coöperatives",
        "reestablish": "reëstablish",
        "preeminen": "preëminen",
        "eelect": "eëlect",
        "reenter": "reënter",
        "preeminent": "preëminent",
        "preempt": "preëmpt",
        "coordinat": "coördinat",
        "reengineer": "reëngineer",
        "reestablish": "reëstablish",
        "aioli": "aïoli",
        "schrodinger": "schrödinger",
        "zoolog": "zoölog",
        "mosaic": "mosaïc",
        "reexamin": "reëxamin",
        "deemphasiz": "deëmphasiz",
        "reenlist": "reënlist",
        "microorganism": "microörganism",
        "dais": "daïs"
    }
  };

  var config = {};

  function getTextNodes(el){
    var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
    while(n=walk.nextNode()) a.push(n);
    return a;
  };

  function addUpperCase(item){
    config.dictionary[item.toUpperCase()] = config.dictionary[item].toUpperCase();
  };

  function addTitleCase(item) {
    config.dictionary[item.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})] = config.dictionary[item].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

  function updateDictionary(config) {
    for (var item in config.dictionary) {
      if (config.dictionary.hasOwnProperty(item)) {
        addUpperCase(item);
        addTitleCase(item);
      }
    }
  };

  function init(userConfig){
    if(typeof userConfig == "undefined") {
      config = defaultConfig;
    } else {
      if (typeof userConfig.dictionary != "undefined") {
        // console.log(config.dictionary);
        // console.log(defaultConfig.dictionary);
        config.dictionary = Object.assign(defaultConfig.dictionary, userConfig.dictionary);
        // console.log("Merging dictionaries");
        // console.log(config.dictionary);
      }
      Object.assign(defaultConfig, config);
      config = defaultConfig;
    }

    updateDictionary(config);
    config["state"] = "ready";
  }

  function run() {
    var element = document.getElementById(config["selector"]);
    if (element == null) {
      console.log("Could not run Diaeresis on #"+config.selector+". Are you sure #"+config.selector+" is a valid id?");
    }

    for (var item in config.dictionary) {
      if (config.dictionary.hasOwnProperty(item)) {
        var textNodes = getTextNodes(element);
        for (var i = 0; i < textNodes.length; i++) {
          var node = textNodes[i];
          var text = node.textContent;
          // console.log("Replacing "+item +" with "+config.dictionary[item]);
          var findRegex = new RegExp(item, 'g');
          text = text.replace(findRegex, config.dictionary[item]);
          node.textContent = text;
        }
      }
    }
  }

  this.dDiaeresis = function () {
    var element = document.getElementById(config["selector"]);
    if (element == null) {
      console.log("Could not unrun Diaeresis on #"+config.selector+". Are you sure #"+config.selector+" is a valid id?");
    }

    for (var item in config.dictionary) {
      if (config.dictionary.hasOwnProperty(item)) {
        var textNodes = textNodesUnder(element);
        for (var i = 0; i < textNodes.length; i++) {
          var node = textNodes[i];
          var text = node.textContent;
          // console.log("unReplacing "+item +" with "+config.dictionary[item]);
          var findRegex = new RegExp(config.dictionary[item], 'g');
          text = text.replace(findRegex, item);
          node.textContent = text;
        }
      }
    }
  }

  this.Diaeresis = function (userConfig) {
    init(userConfig);
    run();
  }
})();
