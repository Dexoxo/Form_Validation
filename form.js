let userName = document.getElementById('userName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

let validName = false;
let validEmail = false;
let validPhone = false;

userName.addEventListener('blur', () => {
    let re = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = userName.value;
    if(re.test(str)) {
        userName.classList.remove('is-invalid');
        validName = true;
    }
    else {
        userName.classList.add('is-invalid');
        validName = false;
    }
});

email.addEventListener('blur', () => {
    let re = /^([_a-zA-Z0-9\.]+)@([a-zA-z\.]+)\.([a-zA-z\.]{2,7})$/;
    let str = email.value;
    if(re.test(str)) {
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else {
        email.classList.add("is-invalid");
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {
    let re = /[0-9]{10}/;
    let str = phone.value;
    if(re.test(str)) {
        phone.classList.remove("is-invalid");
        validPhone = true;
    }
    else {
        phone.classList.add("is-invalid");
        validPhone = false;
    }
});

//checkbox
// let checkbox = document.getElementById('flexCheckDefault');
// let btn = document.getElementById('btn');
// checkbox.addEventListener('change', ()=> {
//     if(checkbox.checked) {
//         btn.innerHTML = `<button type="button" id="btnSubmit" class="btn btn-primary my-3">Submit</button>`;
//     }
//     else {
//         btn.innerHTML = `<button type="button" id="btnSubmit" class="btn btn-primary my-3" disabled>Submit</button>`
//     }
// });


//submit btn
let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', (e)=> {
    e.preventDefault();
    let message = document.getElementById('message');
    if(validEmail && validName && validPhone) {
        message.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
          Your form have been submitted successfully!!
        </div>
      </div>`;
      setTimeout(() => {
        message.innerHTML="";
    }, 1000);
    }
    else {
        message.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
        Your form contains invalid entry please check!!
        </div>
        </div>`;
        setTimeout(() => {
            message.innerHTML="";
        }, 1000);
    }
});
