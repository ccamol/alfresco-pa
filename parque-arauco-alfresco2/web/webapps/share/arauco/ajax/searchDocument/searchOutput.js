
$(document).ready(function() {
	
	var keyWords = getUrlVars()["q"];
	var documentType = getUrlVars()["type"];
	var yearSince = getUrlVars()["since"];
	var yearUntil = getUrlVars()["until"];
	var country = getUrlVars()["country"];
	var mall = getUrlVars()["mall"];
	$('#searchData').click('page.dt', function () {
		bindDocumentDataTable();
		} );
	
	$.ajax({
		url:'/share/page/dashlets/searchDocumentData',
		type: "GET",
		dataType: "html",  
		data: { 
			keyWords : keyWords,
			documentType : documentType,
			yearSince : yearSince,
			yearUntil : yearUntil,
			country : country,
			mall : mall
		} ,
		success:function(data){
			$('#searchData').html(data);
			$('#listFilter').dataTable();
			// menu contextual
			
			bindDocumentMenu();
//			$('.documentNode').off('contextmenu');
//			$('.documentNode').contextMenu(menu2,{theme:'vista'});
		},
		error:function (xhr, ajaxOptions, thrownError){
			
			popupAlert('Error al cargar seccion');
		}  
	});
	
});

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function bindDocumentDataTable(){
	$('.documentNode.sorting_1').each(function () {
		$(this).off('contextmenu');
		$(this).contextMenu(menu3,{theme:'vista'});
	});
	

	
}
