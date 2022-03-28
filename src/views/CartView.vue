<template>
  <div class="cart">
    <h1>Your Shopping Cart</h1>

    <CartItemCard
    v-for="product in products"
    :key="product.id"
    :product="product"
    />

    <CartSummaryPaymentCard
        
    />

  </div>
</template>

<script>
// @ is an alias to /src
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue'

export default {
  components:{
    CartItemCard, CartSummaryPaymentCard
  },
  computed: {
    products(){
      return this.$store.getters.cartItems
    }
  }
}
</script>
