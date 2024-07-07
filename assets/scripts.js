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
    $('img').click(function () {
        const instance = basicLightbox.create(`
            <img src="${$(this).attr('src')}" width="800" height="600">
        `);
        instance.show();
    });

    // Navbar burger toggle
    $('.navbar-burger').click(function () {
        $(this).toggleClass('is-active');
        $('#navbarBasicExample').toggleClass('is-active');
    });
});

function updateSizeInformation() {
    var imageLeftX = $find("<%= txtXImageLeft.ClientID %>");
    var imageLeftY = $find("<%= txtYImageLeft.ClientID %>");
    var imageRightX = $find("<%= txtXImageRight.ClientID %>");
    var imageRightY = $find("<%= txtYImageRight.ClientID %>");
    var imageLeft = document.getElementById("imageLeft");
    var imageRight = document.getElementById("imageRight");

    imageLeftX.set_value(imageLeft.naturalWidth);
    imageLeftY.set_value(imageLeft.naturalHeight);
    imageRightX.set_value(imageRight.naturalWidth);
    imageRightY.set_value(imageRight.naturalHeight);
}