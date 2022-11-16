window.onload = function(){

    const btn = document.getElementById('lookup');
    const result= document.getElementById('result');

    btn.addEventListener('click', function(ev){
        ev.preventDefault();
        console.log('work')
        var country= document.getElementById('country').value; 
        console.log(country);
        var url=  `http://localhost:8888/info2180-lab5/world.php?country=` +country; 
        console.log(url);

        fetch(url)
            .then(response => response.text())
                
            .then(data =>{
                console.log(data)
                result.innerHTML= data;
            })           
    })

    btn.addEventListener('click', function(ev){
        ev.preventDefault();
        console.log('work')
        var country= document.getElementById('country').value; 
        console.log(country);
        var url=  `http://localhost:8888/info2180-lab5/world.php?country=${country}&context=cities`; 
        console.log(url);

        fetch(url)
            .then(response => response.text())
                
            .then(data =>{
                console.log(data)
                result.innerHTML= data;
            })           
    })
}