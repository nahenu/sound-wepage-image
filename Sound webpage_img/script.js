let mysong = document.getElementById("mysong");

function musicrun(){
   if(mysong.paused){
    mysong.play();
   music.src="pause.png";
   }else{
    mysong.pause();
    music.src="play.png";
   }
}

