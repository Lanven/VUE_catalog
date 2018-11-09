<template>
    <div class="container">
        <div class="container__products">
            <div class="products">
                <ProductComponent v-for="item in products" :product=item :basket=basket_array :compare=compare_array :like=like_array
                                  v-on:basketAction="productAction(item.product_id, 'basket_array')"
                                  v-on:likeAction="productAction(item.product_id, 'like_array')"
                                  v-on:compareAction="productAction(item.product_id, 'compare_array')"
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
            productAction: function(id, item) {
                var vm = this;

                if (vm[item].indexOf(id) !== -1) {
                    vm[item].splice(vm[item].indexOf(id), 1);
                } else {
                    vm[item].push(id);
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