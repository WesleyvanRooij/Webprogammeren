
$(document).ready(function(){




	$('body').on('click', '.delete', function(){
	//alert("je hebt op delete geklikt");
	$(this).parent().remove();

	});

    //post aanpassen op tijdlijn
	$('body').on('click', '.edit', function(){
	//alert("je hebt op edit geklikt");
	var edit = prompt("wilt u het bericht wijzigen?", $(this).prev().text());
	//alert(edit);
	$(this).prev().text(edit);


	});

    //een post liken op de tijdlijn
 	$("body").on("click", ".addLike", function(){
					var likes = $(this).parent().siblings(".likes").text();
					likes++;
					$(this).parent().siblings(".likes").text(likes);
				});



    //je profielfoto aanpassen/ foto toevoegen aan de tijdlijn
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

    //post schrijven
    var toevoegen = function(){
        var invoer = $("#invoer").val();
        var afbeelding = $('#profielfoto').parent().html();

        if (invoer === "" || afbeelding === ""){
           document.getElementById("foutmelding").innerHTML = "U heeft nog geen tekst ingevuld, of nog geen afbeelding gekozen ";
    }else var uitvoer = '<div class="bericht">'  + '<li class="item"><span>' + '<img src="../images/profielfoto2.jpg">' +  invoer + afbeelding + '</span><img class="edit" src="images/edit.png" height="16" width="16"><img class="delete" src="images/delete.png" height="16" width="16">  <div class="waardering"><div class="likes">1</div><div class=""><img href="#" class="addLike" src="images/like.png" height="16" width="16"></div></div></div> </li>' +  '</div>' ;
        $('#lijst').prepend(uitvoer);
        $("#invoer").val('');

       

    };

    //reageren op een post

 $("#reageerKnop").on("click", function(){
    //alert("ojemele")
    reageren()

    });


  var reageren = function(){
        var invoer = $("#reageerInvoer").val();
        


        




        var uitvoer = '<div class="reactie2">'+ '<li class="item"><span>'+'<img src="../images/profielfoto2.jpg">' + invoer+ '</span><img class="edit" src="images/edit.png" height="16" width="16"><img class="delete" src="images/delete.png" height="16" width="16"><div class="waardering"><div class="likes">1</div><div class=""><img href="#" class="addLike" src="images/like.png" height="16" width="16"></div></div></div> </li>' +  '</div>' ;
        $('#postsReactie').append(uitvoer);
        $("#reageerInvoer").val('');

       

    };



});

//einde tijdlijn