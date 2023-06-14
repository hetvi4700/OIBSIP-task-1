
  
    //   const scrollPos = window.scrollY;
  
    // const i=document.getElementsByClassName("round_thali");
    //   i.current.style.transform = `rotate(${scrollPos*0.18}deg)`;

    window.addEventListener('scroll', function() {
        var image = document.getElementById('myImage');
        var rotation = window.scrollY ; // Adjust the scroll-to-rotation ratio as needed
        image.style.transform = 'rotate(' + rotation*0.18 + 'deg)';
      });

  