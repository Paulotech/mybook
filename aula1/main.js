let $inputName = document.querySelector('#name');
let $inputEmail = document.querySelector('#email');
let $inputButton = document.querySelector('.btn');
let $listUsers = document.querySelector('#users');
let $msg = document.querySelector('.msg');

function getUser() {
    let name = $inputName.value;
    let email = $inputEmail.value;
    
    if(name === "" || email === "") {
        $msg.classList.add("error");
        $msg.innerHTML = "Please enter all fields";

        setTimeout(() => $msg.remove(), 3000);
    } else {

        createList(name, email);
        $inputName.value = "";
        $inputEmail.value = "";

    }
    
}
function createList(name, email) {
    let $li = document.createElement('li');
    $li.append(`Name: ${name} | Email: ${email}`);

    $listUsers.appendChild($li);
    console.log($li);
}

$inputButton.addEventListener('click', (e)=> {
    e.preventDefault();
    getUser();
});





