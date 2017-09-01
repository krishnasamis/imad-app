console.log('Loaded!');
var element=document.getElementById("maintxt");
element.innerHTML="Welcome to my World";
var img=document.getElementById("img-medium")
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft + "px" ;
    if(marginLeft===1000){
        marginLeft=0;
    }
    }
img.onclick=function(){
    var interval=setInterval(moveRight,50);
}