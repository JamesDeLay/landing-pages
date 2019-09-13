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
    @import "../styles/utils.scss";

// For media query    // 
//     @include for-size(phone-only) {    
//       font-size: 1rem; 
//    }

    .nav-bar {
        position: fixed;
        z-index: 10;
        width: 100%;
        height: 5%;
        display: flex;
        background-image: linear-gradient(to bottom, $gray, $dark-gray);
    }

    .logo {
        @include flex-align-center;
        width: 40%;
        padding-left: 2rem;
        cursor:pointer;
        a {
            @include header;
            color: $yellow;
            font-size: 3rem;
        }
    }
    
    .links {
        @include flex-align-center;
        justify-content: space-around;
        width: 60%;
        a {
            @include header;
            font-size: 1.5rem;
            color: $yellow;
            text-transform: uppercase;
        }
    }

    .text {
        transition: .5s;
        cursor: pointer;  
    }

    .text:hover {
        color: $yellow;
        transform: scale(1.25);
        z-index: 1;
    }
</style>