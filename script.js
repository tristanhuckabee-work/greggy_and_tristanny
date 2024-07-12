document.addEventListener('DOMContentLoaded', () => {
    console.log(navigator.clipboard);
    let copyButton = document.querySelector('#copy-button');
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
    });
})