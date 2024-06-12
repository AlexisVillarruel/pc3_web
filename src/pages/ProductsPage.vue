<template>
  <div class="products">
    <h2>Listado de Productos</h2>
    <div v-for="(producto, index) in productos" :key="index">
      <Product :precio="producto.precio" :nombre="producto.nombre" :imagen="getImagen(producto.imagen)" />
    </div>
  </div>
</template>

<script>
import Product from '@/components/auth/Product.vue'; // Ruta al componente Product.vue

export default {
  components: {
    Product
  },
  data() {
    return {
      productos: [
        { nombre: 'Producto 1', precio: 100, imagen: 'lapicero.jpg' },
        { nombre: 'Producto 2', precio: 150, imagen: 'planta.jpg' },
        { nombre: 'Producto 3', precio: 80, imagen: 'consola.jpg' }
      ]
    };
  },
  methods: {
    getImagen(nombreImagen) {
      return `/icons/${nombreImagen}`;
    }
  }
};
</script>

<style scoped>
.products {
  padding: 20px;
}
</style>
