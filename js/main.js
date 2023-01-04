/////// cursor pointer
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");


document.addEventListener("mousemove", function(e){
   var x = e.clientX;
   var y = e.clientY;  
     /// two way find out mousemove cursor
    // cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px"; 

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    
    cursor.style2.left = x + "px";
    cursor.style2.top = y + "px";
});
