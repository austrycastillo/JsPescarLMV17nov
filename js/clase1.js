// //alert('Hola Js externo');
// //document.write('Hola también desde el externo');
// //console.log('Hola consola');
// //
// /*
// var: redeclarable, redefinible, scope global
// let: no redeclarable, redefinible, no scope global
// const: no redeclarable, no redefinible, no scope global
// */
// // var x;//undefined
// // var nombre = "Juan";//string
// // var edad = 20;//number: int, double, float
// // var resultado = true;//boolean --> and, or
// // var arreglo = []; //arreglo
// // var obj = {};//objetos--> clave:valor
// // console.log(nombre);
// // nombre = "Juana";
// // console.log(nombre);

// // var x = 2;
// // console.log(x);
// // if(true){
// //     console.log(x);
// //     var x = 4;
// //     console.log(x);
// // }
// // console.log(x);
// // x = 6;
// // console.log(x);

// // let x = 2;
// // console.log(x);
// //             if(true){

// //                 let x = 4;
// //                 console.log(x);

// //             }
// // console.log(x);
// // x = 6;
// // console.log(x);

// // const x = 2;
// // console.log(x);
// //             if(true){

// //                 const x = 4;
// //                 console.log(x);

// //             }
// // console.log(x);

// //DOM 
// /*
// el patova, el portero
// desarrollar un programa
// mostrar si puedes o no pasar  (rango de edad entre 18 y 25)
// si pasaste y tienes 22 bebida gratis
// no pasaste decir razón
// */
// var edad = window.prompt("Escribe tu edad");
// if (edad >= 18 && edad <= 25) {
//     document.write("Bienvenid@ 😀");
//     if (edad == 22)
//         alert("bebida gratis!!!!!!!");
// } else {
//     document.write("Ups no puedes pasar 😭");
//     (edad < 18) ? document.write(".....por bebito") :
//         document.write(".....por viejito");
// }

/*
desarrollar un cajero automático (bloquear al tercer intento)
    1 - consulta
    2 - depósito
    3 - retiro
*/
var claveC = 123;
var clave;
var intentos = 3;
var saldo = 500;
let monto = 0;
while (intentos <= 3 && intentos > 0) {
    clave = window.prompt("Escribe tu clave secreta");
    if (claveC == clave) {
        var opcion = parseInt(window.prompt("Bienvenido, marque el número de opción:\n1- consulta\n2- depósito\n3- retiro"));
        switch (opcion) {
            case 1:
                document.write(`Su saldo es ${saldo}`);
                console.log(saldo)
                break;
            case 2:
                monto = parseInt(window.prompt("Monto a depositar"));
                saldo += monto;
                document.write(`Depósito realizado correctamente, su saldo es ${saldo}`);
                break;
            case 3:
                do {
                    monto = window.prompt("Monto a depositar");
                    if (monto <= saldo) {
                        
                    }
                } while (monto > saldo);

        }
        break;
    } else {
        intentos--;
        alert(`error, te quedan ${intentos} intentos`);
    }

}
