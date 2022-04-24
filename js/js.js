setInterval(change_background, 1000 * 60 * 60);
    
function change_background() {
  let currentDate = new Date();
  let time = currentDate.getHours()
    if (time >= 20 || time < 7) {
   
 document.getElementById("mainphoto").style.backgroundImage = "url('./pictures/mainphoto.jpeg')";
  }
 else {
    document.getElementById("mainphoto").style.backgroundImage = "url('./pictures/mainphoto2.jpeg')";
  } 
}
    

    
    
// $(document).ready(function() {
//     $("#cf7_controls").on('click', 'span', function() {
//       $("#cf7 img").removeClass("opaque");
  
//       var newImage = $(this).index();
  
//       $("#cf7 img").eq(newImage).addClass("opaque");
  
//       $("#cf7_controls span").removeClass("selected");
//       $(this).addClass("selected");
//     });
//   });