$('#signup_button').on('click', function(){
  // cargar los valores de password, email, name, age
  let email = $("#email").val()
  let password = $("#password").val()
  let name = $("#name").val()
  let age = $("#age").val()
console.log(email, password, name);
  json_to_send = {
    "password" : password,
    "email": email,
    "name": name,
    "age": age
  };

  json_to_send = JSON.stringify(json_to_send);

  //console.log(json_to_send)
  
  $.ajax({
    url: 'https://webproyectomacarena.herokuapp.com/users',
    // url: 'http://localhost:3000/users',
    // url: 'https://tuapp.herokuapp.com/users',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Usuario creado con exito")
      //console.log('success: '+ data);
      window.location = './index.html'
    },
    error: function(error_msg) {
      alert((error_msg['responseText']))
    }
  });

});