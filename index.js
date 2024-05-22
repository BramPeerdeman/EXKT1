document.addEventListener("DOMContentLoaded", () => 
{
    // Get the avatar container element
    const avatar = document.getElementById('avatar');
    // Get the controls container element
    const controls = document.getElementById('controls');
    // Get the save button element
    const saveButton = document.getElementById('save');

    // Define z-index for each part type to layer them correctly
    const zIndexMap = { color: 1, face: 2, glasses: 3, hair: 5, shirt: 4 };

    // Load saved avatar from local storage if it exists
    if (localStorage.getItem('avatar')) 
    {
        avatar.innerHTML = localStorage.getItem('avatar');
    }

    // Function to add a part to the avatar
    const addPart = (type, src) => 
    {
        // Check if an image of the same type already exists
        let img = avatar.querySelector(`img[data-type="${type}"]`);
        
        if (!img) 
        {
            // Create a new image element if it doesn't exist
            img = document.createElement('img');
            img.dataset.type = type;
            img.classList.add('part');
            img.style.zIndex = zIndexMap[type];
            avatar.appendChild(img);
        }
        // Set the source of the image
        img.src = src;
    };

    // Handle image click events in the controls
    controls.addEventListener('click', (e) => 
    {
        // Check if the clicked element is an image
        if (e.target.tagName === 'IMG') 
        {
            // Add the selected part to the avatar
            addPart(e.target.dataset.type, e.target.src);
        }
    });

    // Save the current state of the avatar to local storage
    saveButton.addEventListener('click', () => 
    {
        localStorage.setItem('avatar', avatar.innerHTML); // Save the inner HTML of the avatar element
        alert('Avatar saved!'); // Notify the user that the avatar has been saved
    });
});


    // //====== Extra ======//
    // // Download your own made avatar
    // $('#download').click(function() 
    // {
    //     function download(filename, blob)
    //     {
    //         if (window.navigator.msSaveOrOpenBlob)
    //         {
    //             window.navigator.msSaveBlob(blob, filename);
    //         }
    //         else
    //         {
    //             const elem = window.document.createElement('a');
                
    //             elem.href = window.URL.createObjectURL(blob);
    //             elem.download = filename;

    //             document.body.appendChild(elem);

    //             elem.click();

    //             document.body.removeChild(elem);
    //         }
    //     }
        
    //     let img = document.querySelector('#avatar');
    //     let data = (new XMLSerializer()).serializeToString(img);

    //     let canvas = document.createElement('canvas');

    //     html2canvas(document.querySelector("#avatar")).then(canvas => 
    //         {
    //         canvas.toBlob(function(blob) 
    //         {
    //             download('MyAvatar.png', blob);
    //         });
    //     });
    // });



