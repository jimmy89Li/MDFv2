console.log('\'Allo \'Allo!');

(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			title = 'Pink Shoes',
			subtitle = 'Now at $145,99'
		},
		{
			title = 'Anna Field',
			subtitle = 'Limited Edition'
		}
	];
})();