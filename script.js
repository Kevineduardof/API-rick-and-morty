const randomButton = document.getElementById("random-button")

randomButton.addEventListener('click', function() {
    const characterId = Math.floor(Math.random() * 671) + 1;
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter os dados do personagem');
            }
            return response.json();
        })
        .then(characterData => {
            displayCharacterInfo(characterData);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
})

function displayCharacterInfo(characterData) {
    const characterInfoDiv = document.getElementById('characterInfo');
    characterInfoDiv.innerHTML = `
        <img src="${characterData.image}">
        <h2>${characterData.name}</h2>
        <p><strong>Espécie:</strong> ${characterData.species}</p>
        <p><strong>Status:</strong> ${characterData.status}</p>
        <p><strong>Localização:</strong> ${characterData.location.name}</p>
    `;
}
