setInterval(change_background, 1000 * 60 * 60);
    
function change_background() {
  let currentDate = new Date();
  let time = currentDate.getHours()
    if (time >= 20 || time < 7) {
      var obj = document.getElementById("mainphoto");
      obj.setAttribute("style", "background-image: url('./pictures/mainphoto.jpeg'); background-position: 8%; ");
      document.body.innerHTML = document.body.innerHTML.replace('bg-light', 'bg-dark');
      document.body.innerHTML = document.body.innerHTML.replace('navbar-light', 'navbar-dark');
      
     }
 else {
    document.getElementById("mainphoto").style.backgroundImage = "url('./pictures/mainphoto2.jpeg')";
    
  } 
}



function darknav() {
  let currentDate = new Date();
  let time = currentDate.getHours()
    if (time >= 20 || time < 7) {
document.body.innerHTML = document.body.innerHTML.replace('bg-light', 'bg-dark');
document.body.innerHTML = document.body.innerHTML.replace('navbar-light', 'navbar-dark');
}
else {
   
   
 } 
}

