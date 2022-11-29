function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        
    };

    const serviceID = "service_vmli69n";
    const templateID = "template_6n5uefn";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
           
                
          


        })
        .catch(err => console.log(err));

}
