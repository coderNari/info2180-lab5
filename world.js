window.onload = function(){
var btn = document.getElementById("lookup");
var result= document.getElementById('result');


      

btn.addEventListener('click', function(ev){
    ev.preventDefault();
    console.log('work')
    var toSearch= document.getElementById('country').value; 
    var url=  `http://localhost:8888/info2180-lab5/world.php?country=` +toSearch; 

    fetch(url)
            .then(response => response.text())
            
            .then(data =>{
            result.innerHTML= data;
            alert(data)
        })   
        

})

}