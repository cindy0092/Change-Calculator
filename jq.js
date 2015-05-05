$(document).ready(function(){
	var $form, input, result;
	$form = $('#calculator');
	$('form input[type="number"]').on('blur', function() { // When input loses focus
	  console.log('You entered ', this.value );          // Write value to console
	});
	$('#calculator').on("submit", function(e) {
	  e.preventDefault(); 
	  console.log('Clicked submit...');
	  input = $('#num').val();
	  result = numCal(input);
	  // The message only shows if user has not entered a number
	  //console.assert($.isNumeric(result), 'User entered non-numeric value');
	  for(var key in result){
		var para = $form.append('<p id="change">' + key + ": "+ result[key] + '</p>');
	  }
	});

});


