const a = new Vue({
    el:"#desafio",
      
    data:{
        nome:"Felipe Consorte",
        idade: 19,
        img:"https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg",
    }, 
    methods:{
        calculaIdade: function () {
            let num = this.idade * 3;
            return num;
        },
        sorteio: function(){
            let sot;
            sot = (Math.random())
            return sot.toFixed(2);
        },
    },
 })