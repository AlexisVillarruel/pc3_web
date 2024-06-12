<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <body>
    <div class="container">
      <div class="card">
        <img src="icons/lapicero.jpg" alt="Producto 1" />
        <div class="card-info">
          <h2>Producto 1</h2>
          <p class="price">$19.99</p>
        </div>
      </div>
      <div class="card">
        <img src="icons/consola.jpeg" alt="Producto 2" />
        <div class="card-info">
          <h2>Producto 2</h2>
          <p class="price">$29.99</p>
        </div>
      </div>
      <!-- Puedes añadir más tarjetas aquí según sea necesario -->
    </div>
  </body>
</template>
<style>
/* Reset de estilos básicos */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e0e0e0;
}

.card-info {
  padding: 15px;
}

.card-info h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-info p.price {
  font-size: 1.1rem;
  color: #333333;
}
</style>
