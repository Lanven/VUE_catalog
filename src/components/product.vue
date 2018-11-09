<template>
    <div class="product">
        <div class="product__col">
            <div class="product__wrapper">
                <div class="product__overlay">
                    <div class="product__header">
                        <div class="product__image-wrapper">
                            <img :src="product.image" alt="" class="product__image">
                        </div>
                        <div class="product__discount" v-if="product.discount">
                            {{product.discount ? '-' + product.discount: ''}}
                        </div>
                        <div class="product__actions">
                            <div class="product__action-wrapper" v-on:click="likeAction()">
                                <template v-if="product_in_like_array">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </template>
                                <template v-else>
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                </template>
                            </div>
                            <div class="product__action-wrapper" v-on:click="compareAction()" v-bind:class="product_in_compare_array ? 'product__action-compare-active': ''">
                                <i class="fa fa-bar-chart-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="product__description">
                        <span>
                            {{product.description}}
                        </span>
                    </div>
                    <div class="product__info">
                        <div class="product__rating">
                            <div class="product__rating--wrapper">
                                <div class="product__rating-stars-filled">
                                    <RatingComponent :productRating=product.rating v-on:changeProductRating="changeProductRating" ></RatingComponent>
                                </div>
                                <div class="product__rating-reviews " style="width: 30px;"></div>
                            </div>
                        </div>
                        <div class="product__availability" v-if="product.available">
                            в наличии
                        </div>
                    </div>
                    <div class="product__footer">
                        <div class="product__price-wrapper">
                            <div class="product__price-main" v-bind:class="product.price_new ? 'product__price-main--old': ''">
                                {{product.price}} р.
                            </div>
                            <div class="product__price-new" v-if="product.price_new">
                                {{product.price_new}} р.
                            </div>
                        </div>
                        <div class="product__button-wrapper">
                            <div class="product__button" v-bind:class="product_in_basket_array ? 'product__button-active': ''" v-on:click="basketAction()">
                                {{product_in_basket_array ? 'В корзине': 'Купить'}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  RatingComponent from '@/components/rating.vue';

    export default {
        name: "product",
        components: { RatingComponent },
        data: function(){
            return {
            }
        },
        computed: {
            product_in_basket_array: {
                get: function() {
                    if (this.basket.indexOf(this.product.product_id) !== -1) {
                        return true
                    } else {
                        return false
                    }
                },
                set: function() {
                    return false;
                }
            },
            product_in_like_array: {
                get: function() {
                    if (this.like.indexOf(this.product.product_id) !== -1) {
                        return true
                    } else {
                        return false
                    }
                },
                set: function() {
                    return false;
                }
            },
            product_in_compare_array: {
                get: function() {
                    if (this.compare.indexOf(this.product.product_id) !== -1) {
                        return true
                    } else {
                        return false
                    }
                },
                set: function() {
                    return false;
                }
            }
        },
        methods: {
            basketAction: function () {
                this.$emit('basketAction')
            },
            likeAction: function () {
                this.$emit('likeAction')
            },
            compareAction: function () {
                this.$emit('compareAction')
            },
            changeProductRating: function (rating) {
                this.$emit('changeProductRating', this.product, rating)
            }
        },
        props: ['product','basket','compare','like']
    }
</script>

<style lang="scss">
    .product {
        &__col {
            float: left;
            box-sizing: border-box;
            border-collapse: collapse;

            @media (max-width: 699px) {
                width: 50%;
            }
            @media(min-width: 700px) {
                width: 33%;
            }
            @media(min-width: 940px) {
                width: 25%;
            }
            @media(min-width: 1120px) {
                width: 20%;
            }
        }
        &__wrapper {
            border: 1px solid #d4d4d4;
            height: 0;
            padding-top: 131%;
            position: relative;
            &:hover {
                 box-shadow: 0px 2px 15px 0px #dccfcf;
            }
        }
        &__overlay {
            left: 0;
            /*padding: 10px;*/
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;
         }
        &__header {
            box-sizing: border-box;
            height: 40%;
            padding-top: 20px;
            position: relative;
            @media (max-width: 699px) {
                height: 40%;
            }
            @media(min-width: 700px) {
                height: 45%;
                margin-bottom: 20px;
            }
        }
        &__image-wrapper {
            height: 100%;
            position: relative;
            width: 100%;
        }
        &__image {
            left: 50%;
            max-height: 100%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        &__discount {
            position: absolute;
            top: 10px;
            left: 10px;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            font-size: 12px;
            line-height: 35px;
            text-align: center;
            background-color: #f85564;
            color: white;
        }
        &__actions {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 25px;
        }
        &__action-wrapper {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 1px solid #d4d4d4;
            margin-bottom: 5px;
            text-align: center;
            > i {
                vertical-align: middle;
            }
        }
        &__action-compare-active {
            > i {
                color: #FE9900;
            }
        }
        &__description {
            font: 12px Arial;
            font-weight: 400;
            color: #222;
            line-height: 16px;
             padding: 10px;
        }
        &__info {
            &:after {
                clear: left;
                content: '';
                display: block;
            }
        }
        &__rating {
            width: 50%;
            float: left;
        }
        &__availability {
            float: right;
            position: relative;
            padding: 0 10px;
            font-size: 12px;

            &:before {
                background-color: green;
                border-radius: 50%;
                width: 6px;
                height: 6px;
                position: absolute;
                content: '';
                display: block;
                left: 0;
                top: 35%;
            }
        }
        &__footer {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;

            &:after {
                clear: left;
                content: '';
                display: block;
            }
        }
        &__price-wrapper {
            width: 50%;
            float: left;
            position: relative;
        }
        &__price-main {
            font-weight: bold;
        }
        &__price-main--old {
            font-size: 14px;
            color: gray;
            text-decoration: line-through;
            position: absolute;
            bottom: 100%;
            left: 0;
        }
        &__button-wrapper {
            float: right;
        }
        &__button {
            color: white;
            padding: 5px;
            background-color: #ffae2b;
            border-radius: 14px;
            font-size: 12px;
            width: 65px;
            text-align: center;
            cursor: pointer;

            &:hover {
                background-color: #de9114;
            }
        }
        &__button-active {
            background-color: #5cb85c;

            &:hover {
                background-color: #449d44;
            }
        }
    }

</style>