const validator = $( ".needs-validation" );

//Script para cambiar entre ingreso y registro de usuarios
$(document).ready(function() {
  const sign_in_btn = $("#sign-in-btn");
  const sign_up_btn = $("#sign-up-btn");
  const container = $(".container");

  sign_up_btn.click(function() {
    container.addClass("sign-up-mode");
    $(document).ready(function() {
      $('.form-control').each(function() {
        $(this).val('');
      });  
    });
    validator.validate().resetForm();
  });
    
  sign_in_btn.click(function() {
    container.removeClass("sign-up-mode");
    $(document).ready(function() {
      $('.input-log').each(function() {
        $(this).val('');
      });  
    });
  });
});


//Validación de formulario de registro
$(document).ready(function() {
  validator.validate( {
    errorClass: "is-invalid",
    validClass: "is-valid",
    rules: {
      username:{
        required: true,
      },
      email: {
        required: true,
      },
      password:{
        required: true,
        pwcheck: true,
        minlength: 8
      },
    },
    messages:{
      username: {
        required: "Se requiere un nombre de usuario"
      },
      email:{
        required: "Se requiere un correo electrónico",
        email: "El formato no es correcto"
      },
      password:{
        required: "Se requiere una contraseña",
        pwcheck: "La contraseña no tiene un formato válido",
        minlength: "La contraseña debe contener 8 caracteres"
      },
    }
  });
  $.validator.addMethod("pwcheck", function(value, element) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
  });
});
  