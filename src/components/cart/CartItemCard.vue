<template>
    <div class="cart-item-cart">
        <div class="header">
            <h3>{{ product.name }}</h3>
            <h4>In Cart: {{ product.quantity }}</h4>
            <h4>總金額: {{ item_cost }}</h4>

            <p>{{ description }}</p>

        </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    computed:{
        description(){
            return this.product.description.substring(0,120)
        },
        item_cost(){
            return this.product.price * this.product.quantity
        }
    }
}
</script>

<style lang="scss">
.cart-item-cart {
    width: 90%;
    margin: 5%;
    background-color: white;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
    padding: 10px;
    text-align: left;

    .header {
        display: flex;
        justify-content: space-around;

    }
}
</style>
