fetch("clientes.csv")
.then(response => response.text())
.then(data => {
    const filas = data.split("\n").slice(1);

    filas.forEach(fila => {
        const columnas = fila.split(",");

        if (columnas.length >= 6) {
            clientes.push({
                nombre: columnas[0],
                telefono: columnas[1],
                tipoConsulta: columnas[2],
                fechaSeguimiento: columnas[3],
                clasificacion: columnas[4],
                observaciones: columnas[5]
            });
        }
    });

    guardarEnStorage();
    mostrarClientes();
});
