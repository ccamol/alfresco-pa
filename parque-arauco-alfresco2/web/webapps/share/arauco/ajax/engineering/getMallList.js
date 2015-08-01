$(".mallImg").one("load", function() {
	var imgId = $(this).attr('id');
	
	var img = document.getElementById(imgId);
	var width = img.clientWidth;
	var height = img.clientHeight;

	var newSize = scaleSize(250, 250, width, height);
	$(this).attr('width', newSize[0]);
	$(this).attr('height', newSize[1]);
	}).each(function() {
	  if(this.complete) $(this).load();
});

function scaleSize(maxW, maxH, currW, currH) {

	var ratio = currH / currW;

	if(currW >= maxW && ratio <= 1){
		currW = maxW;
		currH = currW * ratio;
	} else if(currH >= maxH){
		currH = maxH;
		currW = currH / ratio;
	}

	return [currW, currH];
}

function addVirtualMall(name, country){
	$.ajax({
		url:'/share/page/dashlets/addMall?name=' + name + "&country=" + country,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			
		}
	});

}


function createMall(){

	$.ajax({
		url:'/share/service/dashlets/createMall',
		type: "get",
		dataType: "html",  
		async: false,  		

		success:   function(data) {
			bootbox.dialog(data, [{				
				backdrop: true,
				"label" : "Salir",
				"callback": function() {

					$('#createMallDialog').remove();	
					$('#delete').remove();
					$('#Share').removeClass('modal-open');
					$('#Share').removeClass('modal-backdrop fade in');


				}
			},
			{				
				backdrop: false,
				"label" : "Crear mall",
				"callback": function() {
					if($("#getCountries option:selected").val()=="0"){
						bootbox.dialog('Debe seleccionar un país',[{

							backdrop: true,
							"label" : "Salir",
							"callback": function() {

								$('#alertparameters').remove();	
								$('#delete').remove();
								$('#Share').removeClass('modal-open');
								$('#Share').removeClass('modal-backdrop fade in');


							}
						}]).addClass("mdalert").attr('id','alertparameters');
						$('.modal-backdrop').attr('id','delete');

						return false;
					}
					if($("#countryName").val()==""){
						bootbox.dialog('Debe indicar un nombre',[{

							backdrop: true,
							"label" : "Salir",
							"callback": function() {

								$('#alertparameters').remove();	
								$('#delete').remove();
								$('#Share').removeClass('modal-open');
								$('#Share').removeClass('modal-backdrop fade in');


							}
						}]).addClass("mdalert").attr('id','alertparameters');
						$('.modal-backdrop').attr('id','delete');

						return false;
					}
					addVirtualMall($("#countryName").val(), $("#getCountries option:selected").val());
					$('#createMallDialog').remove();	
					$('#delete').remove();
					$('#Share').removeClass('modal-open');
					$('#Share').removeClass('modal-backdrop fade in');
				}
			}]).addClass("box-dialog").attr('id','createMallDialog');
			$('.modal-backdrop').attr('id','delete');
		}

	});

}
