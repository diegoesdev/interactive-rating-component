// Redirecting Button to another page
function onClickThanks() {
    document.location.href="./thank-you.html";
}

// Changing the color of the number buttons

// function changeColor() {
//     //document.querySelector(".card__rate--active").style.color = 'red';
//     let activeColor = document.querySelector('.card__rate--active');
    
//     activeColor.addEventListener('click', () => activeColor.style.backgroundColor = 'hsl(216, 12%, 54%)');
// }

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})
