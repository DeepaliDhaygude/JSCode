function readData() {

 
        document.getElementById('email').value = localStorage.getItem('email');
        document.getElementById('pwd').value = localStorage.getItem('password');


}
function saveSignInForm() {
    debugger;

    var markedCheckbox = document.querySelector('input[type="checkbox"]:checked');

    if (markedCheckbox) {
        // 1. each key at a time
        let email = document.getElementById('email').value;
        localStorage.setItem('email', email);
        let password = document.getElementById('pwd').value;
        localStorage.setItem('password', password);

        readData();
        alert('Successfully signed in!!!');
    }
    else {
        document.getElementById('email').value = "";
        document.getElementById('pwd').value = "";
    }
    //2. Object

}
function removeDataByKey() {
    localStorage.removeItem('email');
}
function removeAllSessionData() {
    localStorage.clear();
}

var userObj = {
    fname: "",
    lname: "",
    email2: "",
    password2: ""
};
// Moving to Sign: Up form
function inputFocus() {
    document.getElementById("focusButton").addEventListener("click", () => {
        document.getElementById("firstname").focus();
    });
}

//Sign Up Form
function saveSignUpForm() {
    userObj.fname = document.getElementById('firstname').value;
    userObj.lname = document.getElementById('lastname').value;
    userObj.email2 = document.getElementById('email2').value;
    let username = userObj.fname + " " + userObj.lname;
    userObj.password2 = document.getElementById('pwd2').value;

    debugger;

    let objStr = JSON.stringify(userObj);
    localStorage.setItem('userObject', objStr);

    readObjectData();
    document.getElementById('accountMsg').innerHTML = "<span style='color:green;'>Successfully Signed Up!!!</span>";
}
function readObjectData() {
    let sessionData = localStorage.getItem('userObject');
    let sessionObj = JSON.parse(sessionData);
    debugger;

    document.getElementById('firstname').value = userObj.fname;
    document.getElementById('lastname').value = userObj.lname;
    document.getElementById('email').value = sessionObj.email2;
    document.getElementById('pwd').value = sessionObj.password2;


}
function readData2(){
    alert(localStorage.getItem('fname') + " " +localStorage.getItem('lname'));
    debugger;
    document.getElementById('firstname').value = localStorage.getItem('fname');
    document.getElementById('lastname').value = localStorage.getItem('lname');

}

function removeDataByKey(){
    localStorage.removeItem('email');
}
function removeAllSessionData(){
    localStorage.clear();
}