const API_KEY = '563492ad6f91700001000001f5a14ebbf29c440c9027e148b622f006';


const icon = document.querySelector('.fa-search');
icon.addEventListener('click', function() {
    const search = document.querySelector('.main-search').value;
    const fullURL = `https://api.pexels.com/v1/search?query=${search}&per_page=6`;

    console.log('hi')

    const container = document.querySelector('.container');

    const oldGallery = document.querySelector('.gallery-container');
    if(oldGallery) {
        oldGallery.remove();
    }

    const gallery = document.createElement('div');
    gallery.style.paddingTop = '200px';
    gallery.innerText = "loading..."
    gallery.classList.add('gallery-container');
    container.insertAdjacentElement('beforeend', gallery);

fetch(fullURL, {
    method: 'GET',
    withCredentials: true,
    headers: {
        'Authorization': API_KEY,
        'Content-Type': 'application/json'
    }
})
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        const urls = data.photos.map(function(img) {
            return img.src.large;
        })
        console.log(urls)
        
        const container = document.querySelector('.container');

        const oldGallery = document.querySelector('.gallery-container');
        if(oldGallery) {
            oldGallery.remove();
        }

        const gallery = document.createElement('div');
        gallery.classList.add('gallery-container');
        container.insertAdjacentElement('beforeend', gallery);

        for(let i = 0; i < urls.length; i++) {
            const img = document.createElement('div');
            img.classList.add('photos');
            img.style.backgroundImage = `url('${urls[i]}')`;
            console.log(img.style.backgroundImage);
            gallery.appendChild(img);
        }
        
    
})

// add images to html


} )

