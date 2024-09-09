$(document).ready(function () {
    // Example AJAX request
    $.ajax({
        url: 'https://api.example.com/data',
        method: 'GET',
        success: function (data) {
            console.log('Data retrieved:', data);
        },
        error: function (error) {
            console.error('Error retrieving data:', error);
        }
    });

    // BasicLightbox example
    $('img').on('click', function () {
        const imageSrc = $(this).attr('src');
        const instance = basicLightbox.create(`
            <img src="${imageSrc}" width="800" height="600" alt="Image preview">
        `);
        instance.show();
    });

    // Navbar burger toggle
    $('.navbar-burger').on('click', function () {
        $(this).toggleClass('is-active');
        $('#navbarBasicExample').toggleClass('is-active');
    });
});

// Example function to handle image size updates (assuming it's used)
function updateSizeInformation() {
    const imageLeft = document.getElementById("imageLeft");
    const imageRight = document.getElementById("imageRight");

    if (imageLeft && imageRight) {
        document.getElementById("txtXImageLeft").value = imageLeft.naturalWidth;
        document.getElementById("txtYImageLeft").value = imageLeft.naturalHeight;
        document.getElementById("txtXImageRight").value = imageRight.naturalWidth;
        document.getElementById("txtYImageRight").value = imageRight.naturalHeight;
    }
}