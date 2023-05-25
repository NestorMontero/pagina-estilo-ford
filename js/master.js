/*master - style - styles -estilos - index - main -app*/
const btn = document.getElementById('registro');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire(
        'Hecho!',
        'Te registraste correctamente!',
        'success'
    )
})

/* crear un objeto  literal */
/* crear un array de objetos literales */

let caracteristicas = [
    {
        modelo: 'sel',
        motor: '2.0',
        combustible: 'nafta',
        precio: '9.800.000'
    },
    {
        modelo: 'titanium',
        motor: '2.0',
        combustible: 'nafta',
        precio: '8.900.000'
    },
    {
        modelo: 'sel',
        motor: '2.0',
        combustible: 'nafta',
        precio: '9.800.000'
    },
    {
        modelo: 'titanium',
        motor: '2.0',
        combustible: 'nafta',
        precio: '8.900.000'
    }
]

let tabla = document.getElementById('tabla');

for (let i = 0; i < caracteristicas.length; i++) {
    tabla.innerHTML +=
        `<tr>
            <td>${caracteristicas[i].modelo}</td>
            <td>${caracteristicas[i].motor}</td>
            <td>${caracteristicas[i].combustible}</td>
            <td>$${caracteristicas[i].precio}</td>
        </tr>`;
};


let paises = [
    {
        id: 01,
        pais: 'colombia'
    },
    {
        id: 02,
        pais: 'venezuela'
    },
    {
        id: 03,
        pais: 'argentina'
    },
    {
        id: 04,
        pais: 'chile'
    }
];

let pais = document.getElementById('pais');

for (let i = 0; i < paises.length; i++) {
    pais.innerHTML += `<option value="${paises[i].id}">${paises[i].pais}</option>`
}
