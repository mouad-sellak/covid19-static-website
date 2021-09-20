 var countImage=1;
 var totalImage=11;

 function slider(x){
    var image=document.getElementById('img');
    countImage+=x;
    image.src='images/'+countImage+'.jpg';
    if(countImage>=totalImage){
        countImage=1;
    }
    if(countImage<1){
        countImage=totalImage;
    }
 }

 function sliderAutomatic(){
    var image=document.getElementById('img');
    countImage+=1;
    image.src='images/'+countImage+'.jpg';
    if(countImage>=totalImage){
        countImage=1;
    }
    if(countImage<1){
        countImage=totalImage;
    }
 }

 window.setInterval(sliderAutomatic,3000);