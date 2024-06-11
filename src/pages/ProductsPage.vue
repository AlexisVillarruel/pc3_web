<template>
  <div class="products-page">
    <h1>Productos</h1>
    <div class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
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
        {
          id: 1,
          name: 'Producto 1',
          price: '$100',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          name: 'Producto 2',
          price: '$200',
          image: 'https://via.placeholder.com/150'
        },
        // Agrega más productos según sea necesario
      ]
    }
  }
}
</script>

<style scoped>
.products-page {
  padding: 16px;
}

.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
