


function animar () { 
    estado = $(this).css ("width");
    if (estado == "150px") {
        $(this).animate ({
            width:"310px",
            height:"310px",
            borderRadius: "50%",
        },300)
    } else {
        $(this).animate ({
            width:"150px",
            height:"150px",
            borderRadius: "0%",
        },300)
    }
 }

 $(".figura").hover (animar);

/*
 setInterval (function animar () { 
    estado = $(".figura").css ("width");
    console.log (estado);
    if (estado == "50px") {
        $(".figura").animate ({
            width:"75px",
            height:"75px",
            margin: "5px",
        },500)
    } else {
        $(".figura").animate ({
            width:"50px",
            height:"50px",
            margin: "2px",
        },500)
    }
 },600);

 */
 (function(){
    var moviendo= false;
    document.onmousemove = function(){
           moviendo= true;
    };
    setInterval (function() {
       if (!moviendo) {
        console.log("sin movimiento");
        $(".figura").animate ({
            width:"150px",
            height:"150px",
            borderRadius: "0%",
        })
           // No ha habido movimiento desde hace un segundo, aquí tu codigo
       } else {
           moviendo=false;
       }
    }, 1000); // Cada segundo, pon el valor que quieras.
 })()