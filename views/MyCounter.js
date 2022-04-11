export default {
  	name: 'MyCounter',
	template: `<div class="main-container">
              <h3>La conta ammonta ora a {{ conta }}</h3>
				      <h4 v-if="conta === 10"> Raggiunto il massimo consentito!</h4>
				      <h4 v-if="conta === -10"> Raggiunto il minimo consentito!</h4>
              <button @click="decrementa">Decrementa (min -10)</button>
              <button @click="incrementa">Incrementa (max 10)</button>
             </div><!-- .main-container -->`,
  	data() {
		return {
			conta: 0
		}
	},
  	methods: {
		incrementa() {
			if(this.conta < 10) {
				this.conta++
			}		
		},
	  	decrementa() {
			if(this.conta > -10) {
				this.conta--
			}
		}
	}  
}

