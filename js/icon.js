const canvas_i = document.createElement('canvas');
		canvas_i.width = 32;
		canvas_i.height = 32;
		const context = canvas_i.getContext('2d');
		context.fillStyle = '#f00';
		context.beginPath();
		context.arc(32 / 2, 32 / 2,32 / 2, 0, 2 * Math.PI);
		context.fill();
		context.fillStyle = '#fff';
		context.font = '24px Arial';
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText(1, 32 / 2, 32 / 2);

		const iconNode = document.createElement('link');
		iconNode.rel = 'icon';
		iconNode.type = 'image/png';
		iconNode.id = 'icon1';
		iconNode.href = canvas_i.toDataURL('image/png');

		const iconNode2 = document.createElement('link');
		iconNode2.rel = 'icon';
		iconNode2.type = 'image/png';
		iconNode2.id = 'icon2';
		iconNode2.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12P4zwAAAgEBAKrChTYAAAAASUVORK5CYII=';

		function faviconPulse (time) {
			var counter = 0;
			var currentIcon;

			var interval = setInterval(function() {
				if (counter % 2 === 0) {
					currentIcon = document.getElementById('icon2');
					if (currentIcon !=null) currentIcon.parentNode.removeChild(currentIcon);
					document.head.appendChild(iconNode);
				} else if ((counter % 2 === 1) && document.visibilityState === 'hidden') {
					var currentIcon = document.getElementById('icon1');
					if (currentIcon !=null) currentIcon.parentNode.removeChild(currentIcon);
					document.head.appendChild(iconNode2);
				}

				counter ++;
			}, time ? time : 500);
		}

		faviconPulse(1000);