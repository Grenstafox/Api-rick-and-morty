function getCharacter(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });

}

getCharacters(data => {
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment (
            
            <article>

            <div class="image-container">
                <img src="$(peronaje.image)" alt="Personaje">
            </div>

            <h2>${Personaje.name}</h2>
            <span>${Personaje.status}</span>

        </article>
        );

        const main = document.querySelector("main");

        main.append(article);
    });
});