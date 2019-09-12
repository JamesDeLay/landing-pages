<template>
    <nav class="nav-bar">
        <div class="logo">
            <a class="">r / books</a>
        </div>
        <div class="links">
            <a href="#" class="text">About</a>
            <a href="#" class="text">Explore</a>
            <a href="#" class="text">Contact</a>
            <a href="#" class="text">FAQ</a>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    .nav-bar {
        position: fixed;
        z-index: 10;
        width: 100%;
        height: 5%;
        display: flex;
        background-image: linear-gradient(to bottom, rgba(52, 52, 52, 1), rgb(44, 44, 44));
    }

    .logo {
        width: 40%;
        display: flex;
        align-items: center;
        padding-left: 2rem;
        cursor:pointer;
        a {
            color: rgba(255, 230, 109, 1);
            font-size: 3rem;
            font-family: "Montserrat";
        }
    }
    

    .links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        a {
            font-size: 1.5rem;
            color: rgba(255, 230, 109, 1);
            font-family: "Montserrat";
            text-transform: uppercase;
            letter-spacing: .3rem;
        }
    }

    .text {
        transition: .5s;
        cursor: pointer;  
    }

    .text:hover {
        color: rgba(255, 230, 109, 1);
        transform: scale(1.25);
        z-index: 1;
    }
</style>