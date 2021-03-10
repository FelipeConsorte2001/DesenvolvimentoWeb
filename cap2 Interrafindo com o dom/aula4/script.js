const a = new Vue({
    el:'#app',
    data:{
        titulo:'certo',
        link:'http://google.com.br'
    },
    methods:{
        saudacoes: function() {
        
            return this.titulo
        }
    }
})