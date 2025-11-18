function video() {
    const photo = document.getElementById('photo');
    const video = document.getElementById('vid');
    photo.style.display = 'none';
    video.style.display = 'block';
    video.play()
        .catch(error => {
            console.error("Autoplay failed");
        })
}

function toggle(clickedButton) {
    const content = clickedButton.nextElementSibling;
    const container = clickedButton.closest('.main');
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}