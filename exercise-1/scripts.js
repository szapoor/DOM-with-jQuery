let myArray= ['Erik', 'Ancsa', 'Szandra'];
myArray.forEach(name => {
    $('ul').append('<li>'+name +'</li>')
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};