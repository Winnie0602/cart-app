<template>
  <div class="home">
    <div class="products-cards-container">
    

      <!-- <button @click="findCategoryTop">press</button> -->

      <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
       />

      <ProductSummaryCard
      v-for="product in items"
      :key="product.id"
      :product="product"
      v-on:view-product="viewProduct($event)"
      />
      <!-- v-bind綁props  -->

      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js'
import ProductSummaryCard from '../components/products/ProductSummaryCard.vue';
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer.vue';
//import CategoryTop from '../components/products/CategoryTop.vue';

export default {
  name: 'HomeView',
  components: {
    ProductSummaryCard, 
    ProductDescriptionDrawer,
    //CategoryTop,
    
  },
  data(){
    return{
      items: items,
      product: null,
      category_top: [],
      active: {
        product_drawer: false,
      }
    }
  },
  mounted(){
    // fetch('http://localhost:3000/products')
    //         .then(res =>  res.json())
    //         .then (data => this.items = data)
    
  },
  methods:{
    viewProduct(product){
      this.product = product;
      this.active.product_drawer = true
      console.log(this.product)
    },
    closeProductDrawer(){
      this.active.product_drawer = false;
    },
    //將單一類別商品塞入一個陣列中
    findCategoryTop(){
      this.items.forEach(object =>{
        if(object.category == "Top"){
            this.category_top = object
    }
});
    }
  },
}
</script>

<style lang="scss">
  .products-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
