// // //PATRONES DE DISEÑO
// // //Creacional: builder
// // class Home {
// //     constructor() {
// //         this.habitacion = 0;
// //         this.banio = 0;
// //         this.living = 0;
// //         this.patio = 0;
// //         this.cochera = 0;
// //         this.cocina = 0;
// //     }
// //     setHabitacion(valor) {
// //         this.habitacion = valor;
// //     }
// //     setBanio(valor) {
// //         this.banio = valor;
// //     }
// //     setLiving(valor) {
// //         this.living = valor;
// //     }
// //     setPatio(valor) {
// //         this.patio = valor;
// //     }
// //     setCochera(valor) {
// //         this.cochera = valor;
// //     }
// //     setcocina(valor) {
// //         this.cocina = valor;
// //     }
// //     mostrar() {
// //         return {
// //             habitación: this.habitacion,
// //             baño: this.banio,
// //             living: this.living,
// //             patio: this.patio,
// //             cochera: this.cochera,
// //             cocina: this.cocina
// //         }
// //     }
// // }

// // const homeGeronimo = new Home();
// // const homePablo = new Home();
// // const homeMariela = new Home();
// // homeGeronimo.setcocina(1);
// // homeGeronimo.setBanio(2);
// // homeGeronimo.setHabitacion(3);
// // homeGeronimo.setPatio(2);
// // homeGeronimo.setLiving(1);
// // homePablo.setHabitacion(2);
// // homePablo.setBanio(2);
// // homePablo.setcocina(3);
// // homePablo.setLiving(1);
// // homeMariela.setPatio(5);
// // homeMariela.setHabitacion(10);
// // homeMariela.setcocina(4);
// // homeMariela.setBanio(10);
// // homeMariela.setCochera(5);
// // const a = homeGeronimo.mostrar();
// // // console.log(a.habitación)
// // // console.log(Object.keys(homeGeronimo));
// // // console.log(Object.values(homeGeronimo));
// // console.log(Object.entries(homeGeronimo));


// // for (const x of a) {
// //     // console.log(x)
// // }
// // // console.log("Gerónimo: *****" + homeGeronimo.mostrar().habitación)
// // // console.log("Pablo: *****" + homePablo.mostrar())
// // // console.log("Mariela: ****" + homeMariela.mostrar())

// //estructural: facade(fachada)
// class Pelicula {
//     getAccion() {
//         return [
//             {
//                 id: '0001',
//                 nombre: "Spiderman no way to home",
//                 reparto: [
//                     "Tom Holland", "Zendaya"
//                 ]
//             },
//             {
//                 id: '0002',
//                 nombre: "Rápidos y Furiosos",
//                 reparto: [
//                     "La Roca", "Vin Diesel"
//                 ]
//             },
//             {
//                 id: '0003',
//                 nombre: "Matrix",
//                 repato: [
//                     "Keanu Reeves", "Wachoskis"
//                 ]
//             }
//         ]
//     }
//     getTerror() {
//         return [
//             {
//                 id: '0001',
//                 nombre: "El Exoscista",
//                 reparto: [
//                     "Linda Blair", "Pedro"
//                 ]
//             },
//             {
//                 id: '0002',
//                 nombre: "Viernes 13",
//                 reparto: [
//                     "Brian Oconor"
//                 ]
//             },
//             {
//                 id: '0003',
//                 nombre: "It",
//                 repato: [
//                     "Bill Skarsgård", "Finn Wolfhard"
//                 ]
//             }
//         ]
//     }
//     getInfantil() {
//         return [
//             {
//                 id: '0001',
//                 nombre: "El Rey León",
//                 reparto: [
//                     "Mufasa", "Simba"
//                 ]
//             }

//         ]
//     }
// }
// const film = () => {
//     const p = new Pelicula();

//     const accion = p.getAccion();
//     const terror = p.getTerror();
//     const infantil = p.getInfantil();
//     const gral = [...terror, ...accion, ...infantil];
//     return gral;
// }
// console.log(film())
// console.log(film()[2].nombre)

//MODULO
const modulo = {
    nombre: "no declarado",
    apellido: "no declarado",
    setNombre: (valor) => {
        modulo.nombre = valor;
    },
    setApellido: (valor) => {
        modulo.apellido = valor;
    },
    getNombre: () => {
        return modulo.nombre;
    },
    getApellido: () => {
        return modulo.apellido;
    }
}

modulo.nombre = "Fabian";
modulo.setApellido("Diaz");
console.log(`Nombre: ${modulo.getNombre()}, Apellido: ${modulo.getApellido()}` )