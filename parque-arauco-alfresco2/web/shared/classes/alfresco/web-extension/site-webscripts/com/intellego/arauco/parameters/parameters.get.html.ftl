<head>
    <script>        
        var URL_DATA_LIST_FIELD = "/share/page/arauco/parameters/dataListField";
        var URL_DATA_LIST_CRUD_GET = "/share/page/arauco/parameters/dataListCRUD";
        var ACTION_GET = "get";
		var ACTION_ADD = "add";
		var ACTION_UPDATE = "update";
        
        var jsonData = {};
        
        var listType = "listType=";
        var idList = "";
        var title;
		
		$( document ).ready(function() {
			$('#tablaLista').dataTable( {
			
			
        "bPaginate": false,
     
        "bInfo": false
                 } );
		});

        function add(action, uuid){ 
            var params = {};
            params.action = action;
            params.listType = idList;

			console.log(uuid);
			
			if(uuid != ''){
				params.uuid = uuid;
			}
            
            for(var i = 0; i < jsonData.length; i++){
            console.log(jsonData[i].id);
            console.log(jsonData[i].description);
                if(jsonData[i].mandatory=="true"){
                
                
                 if($("#" + jsonData[i].id).val()== ""){
                 
                 popupAlert('Debe ingresar ' + jsonData[i].description);   
                    return;
                    }else{
						if($("#" + jsonData[i].id).val() != null){
							params[jsonData[i].id] = $("#" + jsonData[i].id).val().toString();
							
							
							
							//params[jsonData[i].id] = $("#" + jsonData[i].id).val();
						}else{
							params[jsonData[i].id] = "";
						}                        
                    }
                }else{
					if($("#" + jsonData[i].id).val() != null){
						params[jsonData[i].id] = $("#" + jsonData[i].id).val().toString();
						//params[jsonData[i].id] = $("#" + jsonData[i].id).val();
					}else{
						params[jsonData[i].id] = "";
					} 
				}          
            }
            
            console.log(params);
			serverCall(params, URL_DATA_LIST_CRUD_GET, postCall, true);
        }
		
		function update(uuid){ 
			var id;
			var tdVal;
			
			for(var i = 0; i < title.length; i++){
				if(title[i].bVisible != "false"){
					id = "#" + uuid + title[i].id;
					tdVal = $(id).text();
					
					if($("#" + title[i].id).is("select")){
						if($("#" + title[i].id).hasClass( "multiselect" )){
							tdVal = tdVal.split(" ").join("");
							tdVal = tdVal.substr(1, tdVal.length - 2).split(",");
							$("#" + title[i].id).val(tdVal);
							$("#" + title[i].id).multiselect("refresh");
						}else{
							$("#" + title[i].id + " option").filter(function() {
								return $(this).text() == tdVal; 
							}).prop('selected', true);
						}						
					}else{
						$("#" + title[i].id).val(tdVal);
					}				
				}
			}
			
			$('#btnAdd').attr( 'onclick', "add('" + ACTION_UPDATE + "', '" + uuid + "')");
			$('#btnAdd').text('Editar');			
		}
		
		function deleted(uuid){ 
			var params = {};
            params.action = ACTION_UPDATE;
			params.uuid = uuid;
			params.available = "false";
			params.listType = idList;
						
			console.log(params);
			console.log( URL_DATA_LIST_CRUD_GET + "     DELETE");
			
			serverCall(params, URL_DATA_LIST_CRUD_GET, postCall, true);
				updateDataTable();
				clean();
		
			
		}
		
		function clean(){            
            for(var i = 0; i < jsonData.length; i++){
				$("#" + jsonData[i].id).val("");   
            }
			
			$(".multiselect").multiselect("refresh");
			
			$('#btnAdd').attr('onclick', "add('" + ACTION_ADD + "', '')");
			$('#btnAdd').text('Agregar');
        }
        
        function postCall(json){
            if(json.status == '1'){
            popupSuccess('Operación realizada con éxito');
				updateDataTable();
				clean();
				
            }else{
				if(json.description != null){
					if(json.description == 'undefined'){
						popupAlert('Error al ejecutar la solicitud: Se deben completar los campos');					
					}else{
						popupAlert('Error al ejecutar la solicitud: ' + json.description);
					}				
				}else{
					popupAlert('Error al ejecutar la solicitud: Se deben completar todos los campos');
				}                
            }
        }
		
		function buildTable(json){
            // Borrar el contenido del div
            $("#dataTableContainer").empty();
			
			var content = '';
            
            $("#dataTableContainer").append('<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered" id="dataTable"></table>');
            
			// Genera el título
			$("#dataTable").append('<thead><tr id="dataTableHeader"></tr></thead>');
			
			for(var i = 0; i < title.length; i++){
				$("#dataTableHeader").append('<th>' + title[i].sTitle + '</th>');
			}
			
			// Genera el body
			$("#dataTable").append('<tbody id="dataTableBody"></tbody>');
			//var data = json.aaData;
			var data = json;
			var id;
			
			for(var i = 0; i < data.length; i++){
				content = '<tr id="' + data[i][0] + '">';
				for(var x = 0; x < data[i].length; x++){
					id = title[x].id;
					if(id != 'uuid' && id != 'btnColumn'){
						content += '<td id="' + data[i][0] + id + '">' + data[i][x] + '</td>';
					}else{
						content += '<td>' + data[i][x] + '</td>';
					}					
				}
				
				content += '<td><a class="ico editProject" onclick="update(\'' + data[i][0] + '\')"rel="tooltip" title="Editar"></a>';
				content += '<a class="ico delete" onclick="deleted(\'' + data[i][0] + '\')" rel="tooltip" title="Eliminar"></a></td>';
				content += '</tr>';
				
				$("#dataTableBody").append(content);
			}
			
			$('#dataTable').dataTable( {
				"aoColumnDefs": [
					{ "bVisible": false, "aTargets": [ 0 ] }
				] } 
			);
        }
        
        function addField(id){                 
			clean();
            idList = id;
			var params = listType + id + "&action=" + ACTION_GET;
            serverCall(params, URL_DATA_LIST_FIELD, buildField, false);
            
        }
        
        function addFieldBD(id){                 
			clean();
            idList = id;
			var params = listType + id + "&action=" + ACTION_GET;
            serverCall(params, URL_DATA_LIST_FIELD, buildField, false);
            
        }
        
        function colorear(id){
       
        $('.fondo').removeClass('fondo');
        //$("#"+id).removeClass('fondo');
        


        
           $(".btnadd").show();
           $("#btnClean").show();
                 
		}
	
        
        function buildField(json){
            var description;
            title = [];
            var titleObj = {};
			var disable = false;
			
			 for(var i = 0; i < json.length; i++){
				if(json[i].id == "config"){
					disable = true;
				}
			 }
            
            jsonData = json;

            // Borrar el contenido del div
            $("#fieldContainer").empty();
            
			// Columna uuid
            titleObj.sTitle = "ID";
			titleObj.id = "uuid";
            titleObj["bVisible"] = false;
                
            title.push(titleObj);
                
            for(var i = 0; i < json.length; i++){
				description = '';
				if(json[i].dataType == 'select'){
					description = '<div class="col-md-4 column"><label>' + json[i].description + '</label><select id="' + json[i].id + '" mandatory="' + json[i].mandatory + '">';
					
					for(var x = 0; x < json[i].data.length; x++){
						description += '<option value="' + json[i].data[x].id + '">' + json[i].data[x].description + '</option>';
					}
					
					description += '</select></div>';
				}else{
					if(json[i].dataType == 'multiple'){
						description = '<div class="col-md-4 column"><label>' + json[i].description + '</label><select multiple="multiple" class="multiselect" id="' + json[i].id + '" mandatory="' + json[i].mandatory + '">';
						
						for(var x = 0; x < json[i].data.length; x++){
							description += '<option value="' + json[i].data[x].id + '">' + json[i].data[x].description + '</option>';
						}
						
						description += '</select></div>';
					}else{
						description = '<div class="col-md-4 column"><label>' + json[i].description + '</label><input type="text" aria-controls="example" maxlength="255" id="' + json[i].id + '" mandatory="' + json[i].mandatory + '" >';
					}
				}
                
				$("#fieldContainer").append(description);
				
				if(json[i].id != "config"){
					$( "#" + json[i].id ).prop( "disabled", disable );
				}
                
                titleObj = {};
                titleObj.sTitle = json[i].description;
				titleObj.id = json[i].id;
                titleObj.bVisible = true;
                
                title.push(titleObj);
            }
			
			/*
			$('.multiselect').multiselect({
			   noneSelectedText: "Seleccionar",
			   checkAllText: "Marcar Todos",
			   uncheckAllText: "Desmarcar Todos",
			   selectedList: 2,
			   selectedText: "# Seleccionados"
			});
			*/
			
			
			$('.multiselect').multiselect({
			   noneSelectedText: "Seleccionar",
			   checkAllText: "Marcar Todos",
			   uncheckAllText: "Desmarcar Todos",
			   selectedList: 2,
			   selectedText: "# Seleccionados"
			}).multiselectfilter({
				label: "Filtro",
				placeholder: "Ingrese palabras"
			});
			
			// Columna de botones
			titleObj = {};
			titleObj.sTitle = "";
			titleObj.id = "btnColumn";
            titleObj.bVisible = true;
			title.push(titleObj);
			
			updateDataTable();
            
        }
		
		function updateDataTable(){
			var params = listType + idList + "&action=" + ACTION_GET;
			serverCall(params, URL_DATA_LIST_CRUD_GET, buildTable, false);
		}
        
        function serverCall(params, url, callBack, jsonData){
            // Envia la peticion al server
            var request = $.ajax({
                url: url,
                type: "GET",
                data: params,
                contentType: jsonData ? "application/json; charset=UTF-8" : "",
                dataType: jsonData ? "JSON" : ""
            });
            // Asigna el callback
            if(callBack != null){
                request.done(function(data){
                    //var jsonStr = utf8_decode(JSON.stringify(data));
                    //console.log(data);
                    //var json = $.parseJSON(data);
                    callBack(data);
                });
            }
            // Muestra el error en caso de fallo
            request.fail(function(jqXHR, textStatus) {
            
            popupAlert('Ocurrió un error al ejecutar la acción');
            
            });
        }
		
    </script>
</head>




<div class="col-md-3 column">

<div class="dashlet">
  <div id="parameterList" class="title">Parametros</div>

<div style="overflow-y:auto; height:450px;" class="col-md-12 column" id="listas">
<div class="row clearfix">
  
<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered" id="tablaLista">
  <thead> 		  
<th> Listas </th>
</thead>
  <tbody>
  
  <#list resultSet as node>
     <#if node.id?exists>
     
     
     <tr >
     
     <#if node.type=="0">
            <td id="td_${node.id}" onclick="colorear('td_${node.id}')"> <a href="#" onclick="addField('${node.id}')"; > ${node.title} </a>  </td>
	 <#else>
            <td id="td_${node.id}" onclick="colorear('td_${node.id}')"> <a href="#" onclick="addFieldBD('${node.id}')"; > ${node.title} </a>  </td>
	 </#if>     

</tr>

     </#if>
   </#list>     
   
   </tbody>         
</table>
</div>
</div> 

</div>

</div>

<!--fin div col3-->


<div class="col-md-9 column">

<div class="dashlet">
  <div class="title">Mantenedor</div>

  <div class="col-md-12 column bar">
    
  </div>


<div id="mantenedorList" class="col-md-12 column" style="overflow-y:scroll;  height:404px;">
<div class="row clearfix">

<div class="row clearfix" style="height:100px;">
  <div id="fieldContainer" class="col-md-12 column">

    
  </div> 
  </div>






<div class="row clearfix">
  <div class="col-md-12 column">

    <div class="col-md-12 column">
      <center style="margin-top: 50px;">
      <a style="display:none;" id="btnAdd"  class="btn btn-primary btnadd " onclick="add('add', '')" href="#">Agregar"</a>
	  <a style="display:none;" id="btnClean"  class="btn btn-primary"" onclick="clean()" href="#" >Limpiar</a>
      </center>
    </div> 
    
    
    
  </div> 
  </div> 
  
 <div id="dataTableContainer" class="col-md-12 column">

 </div> 
  
</div>
</div> 


</div>

</div>
</div>