var button=document.getElementById('counter');

button.onclick=function(){
    
//create a request object
 var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                } 
          } 
    }; 
 //make the request   
 request.open('GET','http://krishnasamis2014it.imad.hasura-app.io/counter',true);
 request.send(); 
    console.log('EXECUTED');
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
    
        //create a request object
 var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    //make a request to server and send the name
                    //capture the list of names and render it.
                    var names=request.responseText;
                    names=JSON.parse(names);
                    var list='';
                    for(var i=0;i<names.length;i++){
                        list+='<li>' +names[i]+ '</li>';
                    }
                    var ul=document.getElementById('namelist');
                    ul.innerHTML=list;
                } 
          } 
    }; 
 //make the request   
 request.open('GET','http://krishnasamis2014it.imad.hasura-app.io/submit-name?name='+name,true);
 request.send(); 
    console.log('EXECUTED');
};


