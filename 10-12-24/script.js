//Almaceno todos los elementos con la clase "categoria"
const categorias = document.querySelectorAll(".categoria");
//Almaceno un elemento con el id "contenido"
const contenido = document.querySelector("#contenido");

categorias.forEach(categoria => {
    categoria.addEventListener("click", async(e)=>{
            const nombreArchivo = e.currentTarget.getAttribute("data-section")

            try{
                const archivo = await fetch(`${nombreArchivo}.html`)
                if(!archivo.ok) throw new Error("No se encontro el archivo");

                const html = await archivo.text()
                contenido.innerHTML = html
            }catch(error){
                const mensajeError = "<h2>No se encontro informacion para esta seccion</h2>"
                contenido.innerHTML = mensajeError
            }
        }
    )
})