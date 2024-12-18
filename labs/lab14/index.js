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
        let lab2 = bodymovin.loadAnimation({
            container: document.getElementById('lab2'), // Required
            path: path + 'lab2.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab2",
        })
        let lab3 = bodymovin.loadAnimation({
            container: document.getElementById('lab3'), // Required
            path: path + 'lab3.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab3",
        })
        let lab4 = bodymovin.loadAnimation({
            container: document.getElementById('lab4'), // Required
            path: path + 'lab4.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab4",
        })
        let lab5 = bodymovin.loadAnimation({
            container: document.getElementById('lab5'), // Required
            path: path + 'lab5.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab5",
        })
        let lab6 = bodymovin.loadAnimation({
            container: document.getElementById('lab6'), // Required
            path: path + 'lab6.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab6",
        })
        let lab7 = bodymovin.loadAnimation({
            container: document.getElementById('lab7'), // Required
            path: path + 'lab7.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab7",
        })
        let lab8 = bodymovin.loadAnimation({
            container: document.getElementById('lab8'), // Required
            path: path + 'lab8.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab8",
        })
        let lab9 = bodymovin.loadAnimation({
            container: document.getElementById('lab9'), // Required
            path: path + 'lab9.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab9",
        })
    }
    initLabImage();
})
