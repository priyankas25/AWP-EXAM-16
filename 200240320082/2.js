function validateform() {
    let name = document.myform.email.value;
    let pw = document.myform.pwd.value;

    if (name==null || name == "") {
        alert("Enter your mail..");
        return false;
    }
    else if( pw.length() < 6) {
        alert("password should be more then 6 characters");
        return false;
    }
}

function displayy() {
    let now = document.querySelector("#input1").value;
    let now2 =document.querySelector("#input2").value; 

    let newdiv = document.querySelector("#refer1").cloneNode(true);

    newdiv.children[1].children[0].innerHTML = "email :" +now;
    newdiv.children[1].children[1].innerHTML = "password :"+ now2;

    newdiv.style.visibility = "visible";

    let divv = document.querySelector("#main");

    divv.insertBefore(newdiv, divv.firstChild);

}