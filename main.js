// Redirecting Button to another page
// In HTML add onclick="onClickThanks()" to the button
// function onClickThanks() {
//     document.location.href="./thank-you.html";
// }

// Changing the color of the number buttons

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})

// Interactive number in the thank you section

