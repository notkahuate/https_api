document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value;
    if (query) {
        const apiUrl = `https://http.cat/${query}`;
        
        fetch(apiUrl, { mode: 'no-cors' })
            .then(response => {
                
                const imageElement = document.getElementById('image-result');
                imageElement.src = apiUrl;  
                imageElement.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
    } else {
        alert("Por favor ingresa una búsqueda.");
    }
});
