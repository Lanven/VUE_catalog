<template>
    <div id="app">
        <div class="layout">
            <div class="layout__content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }

</script>

<style lang="scss">
    @import "./styles/root.scss";
    @import "./styles/styles.scss";

    body {
        font-family: 'Noto Sans', sans-serif;
    }
    .layout {
        display: flex;
        height: 100vh;
        &__sidebar {
            background: #f0f0f0;
            flex-shrink: 0;
            padding: 10px;
            width: 150px;
        }
        &__content {
            box-sizing: border-box;
            flex-grow: 1;
        }
    }
</style>