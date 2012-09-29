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
    var windowDimensions = winDim();
    var curWidth = bg.el.width();
    var curHeight = bg.el.height();
    var winWidth = windowDimensions.width;
    var winHeight = windowDimensions.height;
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

  function winDim() {
    var myWidth = 0, myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
      //Non-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+ in 'standards compliant mode'
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }
    return {width: myWidth, height: myHeight};
  }
});

