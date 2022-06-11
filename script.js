let pages = [...document.querySelectorAll('.hero')]
let pageLength = pages.length
let counter = 0

setInterval(()=>{
    if( counter >= pageLength) counter = 0
    console.log(counter)
    window.location = 'index.html#' + pages[counter].id
    counter ++

},5000)