<#if state == "true">
	<div class="row clearfix" id="specialMetadata">
		<div name="form2" class="col-md-12 column">
			<#assign varAspect = "">
			<#list id as data>
			<#if data.aspect != "generalData">
				<#if varAspect =="">
					<div id="${data.aspect}" class="row clearfix">
						<div class="sectionHeader subtitle-modal">${data.titleAspect}</div>
				</#if>
				 <#if data.aspect != varAspect && varAspect!= "">
				    </div>
				    </div>
				    <div name="form2" class="col-md-12 column">
	                <div id="${data.aspect}" class="row clearfix">
	                	<div class="sectionHeader subtitle-modal">${data.titleAspect}</div>
	            </#if> 	
				<#if data.create.show>
					<#if data.create.list>
						<div class="col-md-6 column" name="listProperty">
							<label for="${data.name}">
							<#if data.mandatory == "true">
							<img src="${url.context}/images/icons/required_field.gif" style="padding-right:5px;"/>
							</#if>
							${data.title}</label>
							<select id="${data.name}" name="${data.name}" <#if data.mandatory == "true">required</#if> >
								<option value='0'>Seleccione...</option>
							<#list data.getListToCombo(data.create.properties['listName']?string) as node>
								<option value='${node.id}'>${node.name}</option>
							</#list>
							</select>
						</div>
					<#else>	
						<div class="col-md-6 column" name="regularProperty">
							<#if data.mandatory == "true">
							    <label for="${data.name}"><img src="${url.context}/images/icons/required_field.gif" style="padding-right:5px;"/>${data.title}</label>
							  	<input type="text" <#if data.dataType=="date">class="datePickers"</#if><#if data.dataType=="int">class="numeric"</#if> id="${data.name}" name="${data.name}" required></select>
							<#else>
							    <label for="${data.name}">${data.title}</label>
							  	<input type="text" class=<#if data.dataType=="date">"datePickers"<#elseif data.dataType=="int">"numeric"<#else>"txt"</#if> id="${data.name}" name="${data.name}" ></select>
						    </#if>
					  	</div>
			  		</#if>
				</#if>
				<#assign varAspect = data.aspect>
				</#if>
			</#list>
			</div>
		</div>
	</div>
  </#if>
  
<#if state == "true">
	<div id="specialMetadata">
		<div id="form2" class="col-md-12 column">
			
		</div>
	</div>
</#if>