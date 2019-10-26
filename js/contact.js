
function sendMensage(){
    let nombre,email,Mensje;
    nombre=document.getElementById('form_name').value;
    email=document.getElementById('form_email').value;
    Mensje=document.getElementById('form_message').value;
   
    Email.send({
        Host : "smtp.gmail.com",
        Username : "pancho9olle@gmail.com",
        Password : "hola k hace2021",
        To :  'pancho9olle@gmail.com',
        From : email,
        Subject : nombre,
        Body : Mensje
    }).then(
      message => alert(message)
    );
   
}


/*
function gerEmail(){
    let email;
    email=document.getElementById('form_email');
    


}

function getMensageperro(){
    let Mensje;
    Mensje

}
*/