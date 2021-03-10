const o = new Vue({
    el:'#app',
    data:{
        contador: 0,
        x:0,
        y:0
    }, 
    methods:{
        soma(num){
            this.contador += num
        },
        passar(event){
            this.x = event.clientX
            this.y = event.clientY
        }
    }

})