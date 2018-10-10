export Vue.directive('ratio', {
	bind: function(el, binding) {
		function setStyle() {
			let check = {
				small: 0,
				medium: 750,
				large: 1024,
				xlarge: 1440,
				xxlarge: 1920
			};
			let ratio = binding.value;

			if (!process.server) {
				Object.keys(check).forEach(function(item) {
					if (window.innerWidth > check[item]) {
						if (el.getAttribute('ratio-' + item)) {
							ratio = el.getAttribute('ratio-' + item);
						}
					}
				});
			}

			ratio = ratio.split(':');
			let elSize = el.getBoundingClientRect();
			el.style.height = (elSize.width / ratio[0]) * ratio[1] + 'px';
			el.style.opacity = 1;
			if (el.classList.contains('ratio-hide')) {
				el.classList.remove('ratio-hide');
			}
		}
		if (!process.server) {
			window.addEventListener('resize', function() {
				setStyle();
			});
		}
	},
	inserted: function(el, binding) {
		//added this functiopn twice cause I couldn't call setStyle function in a method, maybe fix later
		//inserted function will call when dom is entered in the website, maybe fix later?
		let check = {
			small: 0,
			medium: 750,
			large: 1024,
			xlarge: 1440,
			xxlarge: 1920
		};
		let ratio = binding.value;

		if (!process.server) {
			Object.keys(check).forEach(function(item) {
				if (window.innerWidth > check[item]) {
					if (el.getAttribute('ratio-' + item)) {
						ratio = el.getAttribute('ratio-' + item);
					}
				}
			});
		}

		ratio = ratio.split(':');
		let elSize = el.getBoundingClientRect();
		el.style.height = (elSize.width / ratio[0]) * ratio[1] + 'px';
		el.style.opacity = 1;
		if (el.classList.contains('ratio-hide')) {
			el.classList.remove('ratio-hide');
		}
	}
});
