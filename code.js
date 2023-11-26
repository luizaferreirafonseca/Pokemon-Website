async function getAllPokemons() {
    let requisicao = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20'); 
    let pokemons = await requisicao.json();
    
    pokemons.results.forEach(elemento => {getOnePokemonAndInsertInHtml(elemento.url)})

   

    
}

let caixa = document.getElementById('container');


async function getOnePokemonAndInsertInHtml(url){
 
    let requisicao = await fetch(url);
    let pokemon = await requisicao.json();

    // caixa.innerHTML = createCard(pokemon.name, pokemon.sprites.front_default)

    let novoCard = document.createElement('div');
    novoCard.innerHTML = createCard(pokemon.name, pokemon.sprites.front_default); 

    caixa.appendChild(novoCard);
    
    
}


let newBox = document.getElementById('container_2')

function showNewBox(){
    newBox.style.display = "flex";
}


function createCard(nome, url){
   const html = `
  <div class="card">
            <img src=${url} class="photo">
            <p>${nome}</p>
        <div class="botoes">
            <div class="container_botoes">
                <p class="choose">Choose</p>
                <p id=${nome} class="info">Info</p>
            </div>
    </div>
</div>

`
const infoBtn = document.getElementById(nome)
infoBtn.onclick = showNewBox; 

return html 

}

window.onload = function(){
    getAllPokemons();
}





