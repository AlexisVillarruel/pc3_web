<template>
  <div class="product-page">
    <h1>Productos en Venta</h1>
    <div class="product-list">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Producto 1', price: '$10', image: 'public/icons/lapicero.jpg' },
      ]
    };
  }
};
</script>

<style scoped>
.product-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
