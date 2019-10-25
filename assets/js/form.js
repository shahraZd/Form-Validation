const allInput = Array.from(document.querySelectorAll(".input_form"));
const send = document.querySelector(".sendBtn");
const reset = document.querySelector(".resetBtn");
const mail = document.querySelector("input[name='email'] ");
const pw = document.querySelector("input[name='password']");
const errMail = document.getElementById("err-mail");
const errPw = document.getElementById("err-pw");

//Reset all the input
reset.addEventListener("click", function() {
  allInput.map(x => (x.value = ""));
  comment.value = "";
});
//Disabled button
if (send.disabled) {
  send.style.color = "grey";
}

//Valid Email
mail.addEventListener("focusout", () => {
  !RegExp(/(?=.*@)(?=.*\.)/g).test(mail.value)
    ? (errMail.style.display = "block")
    : (errMail.style.display = "none");
});

//Valid Password
pw.addEventListener("focusout", () => {
  !RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/g).test(pw.value)
    ? (errPw.style.display = "block")
    : (errPw.style.display = "none");
});

for (let i of allInput) {
  i.addEventListener("change", function() {
    let arr = allInput.filter(x => x.value.length !== 0);

    if (
      arr.length === allInput.length &&
      errMail.style.display === "none" &&
      errPw.style.display === "none"
    ) {
      send.disabled = false;
      send.style.color = "white";
    }
  });
}

//send all the inputs
send.addEventListener("click", function(e) {
  window.location.href = "https://meme-api.herokuapp.com/sample";
});
