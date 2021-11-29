// // //AJAX CON TXT
// // let contenido = document.querySelector("#contenido")
// // contenido.innerHTML = "Cargando...";
// // setTimeout(() => {
// //     //PASO 1: INSTANCIAR LA CLASE XHR
// //     var ajax = new XMLHttpRequest();
// //     //PASO 2: ABRIR EL ARCHIVO
// //     ajax.open("get", "archivo.txt");//dos parametros: metodo(get,post,put,delete) y archivo
// //     //PASO 3: CARGAR 
// //     ajax.onload = cargarArchivo
// //     //PASO 4: EJECUTAR
// //     ajax.send();//doy la orden de ejecutar
// //     function cargarArchivo() {
// //         //PASO OPCIONAL
// //         if (ajax.status == 200) {
// //             contenido.innerText = ajax.responseText;
// //         } else {
// //             contenido.innerText = "Contenido no disponible";
// //         }
// //     }
// // }, 3000);

// //AJAX CON HTML
// // let btn = document.getElementById("mostrar");
// // btn.addEventListener("click", () => {
// //     let xhr = new XMLHttpRequest();
// //     xhr.open("get", "plantilla.html");
// //     xhr.addEventListener("load", () => {
// //         let plantilla = xhr.response;
// //         console.log(plantilla);
// //         let div = document.createElement("div");
// //         div.innerHTML = plantilla;
// //         document.body.appendChild(div);
// //     });
// //     xhr.send();
// // });

// //AJAX CON JSON
// var ajax = new XMLHttpRequest();
// ajax.open("get", "archivo.json");
// ajax.onload = cargarJSON
// ajax.send();
// function cargarJSON() {
//     if (ajax.status == 200) {
//         console.log("Antes:")
//         console.log(ajax.responseText);
//         console.log("Después:")
//         console.log(JSON.parse(ajax.responseText))
//         var productos = JSON.parse(ajax.responseText);
//         console.log(productos[1].nombre);
//         let ul = document.createElement("ul");
//         for (const item of productos) {
//             console.log(item.nombre);
//             let li = document.createElement("li");
//             li.innerHTML = item.nombre;
//             ul.appendChild(li);
//         }
//         document.body.appendChild(ul);
//     }
// }

//OPTIMISTIC UI
let boton = document.querySelector("#boton");
boton.addEventListener("click", () => {
    activarAjax("https://jsonplaceholder.typicode.com/users");
});
function activarAjax(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            //console.log(xhr.responseText);
            var contenido = JSON.parse(xhr.responseText);
            for (const x of contenido) {
                //console.log(x);
                let card = document.createElement("div");
                card.classList.add("card");
                let cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                let h5 = document.createElement("h5");
                h5.classList.add("card-title");
                h5.innerHTML = x.username;
                let p = document.createElement("p");
                p.classList.add("card-text");
                p.innerHTML = x.address;
                console.log(x.address.street)
                // let y = x.address
                // for (const a of y) {
                //     console.log(a);
                // }
                cardBody.appendChild(h5);
                cardBody.appendChild(p);
                card.appendChild(cardBody);
                document.body.appendChild(card);
            }
        }
    });
    xhr.send();
}