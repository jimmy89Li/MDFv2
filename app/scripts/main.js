console.log('\'Allo \'Allo!');

angular.module('store', [])
	.controller('StoreController', function(){
		var product = this;
		product.tabs = [
			{
				name: 'Pink Shoes',
				subname: 'Now at 145',
			},
			{
				name: 'Anna Field',
				subname: 'Limited Edition',
			}
		];
	});
