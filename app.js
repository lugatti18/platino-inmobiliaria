let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function guardarEnStorage() {
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

function agregarCliente() {

    const cliente = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        tipoConsulta: document.getElementById("tipoConsulta").value,
        fechaSeguimiento: document.getElementById("fechaSeguimiento").value,
        clasificacion: document.getElementById("clasificacion").value,
        observaciones: document.getElementById("observaciones").value
    };

    clientes.push(cliente);
    guardarEnStorage();
    mostrarClientes();
    limpiarFormulario();
}

function mostrarClientes() {
    const lista = document.getElementById("listaClientes");
    lista.innerHTML = "";

    clientes.forEach((c, index) => {
        lista.innerHTML += `
            <div class="cliente-card">
                <strong>${c.nombre}</strong><br>
                Tel: ${c.telefono}<br>
                Tipo: ${c.tipoConsulta}<br>
                Seguimiento: ${c.fechaSeguimiento}<br>
                Clasificación: ${c.clasificacion}<br>
                Obs: ${c.observaciones}<br>
                <button onclick="eliminarCliente(${index})">Eliminar</button>
            </div>
        `;
    });
}

function eliminarCliente(index) {
    clientes.splice(index, 1);
    guardarEnStorage();
    mostrarClientes();
}

function limpiarFormulario() {
    document.querySelectorAll("input, textarea, select").forEach(e => e.value = "");
}

function buscarCliente() {
    const texto = document.getElementById("busqueda").value.toLowerCase();
    const filtrados = clientes.filter(c => c.nombre.toLowerCase().includes(texto));
    
    const lista = document.getElementById("listaClientes");
    lista.innerHTML = "";

    filtrados.forEach(c => {
        lista.innerHTML += `
            <div class="cliente-card">
                <strong>${c.nombre}</strong><br>
                Tel: ${c.telefono}
            </div>
        `;
    });
}

mostrarClientes();
