<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image"/>
    <h2 class="product-name">{{ product.name }}</h2>
    <p class="product-price">{{ product.price }}</p>
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
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-name {
  font-size: 1.25em;
  margin: 0.5em 0;
}

.product-price {
  color: #007BFF;
  font-size: 1.1em;
}
</style>
