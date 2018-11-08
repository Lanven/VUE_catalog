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
                            <div class="product__action-like product__action-like-active">

                            </div>
                            <div class="product__action-compare product__action-compare-active">

                            </div>
                        </div>
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
                            <div class="product__button" v-bind:class="product_in_basket ? 'product__button-active': ''" v-on:click="inBasket()">
                                {{product_in_basket ? 'В корзине': 'Купить'}}
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
            product_in_basket: {
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
/*            rating() {
                return this.$el.querySelector('.rating')
            },
            ratingItem() {
                return this.$el.querySelectorAll('.rating-item')
            }*/
        },
        methods: {
            inBasket: function () {
                this.$emit('inBasket')
            },
            changeProductRating: function (rating) {
                this.$emit('changeProductRating', this.product, rating)
            }
        },
/*        mounted: function () {
            var vm = this;

            vm.rating.onclick = function(e){
                var target = e.target;
                if(target.classList.contains('rating-item')){
                    removeClass(vm.ratingItem,'current-active')
                    target.classList.add('active','current-active');
                }
            }

            vm.rating.onmouseover = function(e) {
                var target = e.target;
                if(target.classList.contains('rating-item')){
                    removeClass(vm.ratingItem,'active')
                    target.classList.add('active');
                    mouseOverActiveClass(vm.ratingItem)
                }
            }
            vm.rating.onmouseout = function(){
                addClass(vm.ratingItem,'active');
                mouseOutActiveClas(vm.ratingItem);
            }

            function removeClass(arr) {
                for(var i = 0, iLen = arr.length; i <iLen; i ++) {
                    for(var j = 1; j < arguments.length; j ++) {
                        vm.ratingItem[i].classList.remove(arguments[j]);
                    }
                }
            }
            function addClass(arr) {
                for(var i = 0, iLen = arr.length; i <iLen; i ++) {
                    for(var j = 1; j < arguments.length; j ++) {
                        vm.ratingItem[i].classList.add(arguments[j]);
                    }
                }
            }

            function mouseOverActiveClass(arr){
                for(var i = 0, iLen = arr.length; i < iLen; i++) {
                    if(arr[i].classList.contains('active')){
                        break;
                    }else {
                        arr[i].classList.add('active');
                    }
                }
            }

            function mouseOutActiveClas(arr){
                for(var i = arr.length-1; i >=1; i--) {
                    if(arr[i].classList.contains('current-active')){
                        break;
                    }else {
                        arr[i].classList.remove('active');
                    }
                }
            }
        },*/
        props: ['product','basket','compare','like']
    }
</script>

<style lang="scss">
    .product {
    &__col {
         float: left;
         box-sizing: border-box;
         border-collapse: collapse;
    /*           padding: 0 5px;
               margin-bottom: 5px;*/
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
         margin-bottom: 20px;
         box-sizing: border-box;
         height: 40%;
         padding-top: 20px;
         position: relative;
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
         top: 4px;
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