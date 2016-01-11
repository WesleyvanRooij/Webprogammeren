
$(document).ready(function(){





	//$('#knop').on('click', function(){
		//var invoer = $('#invoer').val();
		//$('#lijst').prepend('<li class="item"><span>'+invoer+'</span><img class="edit" src="images/edit.png" height="16" width="16"><img class="delete" src="images/delete.png" height="16" width="16">  </li>');	
		//$('#invoer').val('');
	//});

	//$('body').on('click', '.item', function(){
		//alert("Je hebt op" + $(this).html() + "geklikt");

	//});
	
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

 	$("body").on("click", ".addLike", function(){
					var likes = $(this).parent().siblings(".likes").text();
					likes++;
					$(this).parent().siblings(".likes").text(likes);
				});




   $(':file').change(function () {    
        if(this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });

    function imageIsLoaded(e) {
        $('#profielfoto').attr('src', e.target.result);
    };

    $("#knop").on("click", function(){
    toevoegen();

    });

    $("#invoer").on("keypress", function(){
        if(event.keyCode == 13){
            toevoegen();
        }


    });

    var toevoegen = function(){
        var invoer = $("#invoer").val();
        var afbeelding = $('#profielfoto').parent().html();


        




        var uitvoer = '<div class="bericht">'+ '<li class="item"><span>'+ afbeelding + invoer+ '</span><img class="edit" src="images/edit.png" height="16" width="16"><img class="delete" src="images/delete.png" height="16" width="16">  <div class="waardering"><div class="likes">1</div><div class=""><img href="#" class="addLike" src="images/like.png" height="16" width="16"></div></div></div> </li>' +  '</div>' ;
        $('#lijst').prepend(uitvoer);
        $("#invoer").val('');

       

    };

 $("#reageerKnop").on("click", function(){
    //alert("ojemele")
    reageren()

    });
  var reageren = function(){
        var invoer = $("#reageerInvoer").val();
        var afbeelding = $('#profielfoto').parent().html();


        




        var uitvoer = '<div class="reactie2">'+ '<li class="item"><span>'+ afbeelding + invoer+ '</span><img class="edit" src="images/edit.png" height="16" width="16"><img class="delete" src="images/delete.png" height="16" width="16"><div class="waardering"><div class="likes">1</div><div class=""><img href="#" class="addLike" src="images/like.png" height="16" width="16"></div></div></div> </li>' +  '</div>' ;
        $('#postsReactie').append(uitvoer);
        $("#reageerInvoer").val('');

       

    };



});
