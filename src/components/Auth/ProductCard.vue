<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image">
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 200px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-info {
  text-align: center;
}
</style>
