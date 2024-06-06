document.getElementById('contact_button').addEventListener('click', function() {
    $('#contactModal').modal('show');
});

$('#contactModal').on('hidden.bs.modal', function () {
    $('#contactModal').remove();
});



function showReadMore() {
    const readMoreContent = document.getElementById('readMoreContent');
    readMoreContent.style.display = readMoreContent.style.display === 'none' || readMoreContent.style.display === '' ? 'block' : 'none';
}
function openLink() {
    window.open('https://fylehq.com', '_blank');
}



        function changeImage(imageSrc) {
            document.getElementById('displayedImage').src = imageSrc;
        }
