/*------------------------
--------------------------
Java script files and associates
Descriptive Java script files
--------------------------
--------------------------*/

    $('.owl-carousel').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        autoplaytimeout: 3000,
        dots: false,
        nav: true
    }

    );

    //click to slide up
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000);
    })

    //click to slide down
    $('.button btn').click(function(){
        $('html, body').animate({
            scrollTo: $("blog-post").offset().top
        }, 1000)
    })

 //function openForm () {
 //       document.getElementById("read").style.display = "block";
 //   }


    function openMenu() {
        document.getElementById("nav-bunch").style.display = "block";
    }

    function openForm1 () {
        document.getElementById("read-1").style.display = "block";
    }
    function closeForm1 () {
        document.getElementById("read-1").style.display = "none";
    }
    function openForm2 () {
        document.getElementById("read-2").style.display = "block";
    }
    function closeForm2 () {
        document.getElementById("read-2").style.display = "none";
    }
    function openForm3 () {
        document.getElementById("read-3").style.display = "block";
    }
    function closeForm3 () {
        document.getElementById("read-3").style.display = "none";
    }
    function openForm4 () {
        document.getElementById("read-4").style.display = "block";
    }
    function closeForm4 () {
        document.getElementById("read-4").style.display = "none";
    }
    function openForm5 () {
        document.getElementById("read-5").style.display = "block";
    }
    function closeForm5 () {
        document.getElementById("read-5").style.display = "none";
    }
    function openForm6 () {
        document.getElementById("read-6").style.display = "block";
    }
    function closeForm6 () {
        document.getElementById("read-6").style.display = "none";
    }
    function openForm7 () {
        document.getElementById("read-7").style.display = "block";
    }
    function closeForm7 () {
        document.getElementById("read-7").style.display = "none";
    }