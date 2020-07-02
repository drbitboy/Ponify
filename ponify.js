
function ponify(n) {
  var pony_src = "https://a.slack-edge.com/80588/img/unread/empty/google/1f434.png";
  var div_HTML = "You're all read.<br>Here's a pony.<br><div style=\"font-size: 10px; font-weight: 450;\">(Courtesy of BigTimeCharley)</div>";

  // Find the image tag with class .p-unreads_view__empty_image
  var outer_divs = document.querySelectorAll("div.p-unreads_view__empty__message");
  var imgs = outer_divs.length>0 ? outer_divs[0].querySelectorAll("img.p-unreads_view__empty__image") : [];

  if (imgs.length == 0) {
    // Try no more than 10 times
    if (n < 10) {
      // Try again in 1s if no elements with that class are loaded yet
      setTimeout(() => { ponify(n+1); }, 1000);
    }
  } else {
    for (var i=0, l=imgs.length;i<l;i++) {
      // Change the image source ...
      if (imgs[i].src != pony_src) {
        imgs[i].src = pony_src;
        // ... and change the following DIV's HTML ...
        for (var j=0, jj=outer_divs.length; j<jj; j++) {
          var inner_divs = outer_divs[j].querySelectorAll("div");
          if (inner_divs.length == 1) {
            inner_divs[0].innerHTML = div_HTML;
          }
        }
      }
    }
  }
}

ponify(0);
