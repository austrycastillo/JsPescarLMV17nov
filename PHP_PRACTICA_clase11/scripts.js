let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("hiciste clic!!!")
    let datos = new FormData(form)
    console.log(datos)
    console.log(datos.get("nombre"))
    //CORS: Access-Control-Origin
    fetch("ejecutar.php", {
        method: "POST",
        body: datos
    }).then(res => res.json())
        .then(data => console.log(data))
})