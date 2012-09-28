var $ = require('jquery');

$(function() {
  var bg = {
    el: $('#bg'),
    origWidth: 2248,
    origHeight: 1490
  };
  resize();
  $(window).resize(resize);

  var resizing = false;
  function resize() {
    if (resizing) return;
    resizing = true;
    var win = $(window);
    var prop = bg.origWidth/bg.origHeight;
    while(bg.el.width()>win.width()&&bg.el.height()>win.height()) {
      bg.el.width(bg.el.width()-1);
      bg.el.height(bg.el.width()/prop);
    }
    while(bg.el.width()<win.width()||bg.el.height()<win.height()) {
      bg.el.width(bg.el.width()+1);
      bg.el.height(bg.el.width()/prop);
    }
    resizing = false;
  }
});

