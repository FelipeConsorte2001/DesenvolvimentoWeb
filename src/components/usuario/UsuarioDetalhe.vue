<template>
  <div class="usuario-detalhe">
      <h3>Usuário detalhe</h3>
      <hr>
        <p><strong>Código</strong>{{ id }}</p>
        <!-- :to="`/usuario/${$route.params.id}/editar`" -->
        <router-link tag="button" primario :to="{name:'editarUsuario',params:{id: $route.params.id }, query:{ completo: true, lingua:'pt'}, hash:'#rodape'}" >
            Editar
        </router-link>
  </div>
</template>

<script>
export default {
    props:['id'],
    beforeRouteEnter (to, from, next) {
      console.log("Dentro do componente")

            const autentificado = true
            autentificado ? next(): next(false)
    }
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch:{
    //     $route(to){
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style>

</style>