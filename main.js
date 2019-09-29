const submitButton = document.getElementById('submit');

const emailInput = document.getElementById('email-input');

const emailForm = document.getElementById('email-form');

const infoDiv = document.querySelector('.info');

let counter = 0;
// Email validation https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
//www.youtube.com/watch?v=eqJJDyF4mjA

// function validateEmail(emailInput) {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (emailInput.value.match(re)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let test1 = validateEmail('shahid@codeforgeek.com');
// let test2 = validateEmail('shahid@codeforgeek');
// let test3 = validateEmail(email);
// console.log(test1);
// console.log(test2);
// console.log(test3);

checkValidation = (event) => {
    event.preventDefault();
    console.log(emailInput.value);
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(emailInput.value));
    if (emailInput.value === "" || re.test(emailInput.value) == false) {
        if (counter === 0) {
            emailInput.classList.add('input-error');
            const p = document.createElement('p');
            p.textContent = 'Please provide a valid email';
            p.classList.add('input-error-message');
            infoDiv.appendChild(p);
            counter = 1; // ustalam counter na jeden, zeby nie dodawal mi juz ciagle elementu p
        }
    } else {
        // if (counter === 1) {
        emailInput.classList.remove('input-error');
        if (counter === 1) {
            infoDiv.removeChild(document.querySelector('.input-error-message'));
        }
        emailInput.value = "";
        counter = 0; //po wpisanie dobrego maila wyzeruj counter 
        // }

    }
}

submitButton.addEventListener('click', checkValidation);