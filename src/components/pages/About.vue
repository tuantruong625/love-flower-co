<template>
    <div class="about-wrapper">
        <Navbar></Navbar>

        <div class="about-container">
            <h1 class="about-container__header-text">about</h1>
            <div class="about-container-body">
                <p class="about-container-body__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ab!
                    Impedit quia eligendi nisi vitae earum enim beatae fuga quidem ea inventore,
                    non provident porro! Dicta quasi exercitationem et perspiciatis.
                </p>
                <img class="about-container-body__image" src="http://via.placeholder.com/350x150">
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    name: 'About',
    components: { Navbar },
    data(){
        return {

        }
    }

}
</script>

<style>
</style>
