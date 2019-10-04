const submitButton = document.getElementById('submit');

const emailInput = document.getElementById('email-input');

const emailForm = document.getElementById('email-form');

const infoDiv = document.querySelector('.info');

let counter = 0;
// Email validation https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
//www.youtube.com/watch?v=eqJJDyF4mjA
//https://en.wikipedia.org/wiki/Regular_expression
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
//https://www.w3schools.com/jsref/jsref_regexp_0-9.asp
//https://docs.microsoft.com/pl-pl/dotnet/standard/base-types/regular-expression-language-quick-reference
//https://www.youtube.com/watch?v=7DG3kCDx53c
//https://www.youtube.com/watch?v=ABCAjc0npPw 

// function validateEmail(emailInput) {
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (emailInput.value.match(re)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let test1 = validateEmail('test@gmail.com');
// let test2 = validateEmail('testid@gmail');
// let test3 = validateEmail(email);
// console.log(test1);
// console.log(test2);
// console.log(test3);

//re - regular expresion, czyli łańcuch znaków, wzorzec opisujący łańcuch symboli

checkValidation = (event) => {
    event.preventDefault();
    console.log(emailInput.value);
    //walidacja maila
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(emailInput.value));
    if (emailInput.value === "" || re.test(emailInput.value) === false) { //jesli input jest pusty lub nie przeszedl walidacji to
        if (counter === 0) { //jesli counter jest rowny zeru wtedy dodaj klasy, zrobione aby przy kazdym kliknieciu tych klas i elementow wiele razy nie tworzyl, chociaz classlist.add tworzy raz
            emailInput.classList.add('input-error');
            const p = document.createElement('p');
            p.textContent = 'Please provide a valid email';
            p.classList.add('input-error-message');
            infoDiv.appendChild(p);
            counter = 1; // ustalam counter na jeden, zeby nie dodawal mi juz ciagle elementu p
        }
    } else {
        //w przeciwnym wypadku usun klase input-error
        emailInput.classList.remove('input-error');
        //jesli licznik wynosi 1, to wtedy usun powiadomienie tekstowe o bleden walidacji, bo juz jest niepotrzebne, bo mail zostal dobrze wpisany
        if (counter === 1) {
            infoDiv.removeChild(document.querySelector('.input-error-message'));
        }
        emailInput.value = ""; //po dobrym wpisaniu maila wyczysc value inputa
        counter = 0; //po wpisanie dobrego maila wyzeruj counter 

    }
}

submitButton.addEventListener('click', checkValidation);