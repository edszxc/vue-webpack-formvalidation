<template>
    <div class="about">
        <div class="container">
            <h1>{{ title }}</h1>
            <p>Sample Content</p>        
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {
                title: 'About Section'
            }
        }
    }
</script>

<style scoped>
    .about { margin-top: 150px; }
</style>