let thumbnails = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('active');

for(var i=0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover', function() {
        // console.log(activeImages);
        if(activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }

        // add a Active classlist for making a clear image in class Thumbnail
        this.classList.add('active');
        // edit a Featured's src to be The image that was hovered (this.src = thumnails[i].src)
        document.getElementById('featured').src = this.src
    })
}

let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener("click", function() {
    document.getElementById('slider').scrollLeft -= 180

})

buttonRight.addEventListener("click", function() {
    document.getElementById('slider').scrollLeft += 180
})
