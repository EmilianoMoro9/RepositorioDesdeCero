
let aviso = document.getElementById('aviso')
console.log('Hola admin  ');

const login = () => {
    let user = document.getElementById('user').value;
let password = document.getElementById('password').value;
    console.log(user);
    console.log(password);
    //user = ''
    //password = ''
    let form  = document.getElementById('formLogin');

    let usuario = 'emi@gmail.com'
    let pass = '12345'

    if(user == '' || password == ''){
        alert('Ingrese los datos solicitados')
    }
    else{
        if(user == usuario && password == pass) {
            alert("Ha ingresado correctamente ")
            location.href = 'admin.html'}
            aviso.innerHTML = 'Los datos ingresados no son correctos.. ';
            aviso.style.color = 'red';
        };
        form.reset();
    
        
};