<template>
     <div class="navbar-container">
        <div class="navbar-logo">
            <span><img class="navbar-image" src="@/assets/heart-grey.png" alt=""></span>
        </div>
        <div class="navbar-links">
            <span class="navbar-links"><router-link :to="{ path: 'Index' }">home</router-link></span>
            <span class="navbar-links"><router-link :to="{ path: 'About' }">about</router-link></span>
            <span class="navbar-links"><a href="#">work</a></span>
            <span class="navbar-links"><router-link :to="{ path: 'Contact' }">contact</router-link></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }

}
</script>

<style>
</style>
