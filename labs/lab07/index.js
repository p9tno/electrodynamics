$(document).ready(function() {
    let path = 'json/';

    function initLabImage() {
        let lab1 = bodymovin.loadAnimation({
            container: document.getElementById('lab1'), // Required
            path: path + 'lab1.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab1",
        })
    }
    initLabImage();
})
