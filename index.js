document.addEventListener("DOMContentLoaded", () => 
{
    const avatar = document.getElementById('avatar');
    const controls = document.getElementById('controls');
    const saveButton = document.getElementById('save');

    // Define z-index for each part type
    const zIndexMap = 
    {
        color: 1,
        face: 2,
        glasses: 3,
        hair: 5,
        shirt: 4,
    };

    // Load saved avatar if exists
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) 
    {
        avatar.innerHTML = savedAvatar;
    }

    // Function to add part to avatar
    const addPart = (type, src) => 
    {
        let img = avatar.querySelector(`img[data-type="${type}"]`);
        if (!img) 
        {
            img = document.createElement('img');
            img.dataset.type = type;
            img.classList.add('part');
            img.style.zIndex = zIndexMap[type];
            avatar.appendChild(img);
        }
        img.src = src;
    };

    // Handle image click in controls
    controls.addEventListener('click', (e) => 
    {
        if (e.target.tagName === 'IMG') {
            const type = e.target.dataset.type;
            const src = e.target.src;
            addPart(type, src);
        }
    });

    // Save avatar state
    saveButton.addEventListener('click', () => 
    {
        localStorage.setItem('avatar', avatar.innerHTML);
        alert('Avatar saved!');
    });

    // Download the avatar
    
});


