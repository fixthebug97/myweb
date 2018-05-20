
$('.section1').hide();

$('.section2').hide();
$('.button-3').hide();

var value;

$('.button-1').on('click', function(){
 	if($('#user').val()!=""){
	 	var newtext=$('#user').val();
	 	alert("hello "+newtext);
		$("#Name").html("hello "+newtext);
		$('.section1').show("slow");
		$('.button-3').show();
		$('#user').val("");
 	}

	else
	{
		alert("Enter the name");
	}
});


$('.button-2').on('click', function(){
	value=$('#user2').val();

		if (value%2==0){
$('.heading').html(value+"  is EVEN number");
 	}
 	else{
$('.heading').html(value+"  is ODD number");

 	}

 	if(value.length > 0  ){
 	
 		var newvalue="";
	 	for(var i=1; i<=10; i++){
		newvalue += +value+" * " + i + " = " +value*i+"<br>";

		}
		
		$('.section2').show("slow");
				$('.button-3').show();
 		$("#Name1").html(newvalue);
 		$('#user2').val("");


 	}
 
 
	else
	{

		alert("Enter the number");


	}


});




$('.button-3').on('click',function(){

$('.button-3').hide();


$('.section2').hide("slow");
$('.section1').hide("slow");
});


		
		