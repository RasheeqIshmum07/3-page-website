function process(){

    var person = document.getElementById(" nameBox").value ; 
    var courses = parseInt(document.getElementById(" idbox").value) ; 

       document.getElementById("content").innerHTML= 
       "Hello " + person + " ! Your ID is " + courses ;  
      
}

