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
          image: ('public/icons/favicon-16x16.png')
        },
        {
          id: 2,
          name: 'Producto 2',
          price: '$200',
          image: 'public/icons/favicon-128x128.png'
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
