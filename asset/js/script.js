document.addEventListener('DOMContentLoaded', () => {
    const heartConfig = {
        heartCount: 15,         
        minSize: 45,            
        maxSize: 65,            
        minDuration: 10,        
        maxDuration: 30,       
        symbols: ['💕', '💗', '💞', '💖', '💝', '💕']
    };

    const heartContainer = document.getElementById('background-hearts');

    function createHearts() {
        
        if (!heartContainer) return;


        const fragment = document.createDocumentFragment();

        for (let i = 0; i < heartConfig.heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('bg-heart');
            
    
            heart.innerHTML = heartConfig.symbols[Math.floor(Math.random() * heartConfig.symbols.length)];
            
            
            heart.style.left = Math.random() * 100 + '%';
            
            
            const size = Math.random() * (heartConfig.maxSize - heartConfig.minSize) + heartConfig.minSize;
            heart.style.fontSize = size + 'px';
            
            
            const duration = Math.random() * (heartConfig.maxDuration - heartConfig.minDuration) + heartConfig.minDuration;
            heart.style.animationDuration = duration + 's';
            
            
            heart.style.animationDelay = (Math.random() * 5) + 's';
            
            fragment.appendChild(heart);
        }

        heartContainer.appendChild(fragment);
    }

    createHearts();

    const flowerConfig = {
        heartCount: 20,         
        minSize: 45,            
        maxSize: 65,            
        minDuration: 10,        
        maxDuration: 30,       
        symbols: ['🌸', '🌷', '🌺', '🌹']
    };

    const flowerContainer = document.getElementById('background-flowers');


    function createFlowers() {
        
        if (!flowerContainer) return;


        const fragment = document.createDocumentFragment();

        for (let i = 0; i < flowerConfig.heartCount; i++) {
            const flower = document.createElement('div');
            flower.classList.add('bg-flower');
            
    
            flower.innerHTML = flowerConfig.symbols[Math.floor(Math.random() * flowerConfig.symbols.length)];
            
            
            flower.style.left = Math.random() * 100 + '%';
            
            
            const size = Math.random() * (flowerConfig.maxSize - flowerConfig.minSize) + flowerConfig.minSize;
            flower.style.fontSize = size + 'px';
            
            
            const duration = Math.random() * (flowerConfig.maxDuration - flowerConfig.minDuration) + flowerConfig.minDuration;
            flower.style.animationDuration = duration + 's';
            
            
            flower.style.animationDelay = (Math.random() * 5) + 's';
            
            fragment.appendChild(flower);
        }

        flowerContainer.appendChild(fragment);
    }

    createHearts();
    createFlowers();
});


function toggleLetter(event) {
    if (event) event.stopPropagation();
    
    const wrapper = document.querySelector('.envelope-wrapper');
    if (wrapper) {
        wrapper.classList.toggle('open');
    }
}