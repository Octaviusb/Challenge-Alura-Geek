const productos = [
  { id: 1, nombre: 'Sala Moderna', precio: 1220000, imagen: 'img/producto1.jpg', descripcion: 'Sofá 2 poltronas y mesa de centro forrado en cuero blanco' },
  { id: 2, nombre: 'Madera Maciza', precio: 1550000, imagen: 'img/producto2.jpg', descripcion: 'La madera maciza ennoblece tus estancias y da larga vida a los muebles' },
  { id: 3, nombre: 'Nuevo Estilo', precio: 1550000, imagen: 'img/producto3.jpg', descripcion: 'Eje sobre el que gira la vida en la zona de estar' },
  { id: 4, nombre: 'Producto 4', precio: 24.99, imagen: 'img/producto4.jpg' },
  { id: 5, nombre: 'Producto 5', precio: 9.99, imagen: 'img/producto5.jpg' },
  { id: 6, nombre: 'Producto 6', precio: 39.99, imagen: 'img/producto6.jpg' },
  { id: 7, nombre: 'Producto 7', precio: 17.99, imagen: 'img/producto7.jpg' },
  { id: 8, nombre: 'Producto 8', precio: 29.99, imagen: 'img/producto8.jpg' },
  { id: 9, nombre: 'Producto 9', precio: 22.99, imagen: 'img/producto9.jpg' },
];

function renderizarProductos() {
  const productosContainer = document.getElementById('productosContainer');
  productosContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar
  productos.forEach(producto => {
      const productoElement = document.createElement('div');
      productoElement.classList.add('producto');
      productoElement.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
          <h3 class="producto-nombre">${producto.nombre}</h3>
          <p class="producto-precio">Precio: $${producto.precio.toFixed(2)}</p>
          <p class="producto-descripcion">Descripción: ${producto.descripcion || 'No disponible'}</p>
      `;
      productosContainer.appendChild(productoElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarProductos();

  const form = document.getElementById('productoForm');
  form.addEventListener('submit', event => {
    event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').value;

    const nuevoProducto = {
      id: productos.length + 1,
      nombre,
      precio,
      descripcion,
      imagen
    };

    productos.push(nuevoProducto);
    renderizarProductos();

    form.reset(); // Limpiar el formulario después de agregar el producto
  });
});
