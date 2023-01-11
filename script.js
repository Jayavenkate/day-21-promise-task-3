// 3.Brazilian Vehicles and Prices
let vehicle=document.getElementById('vehicle')
let calender_url=' https://parallelum.com.br/fipe/api/v1/carros/marcas'


async function calender_fetching(){
    try{
        var url_fetch=await fetch(calender_url)
        method:"GET"
    var res= await url_fetch.json()
    // console.log(res);
    res.forEach((vehicles)=>{
        let li =document.createElement('h3')
        li.innerText=vehicles.nome
        vehicle.appendChild(li) 
        let hi =document.createElement('p')
        hi.innerText=vehicles.codigo
        vehicle.appendChild(hi)
    })
}
    
catch(err){
    console.log(err);
    console.log(error);
    }   
}
    calender_fetching()