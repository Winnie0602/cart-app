<template>
    <div class="card">
        <h3>{{ product.name }}</h3>
        <p class="text-muted">{{ product.category }}</p>
        
        <img class="photos" :src="require('@/img/'+ product.id + '.jpg')" alt="pic">


        <h5 class="price">價格：＄{{  product.price }}</h5>
        <p class="description">{{ product.description }}</p>
        <button class="view-product-button" @click="$emit('view-product', product)">View</button>
    </div>
</template>

<script>
export default {
    props: ['product'],
    computed: {
        description(){
            return this.product.description.substring(0, 150);
        },
    }
    
}
</script>

<style lang="scss">
    .card{
        width: 50%;
        height:65vh;
        padding: 10px;
        border-radius: 5px;
        background-color: white;
        box-shadow: 0 0 5px gray;

        .photos{
            width: 50%;
            height:50%;
            object-fit: cover;
        }

        h5.price{
            color: gray;
        }

        p.description{
            font-size: .85rem;
        }

        p.text.muted{
            color: gray;
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
    @media(min-width: 500px){
        .card{
            width: 350px;
            margin: 20px 30px;
        }
    }
</style>
