new Vue({
	el: '#desafio',
	data: {
		class1: "destaque",
		perigo:"perigo",
		perigo: true,
		exer4:"",
		exer:'',
		cor:"",
		estilo:{
			width: "100px",
			height:"100px"
		},
		width: "0"
	},
	
		
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1== 'destaque'?  'encolher':'destaque'
			}, 1000);
	
		},
		iniciarProgresso() {
			let valor = 0
			const tempo = setInterval(()=>{
				valor +=5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(tempo)
			},500)
		},
		Set(event){
			if(event.target.value == "true"){
				this.perigo = true

			}else if(event.target.value == "false"){
				this.perigo = false
			}
		}
	}
})
