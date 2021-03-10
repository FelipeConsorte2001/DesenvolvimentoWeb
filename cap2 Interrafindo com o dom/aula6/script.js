const a = new Vue({
    el:'#app',
    data:{
        titulo:'certo',
        link:'http://google.com.br',
        linkHtml: "<a href='https://www.facebook.com/facebookappBrasil/'>Google</a>"
    },
    methods:{
        saudacoes: function() {
            this.titulo = 'bom dia ';
            return this.titulo
        }
    }
}) 