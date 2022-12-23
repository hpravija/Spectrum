function getContent(id){
    return document.getElementById(id);
}
function feedback(div, msg, css){
    div.classList.add(css);
    div.innerHTML = msg;
    div.style.display = 'block';
    setTimeout(function(){div.style.display = 'none';div.classList.remove(css)}, 3000);
}

function validateForm(){
    let firstName = getContent('firstName');
    let lastName = getContent('lastName');
    let email = getContent('email');
    let div = getContent('msg');

    if(firstName.value === '' || lastName.value === '' || email.value === ''){
        feedback(div, 'Please enter all the fields!', 'error');
    }else{
        feedback(div, 'Joined successfully!', 'success');
    }
}