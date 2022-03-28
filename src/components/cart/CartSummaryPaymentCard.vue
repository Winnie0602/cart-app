<template>
    <div class="cart-item-cart">
        <h3>Cart Total:$ {{ cart_total }}</h3>
        <button class="view-product-button">立即下單</button>
    </div>

</template>

<script>
export default {
    computed:{
        cart_total(){
            return this.$store.getters.cartTotal
        }
    }
}
</script>

<style lang="scss">
.cart-item-cart{
    display: flex;
    flex-direction: column;

    h3 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    

    button.view-product-button{
            padding: 10px;
            background-color: rgba(79, 160, 87);
            border: none;
            color: white;
            font-weight: bold;
            font-size: 1.15rem;
            border-radius: 5px;
            cursor: pointer;
        }
}
    
</style>
