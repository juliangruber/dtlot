$(function() {
  var bg = {
    el: $('#bg'),
    origWidth: 2248,
    origHeight: 1490
  };
  var prop = 2248/1490;
  resize();
  var win = $(window);
  win.resize(resize);

  var resizing = false;
  function resize() {
    if (resizing) return;
    resizing = true;
    var win = $(window);
    var curWidth = bg.el.width();
    var curHeight = bg.el.height();
    var winWidth = win.width();
    var winHeight = win.height();
    
    while(curWidth > winWidth && curHeight > winHeight) {
      curWidth--;
      curHeight = curWidth/prop;
    }
    while(curWidth < winWidth || curHeight < winHeight) {
      curWidth++;
      curHeight = curWidth/prop;
    }
    
    bg.el.width(curWidth);
    bg.el.height(curHeight);
    resizing = false;
  }
});

