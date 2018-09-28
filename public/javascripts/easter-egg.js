
setInterval(function() {
	let inputs = document.getElementsByTagName('input');
	let checks = 0;
	for (var i = 0; i < inputs.length; i++) {
		let _input = inputs[i];
		if (_input.type.toLowerCase() == 'checkbox' && _input.checked) {
			checks++;
		}
		if (inputs.length == checks) {
			document.getElementById('atualização').style.display = 'block';
			try {
				window.scrollTo({
					top: 10000,
					behavior: "smooth"
				});
			} catch (e) {}
		} else {
			document.getElementById('atualização').style.display = 'none';
		}
	}
}, 2000);