

const limit = 15;
const character = document.getElementById('character');
character.setAttribute("class","container-character");





const contenedorCaracteristicas = async()=>{
    
    try {
         const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b896ea1992603eb1afb04436dc5af5d0&limit=${limit}&hash=b6a0b32ab95cbfac1e17650df9d12a1b`);
         const data = await res.json();
         console.log(data.data);
 
         data.data.results.map(e => {
                
            character.innerHTML = `
                
          
             `
         });
     
     } catch (error) {
        console.log(error)
     }
 };
 


 contenedorCaracteristicas();




 
// character.innerHTML 

//  <div class="">
//  <img  src="${e.thumbnail.path}.${e.thumbnail.extension}" class="hero-img" alt=${e.name} />
// </div>
// <div class=">
//  <div class="">
//      <h5 class=""> ${e.name} </h5>
//      <p class=""> ${(e.description.length <= 0)? 'No hay descripcion' : e.description} </p>
//  </div>
// </div>