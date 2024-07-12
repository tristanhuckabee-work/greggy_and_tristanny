document.addEventListener('DOMContentLoaded', () => {
    let copyDiv = document.querySelector('#button--copy');
    copyDiv.addEventListener('click', () => {
        alert("Url copied!")
        navigator.clipboard.writeText(window.location.href);
    });
})