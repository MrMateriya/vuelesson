<script>
export default {
  data() {
    return {
      products: [],
      loadingProducts: false,
    }
  },
  methods: {
    getProducts() {
      this.loadingProducts = true
      fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(res => {
            this.products = res.products;
            console.log(res);
            console.log(this.products);
            this.loadingProducts = false;
          })
          .catch(err => {console.error(err); this.loadingProducts = false;})
    },
    removeProduct(id) {
      this.products = this.products.filter(product => product.id !== id)
    },
  },

  mounted() {
    this.getProducts()
  }
}
</script>

<template>
  <section>
    <h2>Товары</h2>
    <div class="products">
      <div v-if="loadingProducts === true">Loading...</div>
      <div v-if="loadingProducts === false && products.length !== 0" class="product" :key="product.id" v-for="product in products">
        <div class="product__image-wrapper">
          <img class="product__image" :src="product.images[0]" :alt="product.title">
        </div>
        <div class="product__info-wrapper">
          <div class="product__title">{{product.title}}</div>
          <div class="product__info-content">
            <div class="product__price">{{product.price}}</div>
            <button @click="removeProduct(product.id)" class="product__purchase-btn">Купить</button>
          </div>
        </div>
      </div>
      <div v-if="this.products.length === 0">No items in shop!</div>
    </div>
  </section>
</template>

<style scoped>
.product {
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 0 15px #595959;
}
.product__info-content {
  display: flex;
  align-items: center;
}
.product__info-wrapper {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.product__purchase-btn {
  padding: 10px 20px;
  font-size: 25px;
  background-color: inherit;
  border-radius: 12px;
  border: 1px solid teal;
  cursor: pointer;
}
.product__purchase-btn:active {
  background-color: teal;
  color: aliceblue;
}
.product__image {
  width: 100%;
  border-radius: 20px 20px 0 0;
}
.product__image-wrapper {
  flex-grow: 1;
  align-items: center;
  display: flex;
}
.product__title {
  font-size: 20px;
}
.product__price {
  font-size: 25px;
  margin-right: 10px;
  color: #000000;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>