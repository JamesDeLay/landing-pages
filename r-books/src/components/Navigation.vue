<template>
    <nav class="nav-bar">
        <div class="logo">
            <p class="text">r / books</p>
        </div>
        <div class="links">
            <a class="text">About</a>
            <a class="text">Explore</a>
            <a class="text">Contact</a>
            <a class="text">FAQ</a>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Modak&display=swap');

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

        p {
            color: rgba(255, 255, 250, 1);
            font-size: 3rem;
            font-family: "Modak";
            -webkit-text-stroke: 2px rgba(140, 39, 30, 1);;
        }
        .text:hover {
            -webkit-text-stroke: 3px salmon;
        }
    }
    

    .links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        a {
            font-size: 1.5rem;
            color: rgba(255, 255, 250, 1);
            font-family: "Modak";
            -webkit-text-stroke: 1px rgba(140, 39, 30, 1);;
        }
    }

    .text {
        transition: .5s;
        cursor: pointer;  
    }

    .text:hover {
        color: rgba(255, 255, 250, 1);
        -webkit-text-stroke: 2px salmon;
        transform: scale(1.25);
        z-index: 1;
    }
</style>