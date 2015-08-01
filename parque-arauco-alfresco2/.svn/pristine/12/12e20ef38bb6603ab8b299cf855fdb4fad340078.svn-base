var session;
var token="";
var nodeSession;
var typeMall=1;
var siteId = null;
$(document).ready(function() {
	siteId = $("#siteId").val();
	if(siteId == "arquitectura"){
		$('#createMall').hide(); 
//		$('#workShopArea').hide();
//		$('#workShopAreaTitle').hide();

	}
	$("#menos").hide();
	$("#mas").click(function(){
		$("#menos").show();
		$("#mas").toggle();
	});

	$("#menos").click(function(){
		$("#mas").show();
		$("#menos").toggle();
	});

	selectionMall("1");
});

function selectionMall(mallType , idCountry){
	$.ajax({
		url:'/share/page/dashlets/mallList',
		type: "get",
		dataType: "html",
		async: false, 
		data: {
			filter : mallType,
			idCountry : idCountry
		},
		success:   function(data) {
			$('#mallsList').html(data);
			if(mallType==3){
				bindMenuVirtual();
			}else{
				bindMenu();
			}
		}
	});
}

function selectionCommerce(){
	$.ajax({
		url:'/share/page/dashlets/getCommerce',
		type: "get",
		dataType: "html",  
		success:   function(data) {
			$('#typeCommerce').html(data);
		}
	});
}

function getManagement(id){
	if(siteId=="arquitectura"){
		window.location.replace("/share/page/site/arquitectura/managementArchitecture?id="+id+"&nodeType=9");	
	}
	if(siteId=="arauco"){
		window.location.replace("/share/page/site/arauco/management?id="+id+"&nodeType="+typeMall);
	}
}

function countrySelected(){
	if($('#local').is(':checked')){
		selectionMall(1 , $('#getCountry').val());
	}else if($('#oulet').is(':checked')){
		selectionMall(2 , $('#getCountry').val());
	}else if($('#workShopArea').is(':checked')){
		selectionMall(3 , $('#getCountry').val());
	}else{
		selectionMall("1");
	}
}
