var calculator = new Vue({
	el: '#calculator',
	data: {
		paper: '0.060',
		pages: '',
		calcSize: '0'
	},
	computed: {
		calcSize: function(e){
			var r = this.pages;
			var n = this.paper;
			var sonuc = 0;

			if(r > 0) {
				sonuc = (r * n) + 0.2 || 0;
			} else {
				sonuc = 0;
			}
			return Math.ceil(sonuc);
		}
	}
});