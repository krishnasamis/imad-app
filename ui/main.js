var button=document.getElementById('counter');

button.onclick=function(){
    
    //create a request object
    var request=new XMLHttpRequest();
    
    //capture response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(Request.status === 200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    //not done yet
    };
 //make the request   
 request.open('GET','http://krishnasamis2014it.imad.hasura-app.io/counter',true);
 request.send(null);
};

