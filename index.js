let caixa = document.getElementById('container');
let newBox = document.getElementById('container_2')



function createCard(pokemon){
    const html = `
   <div class="card">
             <img src=${pokemon.sprites.front_default} class="photo">
             <p>${pokemon.name}</p>
         <div class="botoes">
             <div class="container_botoes">
                 <p class="choose">Choose</p>
                 <p id=${pokemon.name} class="info">Info</p>
             </div>
     </div>
 </div>
 
 `
 return html 
 
 }
 


function showNewBox(pokemon){
    newBox.style.display = "flex";

    const html = `caixa
    <div class="main_container_info">
        <h1>${pokemon.name}</h1>
        <div class="container_info">
            <ul class="text">
                <li class="list_item">Weight: ${pokemon.weight}</li>
                <li class="list_item">Height: ${pokemon.height}</li>
                <li class="list_item">Base experience: ${pokemon.base_experience} </li>
            </ul>
    
            <img src=${pokemon.sprites.front_shiny} alt="" class="pikachu_photo">
        </div>
    </div>
    `

    
    let contentBox = document.querySelector('.caixa_content')

    contentBox.innerHTML = html 

}




async function getOnePokemonAndInsertInHtml(url){
 
    let requisicao = await fetch(url);
    let pokemon = await requisicao.json();


    let novoCard = document.createElement('div');
    novoCard.innerHTML = createCard(pokemon); 

    caixa.appendChild(novoCard);
    const infoBtn = document.getElementById(pokemon.name)
    infoBtn.addEventListener("click", () => showNewBox(pokemon))
    
    
}



function closeNewBox(){
    newBox.style.display = "none";
}



async function getAllPokemons() {
    let requisicao = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20'); 
    let pokemons = await requisicao.json();
    
    pokemons.results.forEach(elemento => {getOnePokemonAndInsertInHtml(elemento.url)})
}



function closeNewBox(){
    newBox.style.display = "none";
}


window.onload = function(){
    getAllPokemons();
}













