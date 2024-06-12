<template>
  <div class="product">
    <img :src="imagen" alt="Producto">
    <h3>{{ nombre }}</h3>
    <p>Precio: ${{ precio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    precio: {
      type: Number,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    imagen: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
.product img {
  max-width: 100%;
  height: auto;
}
</style>



