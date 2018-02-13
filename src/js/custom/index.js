
baguetteBox.run('.lightbox-gallery');

document.querySelectorAll('.js-navbar__toggle').forEach(function(item) {
    item.addEventListener("click", function() {
        document.querySelector('.js-navbar__toggle-target').classList.toggle('is_visible');
    }, false);
});

document.querySelectorAll('.js-dropdown__button').forEach(function(item){
    item.addEventListener("click", function(){
        var targetElement = item.nextElementSibling;
        var allElements = document.querySelectorAll('.js-dropdown__target');
        var otherElements = Array.from(allElements).filter(function(element){ return element != targetElement});
        otherElements.forEach( function(element) { element.classList.remove('is_visible'); } );
        targetElement.classList.toggle('is_visible');
    }, false);
});
