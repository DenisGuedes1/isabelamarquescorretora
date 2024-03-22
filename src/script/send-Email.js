const showToast = (message, isError) => {
    const toast = document.getElementById("toast");
    toast.innerText = message;
  
  
    if (isError) {
      toast.classList.add("error");
    } else {
      toast.classList.remove("error");
    }
  
    toast.style.display = "block";
  
    setTimeout(function () {
      toast.style.display = "none";
    }, 3000);
  };
  

function initEmailJS() {
  emailjs.init({
    publicKey: "HmFxkeWDjNrbdxD5D",
  });
}

function sendEmailForm(formId) {
  const emailInput = document.getElementById(formId).querySelector('[name="email"]');
  const userEmail = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(userEmail)) {
    showToast("Por favor, insira um endereço de e-mail válido.", true);
    return;
  }
  console.log(userEmail, "email")

  emailjs
    .sendForm(
      "service_qob477i",
      "template_qm5u1eq",
      document.getElementById(formId)
    )
    .then(
      () => {
        console.log("SUCCESS!");
        showToast("E-mail enviado com sucesso!");

        
      },
      (error) => {
        console.log("FAILED...", error);
        showToast("Algo deu errado ao enviar o e-mail.");
      }
    );
}

window.onload = function () {
  initEmailJS();

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      sendEmailForm("contact-form");
    });
    
    document.getElementById('form').addEventListener("submit", function(event){
        event.preventDefault();
        sendEmailForm('form');
    })
};
