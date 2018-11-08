<template>
    <div class="rating">
        <div class="rating__container">
            <div class="rating__item" data-rate="1"></div>
            <div class="rating__item" data-rate="2"></div>
            <div class="rating__item" data-rate="3"></div>
            <div class="rating__item" data-rate="4"></div>
            <div class="rating__item" data-rate="5"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rating",

        data: function(){
            return {
            }
        },
        computed: {
            ratingElem() {
                return this.$el.querySelector('.rating__container')
            },
            ratingItem() {
                return this.$el.querySelectorAll('.rating__item')
            },
        },
        methods: {
            removeClass: function (arr) {
                for(var i = 0, iLen = arr.length; i <iLen; i ++) {
                    for(var j = 1; j < arguments.length; j ++) {
                        this.ratingItem[i].classList.remove(arguments[j]);
                    }
                }
            },
            addClass: function (arr) {
                for(var i = 0, iLen = arr.length; i <iLen; i ++) {
                    for(var j = 1; j < arguments.length; j ++) {
                        this.ratingItem[i].classList.add(arguments[j]);
                    }
                }
            },
            mouseOverActiveClass: function (arr){
                for(var i = 0, iLen = arr.length; i < iLen; i++) {
                    if(arr[i].classList.contains('rating__item-active')){
                        break;
                    }else {
                        arr[i].classList.add('rating__item-active');
                    }
                }
            },
            mouseOutActiveClas: function (arr){
                for(var i = arr.length-1; i >=1; i--) {
                    if(arr[i].classList.contains('rating__item-current-active')){
                        break;
                    }else {
                        arr[i].classList.remove('rating__item-active');
                    }
                }
                this.$emit('changeProductRating', (i+1))
            }
        },
        mounted: function () {
            var vm = this;

            vm.ratingElem.onclick = function(e){
                var target = e.target;
                if(target.classList.contains('rating__item')){
                    vm.removeClass(vm.ratingItem,'rating__item-current-active')
                    target.classList.add('rating__item-active','rating__item-current-active');
                }
            }

            vm.ratingElem.onmouseover = function(e) {
                var target = e.target;
                if(target.classList.contains('rating__item')){
                    vm.removeClass(vm.ratingItem,'rating__item-active')
                    target.classList.add('rating__item-active');
                    vm.mouseOverActiveClass(vm.ratingItem)
                }
            }

            vm.ratingElem.onmouseout = function(){
                vm.addClass(vm.ratingItem,'rating__item-active');
                vm.mouseOutActiveClas(vm.ratingItem);
            }


        },
        props: ['productRating']
    }
</script>

<style lang="scss">
    .rating {
        box-sizing: border-box;
        padding-left: 10px;
        &__container {
            display: flex;
        }
        &__item {
            width: 16px;
            height: 16px;
            background: url('https://img.fotosklad.ru/bitrix/templates/fotosklad/_js/jquery/rater_big/images/star.gif') -4px -4px;
            cursor: pointer;
        }
        &__item-active {
            background: url('https://img.fotosklad.ru/bitrix/templates/fotosklad/_js/jquery/rater_big/images/star.gif') -4px -54px;
        }
    }
</style>