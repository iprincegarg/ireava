function myFunction() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
}
window.onload = myFunction;

function basic01() {
  var input = document.getElementsByName("product");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].tagName == 'SELECT') {
      total += Number(input[i].options[input[i].selectedIndex].value);
    }
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total").value = "Rs. " + total.toFixed(2);
}

function basic02() {
  var input = document.getElementsByName("product1");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].tagName == 'SELECT') {
      total += Number(input[i].options[input[i].selectedIndex].value);
    }
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total1").value = "Rs. " + total.toFixed(2);
}

function standard01() {
  var input = document.getElementsByName("product2");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].tagName == 'SELECT') {
      total += Number(input[i].options[input[i].selectedIndex].value);
    }
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total2").value = "Rs. " + total.toFixed(2);
}

function standard02() {
  var input = document.getElementsByName("product3");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].tagName == 'SELECT') {
      total += Number(input[i].options[input[i].selectedIndex].value);
    }
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total3").value = "Rs. " + total.toFixed(2);
}

function premium01() {
  var input = document.getElementsByName("product4");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].tagName == 'SELECT') {
      total += Number(input[i].options[input[i].selectedIndex].value);
    }
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total4").value = "Rs. " + total.toFixed(2);
}

function premium02() {
  var input = document.getElementsByName("product5");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].tagName == 'SELECT') {
      total += Number(input[i].options[input[i].selectedIndex].value);
    }
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total5").value = "Rs. " + total.toFixed(2);
}

function standard11() {
  var input = document.getElementsByName("product6");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].tagName == 'SELECT') {
      total += Number(input[i].options[input[i].selectedIndex].value);
    }
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total6").value = "$ " + total.toFixed(2);
}

function standard12() {
  var input = document.getElementsByName("product7");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].tagName == 'SELECT') {
      total += Number(input[i].options[input[i].selectedIndex].value);
    }
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total7").value = "$ " + total.toFixed(2);
}

    $(document).ready(function () {
      var activeDiv = 1;
      showDiv(activeDiv);
      var timer = setInterval(changeDiv, 7000);

      function changeDiv() {
        activeDiv++;
        if (activeDiv == 5) {
          activeDiv = 1;
        }
        showDiv(activeDiv);
      }

      function showDiv(num) {
        $('h1.displayn').hide();
        $('#div1_' + num).fadeIn();
      }
    });

    $(document).ready(function () {
      var activeDiv = 1;
      showDiv(activeDiv);
      var timer = setInterval(changeDiv, 7000);

      function changeDiv() {
        activeDiv++;
        if (activeDiv == 5) {
          activeDiv = 1;
        }
        showDiv(activeDiv);
      }

      function showDiv(num) {
        $('h3.displayn').hide();
        $('#div2_' + num).fadeIn();
      }
    });

    var img = $("#exampleImage");
    var configObject = {
      sourceUrl: img.attr("data-videourl"),
      triggerElement: "#" + img.attr("id"),
      progressCallback: function () {
        console.log("Callback Invoked.");
      }
    };
    var videoBuild = new YoutubeOverlayModule(configObject);
    videoBuild.activateDeployment();

    var img = $("#exampleImage1");
    var configObject = {
      sourceUrl: img.attr("data-videourl"),
      triggerElement: "#" + img.attr("id"),
      progressCallback: function () {
        console.log("Callback Invoked.");
      } 
    };
    var videoBuild = new YoutubeOverlayModule(configObject);
    videoBuild.activateDeployment();

    $('#owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    })
    $('#owl-carousel1').owlCarousel({
      dots: false,
      slideTransition: 'linear',
      autoplaySpeed: 250000,
      autoplay:true,
      autoplayTimeout:0,
      margin:10,
      nav:false,

      responsive: {
        0: {
          items: 2,
          autoplayHoverPause: true
        },
        600: {
          items: 3,
          autoplayHoverPause: true
        },
        1000: {
          items: 5,
          autoplayHoverPause: true
        }
      }
    })
    $('#owl-carousel2').owlCarousel({
      loop: true,
      margin: 30,
      dots: false,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    })
    $('#owl-carousel3').owlCarousel({
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive: {
        0: {
          items: 1,
          autoplayHoverPause: true
        },
        600: {
          items: 1,
          autoplayHoverPause: true
        },
        1000: {
          items: 2,
          autoplayHoverPause: true
        }
      }
    })
