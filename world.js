document.addEventListener("DOMContentLoaded", () => {
var btn = document.getElementById("lookup")[0];
var result= document.getElementById('result');

btn.addEventListener('click', function(ev){
    ev.preventDefault();
    var toSearch= document.getElementById('country').value; 
    var url=  `world.php?country=${toSearch}`;
    
    fetch(url, {method: 'GET'})
            .then(response => response.text())
            
            .then(data =>{
            result.innerHTML= data 
        
        })

})

})