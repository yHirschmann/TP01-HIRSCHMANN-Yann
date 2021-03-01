$(document).on('click', 'form button[type=submit]', function(e) {
        var isValid = $('#Password').val() === $('#PasswordValidation').val();
        if(!isValid) {
            e.preventDefault();
        }
        alert("Mot de passes et validation du mot de passe incorrecte");
});