


const limit = 10;
const favorites = document.getElementById('favorites');
favorites.setAttribute("class","container-favorites");



const contenedorFavorites = async()=>{
    
    try {
         const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b896ea1992603eb1afb04436dc5af5d0&limit=${limit}&hash=b6a0b32ab95cbfac1e17650df9d12a1b`);
         const data = await res.json();
         console.log(data.data);
 
         data.data.results.map(e => {

            
              
            favorites.innerHTML = `
                
                     <div class="favorites-item">
                        <h1>FAVORITES</h1>
                    
                     </div>
                 
             `
         });
     
     } catch (error) {
        console.log(error)
     }
 };
 

 contenedorFavorites();