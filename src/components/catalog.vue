<template>
    <div class="container">
        <div class="container__products">
            <div class="products">
                <ProductComponent v-for="item in products" :product=item :basket=basket_array :compare=compare_array :like=like_array
                                  v-on:inBasket="inBasket(item.product_id)"
                                  v-on:changeProductRating="changeProductRating"></ProductComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import TableProducts from '@/data/table-products.js';
    import  ProductComponent from '@/components/product.vue';

    export default {
        components: { ProductComponent },
        data: function () {
            return {
                products: TableProducts,
                basket_array: [],
                compare_array: [],
                like_array: []
            }
        },
        computed: {},
        methods: {
            inBasket: function(id) {
                var vm = this;

                if (vm.basket_array.indexOf(id) !== -1) {
                    vm.basket_array.splice(vm.basket_array.indexOf(id), 1);
                } else {
                    vm.basket_array.push(id);
                }
            },
            changeProductRating: function (item, rating) {
                item.rating = rating;
            }
        },
        created: function () {

        }
    }
</script>

<style lang="scss">
    .container {
        min-width: 360px;
        max-width: 1200px;
        height: 100%;
        margin: auto;
    }
</style>