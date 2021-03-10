const a = new Vue({
    el:'#app',
    data:{
        titulo:'certo',
        link:'http://google.com.br'
    },
    methods:{
        saudacoes: function() {
            this.titulo = 'bom dia ';
            return this.titulo
        }
    }
})