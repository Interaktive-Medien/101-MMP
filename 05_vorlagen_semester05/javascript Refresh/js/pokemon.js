let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
const app = document.querySelector('#app');

fetch(url)
    .then(response => response.json())
    .then(data => {

        // function to generate HTML code for a Pokemon card
        function generatePokemonCard(pokemon) {
            return `
                <div class="column is-one-third">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">${pokemon.name}</p>
                        </header>
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name} Image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <p>Type: ${pokemon.types[0].type.name}</p>
                                <p>HP: ${pokemon.stats[0].base_stat}</p>
                                <p>Attack: ${pokemon.moves[0].move.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // variable to keep track of how many cards have been generated
        let cardCount = 0;

        // append each Pokemon card to the app element
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    // check if it's the first card of a new row
                    if (cardCount % 3 === 0) {
                        // if it is, open a new container div with class 'columns'
                        app.insertAdjacentHTML('beforeend', '<div class="columns">');
                    }

                    const pokemonCard = generatePokemonCard(pokemonData);
                    // find the last .columns div and append the card to it
                    const columnsDiv = app.querySelector('.columns:last-child');
                    columnsDiv.insertAdjacentHTML('beforeend', pokemonCard);

                    cardCount += 1;

                    // check if it's the last card of a row
                    if (cardCount % 3 === 0) {
                        // if it is, close the container div
                        // (in this setup, this is not strictly necessary as each div is closed immediately after being opened,
                        // but it's good practice to show where the div would be closed if it were necessary)
                        app.insertAdjacentHTML('beforeend', '</div>');
                    }
                });
        });
    });
