<template>
    <nav class="nav-bar">
        <div class="logo">
            Books
        </div>
        <div class="links">
            <a>About</a>
            <a>Explore</a>
            <a>Contact</a>
            <a>FAQ</a>
        </div>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .nav-bar {
        position: fixed;
        z-index: 10;
        width: 100%;
        height: 5%;
        display: flex;
        background-image: linear-gradient(to bottom, rgba(52, 52, 52, 1), rgb(44, 44, 44));
    }
    .logo {
        width: 60%;
    }
    .links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        cursor: pointer;
        a {
            // color: 
            font-size: 1.5rem;
            text-shadow: 1px 1px rgba(52, 52, 52, 1);
            color: rgba(255, 230, 109, 1);
        }
    }
</style>