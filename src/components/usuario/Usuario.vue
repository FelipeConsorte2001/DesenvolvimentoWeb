<template>
    <div class="Usuario"><h2>Usuario</h2>
        <router-view/>
        <button sucesso @click="irPraInicio">Voltar </button>
    </div>
    

</template>
<script>
export default {
    methods: {
        irPraInicio(){
            // this.$router.push('/')
            // this.$router.push({path:'/'})
            this.$router.push({name:'inicio'})
            }
    },
}
</script>
<style>

</style>