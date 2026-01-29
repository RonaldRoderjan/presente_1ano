function openMoment(title, text, imgSrc, spotifyUrl) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('modal-img').src = imgSrc;
    
    // Embed do Spotify (opcional)
    const musicDiv = document.getElementById('modal-music');
    musicDiv.innerHTML = `<iframe src="${spotifyUrl}" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function showSurprise() {
    alert("Prepare-se para o próximo ano! Eu te amo! ❤️");
    // Aqui você pode redirecionar para um vídeo no YouTube ou abrir um texto longo
}