$(document).ready(function(){

	$('#knop').on('click', function(){
		var invoer = $('#invoer').val();
		$('#lijst').prepend('<li class="item"><span>'+invoer+'</span><img class="edit" src="images/edit.png" height="16" width="16"><img class="delete" src="images/delete.png" height="16" width="16"></li>');	
		$('#invoer').val('');
	});

	$('body').on('click', '.item', function(){
		//alert("Je hebt op" + $(this).html() + "geklikt");

	});
	
	$('body').on('click', '.delete', function(){
	//alert("je hebt op delete geklikt");
	$(this).parent().remove();

	});

	$('body').on('click', '.edit', function(){
	//alert("je hebt op edit geklikt");
	var edit = prompt("wilt u het bericht wijzigen?", $(this).prev().text());
	//alert(edit);
	$(this).prev().text(edit);


	});




});
