const a = new Vue({
    el:'#app',
    data:{
        titulo:'Mostro'
    },
    methods:{
        saudacoes: function() {
        
            return this.titulo
        }
    }
})