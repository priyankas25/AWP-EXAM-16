function postit() {
    let sts = document.querySelector("#status1").value;

    let commbox = document.querySelector("#card2").cloneNode(true);
      
    commbox.children[0].innerHTML = sts;

    commbox.style.visibility = "visible";

    let maindiv = document.querySelector("#main");

    maindiv.insertBefore(commbox,maindiv.firstChild);

    document.querySelector("#ststus1").value = "";

}