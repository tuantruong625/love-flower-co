<template>
    <div class="landing-container">
        <div class="landing-container__primary">
            <div class="landing-container__primary--sub">
                <h1>
                <span><img src="@/assets/heart.png" alt="" class="landing-container__image"></span>
                {{ title }}
                <span><img src="@/assets/flower.png" alt="" class="landing-container__image"></span>
            </h1>
            </div>
            <transition name="page" mode="out-in">
                <router-link class="landing-container__primary--btn" to="Index">enter</router-link>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'landing',
    data() {
        return {
            title: 'love flower co'
        }
    }
}
</script>
<style lang="scss">
</style>
