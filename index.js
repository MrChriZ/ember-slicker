'use strict';

module.exports = {
  name: 'slicker',
  
  treeForVendor(defaultTree) {        
    var map = require("broccoli-stew").map;
    var Funnel = require("broccoli-funnel");
    const mergeTrees = require('broccoli-merge-trees');
    // let browserVendorLib = new Funnel('node_modules/slick-carousel/slick/slick.js');    

    let browserVendorLib=new Funnel('node_modules/slick-carousel/slick/', {
      destDir: 'slick-carousel',
      files: ['slick.js']
    })
    
    browserVendorLib = map(browserVendorLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
    
    
    return new mergeTrees([defaultTree, browserVendorLib]);
  },

  included: function(app) {
    this._super.included(app);

    app.import("node_modules/slick-carousel/slick/slick.js");
    app.import("node_modules/slick-carousel/slick/slick.css");
    app.import("node_modules/slick-carousel/slick/slick-theme.css");
    app.import("node_modules/slick-carousel/slick/fonts/slick.ttf", {
      destDir: "assets/fonts"
    });
    app.import("node_modules/slick-carousel/slick/fonts/slick.svg", {
      destDir: "assets/fonts"
    });
    app.import("node_modules/slick-carousel/slick/fonts/slick.eot", {
      destDir: "assets/fonts"
    });
    app.import("node_modules/slick-carousel/slick/fonts/slick.woff", {
      destDir: "assets/fonts"
    });
    app.import("node_modules/slick-carousel/slick/ajax-loader.gif", {
      destDir: "assets"
    });
  }
};
