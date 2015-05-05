$(document).ready(function(){
	var $form, $div, input, result;
	// var para = document.getElementsByTagName("p");
	// if(para.length > 0){
	// 	$('form input[type="number"]').on('blur', function() {
	//   		para.remove();
	//   	});
	// }
	//else{
		$form = $('#calculator');
		$div = $('#div');
		$('form input[type="number"]').on('blur', function() { // When input loses focus
	  		console.log('You entered ', this.value );          // Write value to console
		});
	//}
	$('#calculator').on("submit", function(e) {
	  e.preventDefault(); 
	  console.log('Clicked submit...');
	  console.log('remove...');
	  input = $('#num').val();
	  result = numCal(input);
	  $div.empty();
	  console.log(result);

	  // The message only shows if user has not entered a number
	  //console.assert($.isNumeric(result), 'User entered non-numeric value');
	  for(var key in result){
	  	
		$div.append('<p id="change">' + key + ": "+ result[key] + '</p>');
	  }
	  //$h3.remove();
	});

});


