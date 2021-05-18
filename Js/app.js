  

//   url: https://gateway.marvel.com:443/v1/public/characters?apikey=b896ea1992603eb1afb04436dc5af5d0
//   public key: b896ea1992603eb1afb04436dc5af5d0
//   private key: ebae14ed76bc1c50cc83a98764c85b01582c86a2
//   hash: b6a0b32ab95cbfac1e17650df9d12a1b


const limit = 15;
const container = document.getElementById('container');
container.setAttribute("class","contenedor");

const searchInput = document.getElementById('searchInput');

const next = document.getElementById('next');

const back = document.getElementById('back');




// funcion fetch api
const characters = async()=>{
    
   try {
        const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b896ea1992603eb1afb04436dc5af5d0&limit=${limit}&hash=b6a0b32ab95cbfac1e17650df9d12a1b`);
        const data = await res.json();
        console.log(data.data);

        data.data.results.map(e => {
             
            container.innerHTML += `
               
                    <div class="item">  
                        <img class="hero-img" src="${ e.thumbnail.path }.${ e.thumbnail.extension }" alt="${ e.name }">
                        <span class="hero-span"></span>
                        <a class="hero-name" href="${e.thumbnail.path}.${e.thumbnail.extension}" target="_blank">${e.name}</a>
                    </div>
                
            `
        });
    
    } catch (error) {
       console.log(error)
    }
};



// funcion para el buscador de heroes
const searchHero =  name =>{
    
        console.log(searchHero)
        const hero = encodeURIComponent(name)
        const url =`https://gateway.marvel.com:443/v1/public/characters?name=${hero}&ts=1&apikey=b896ea1992603eb1afb04436dc5af5d0&hash=b6a0b32ab95cbfac1e17650df9d12a1b`;
        fetch(url)
        .then(response => response.json())
        .then(response => {

            response.data.results.map(e => {
                
             
                container.innerHTML += `
                        
                    <div class="item">
                        <img class="hero-img" src="${ e.thumbnail.path }.${ e.thumbnail.extension }" alt="${ e.name }">
                        <span class="hero-span"></span>
                        <a class="hero-name" href="${e.thumbnail.path}.${e.thumbnail.extension}" target="_blank">${e.name}</a>
                    </div>
                        
                    `
                 });
        })
        .catch(err => console.log(err));
 
};




// funcion para dar enter y buscar heroes

searchInput.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const value = e.target.value;
    if(e.keyCode === 13){
        container.innerHTML = '';
        pagination.innerHTML= '';
        searchHero(value.trim());
        
    }
});

// PAGINACION NEXT

let page = 0
next.addEventListener('click', e => {
    e.preventDefault;
    const nextPage = () => {
        page +=limit;
        const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b896ea1992603eb1afb04436dc5af5d0&limit=${limit}&hash=b6a0b32ab95cbfac1e17650df9d12a1b&offset=${page}`
    
        fetch(URL)
            .then(response => response.json())
            .then(response => {
                response.data.results.map(e => {
                
             
                    container.innerHTML += `
                            
                        <div class="item">
                            <img class="hero-img" src="${ e.thumbnail.path }.${ e.thumbnail.extension }" alt="${ e.name }">
                            <span class="hero-span"></span>
                            <a class="hero-name" href="caracteristicas.html" target="">${e.name}</a>
                        </div>
                            
                        `
                     });
            })
            .catch(err => console.log(err));
    }
    container.innerHTML = ''
    nextPage()

})



//PAGINACION BACK
back.addEventListener('click', e => {
    e.preventDefault;
    const backPage = () => {
        page -=limit
        const URL = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=b896ea1992603eb1afb04436dc5af5d0&limit=${limit}&hash=b6a0b32ab95cbfac1e17650df9d12a1b&offset=${page}`
    
        fetch(URL)
            .then(response => response.json())
            .then(response => {
                response.data.results.map(e => {
                
             
                    container.innerHTML += `
                            
                        <div class="item">
                            <img class="hero-img" src="${ e.thumbnail.path }.${ e.thumbnail.extension }" alt="${ e.name }">
                            <span class="hero-span"></span>
                            <a class="hero-name" href="caracteristicas.html" target="">${e.name}</a>
                        </div>
                            
                        `
                     });
            })
            .catch(err => console.log(err));
    }
    container.innerHTML = ''
    backPage()

})




// btn de search no anda aun

// const btnsearch = document.getElementById('btnsearch');
// btnsearch.addEventListener('click', (e)=>{
//     e.preventDefault();
//     alert('todavia no anda');
// })



characters();







{/* <a class="hero-name" href="caracteristicas.html" target="">${e.name}</a> */}