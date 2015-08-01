<div id="parametersContainer">
	<div class="row clearfix">
		<div class="col-md-12 column">
			<div class="subtitle-modal">Habilitar Participantes</div>
			<#if resultSet.participant = "1">
			<div class="row clearfix">
				<input type="radio" id="categoryType" name="categoryType" value="0" class="previewRadio left"/><label>Deshabilitar postulantes (La licitaci&oacute;n solo podr&aacute; ser vista por usuarios internos)</label>
			</div>	
			<div class="row clearfix">
				<input type="radio" id="categoryType" name="categoryType" value="1" checked="checked left" class="previewRadio left"/><label>Habilitar postulantes</label>
			</div>	
			<#else>
			<div class="row clearfix">
				<input type="radio" id="categoryType" name="categoryType" value="0" checked="checked" class="previewRadio left"/><label>Deshabilitar postulantes (La licitaci&oacute;n s&oacute;lo podr&aacute; ser vista por usuarios internos)</label>
			</div>
			<div class="row clearfix">	
				<input type="radio" id="categoryType" name="categoryType" value="1" class="previewRadio left"/><label>Habilitar postulantes</label>
			</div>	
			</#if>	
		</div>
	</div>	
	<div class="row clearfix">				
			<div id="categoria">
				<div class="col-md-12 column">
					<div class="subtitle-modal">Categor&iacute;as</div>
				</div>				
				<div class="col-md-6 column">
					<label>Nombre:</label>
					<input type="text" id="name"/>								
				</div>
				<div class="col-md-6 column">
					<label>Descripci&oacute;n:</label>
					<textarea id="description"></textarea>			
				</div>
				<div style="text-align:center;">
					<input class="btn btn-success"  type="submit" value="Agregar Categor&iacute;a" onclick="addCategory();" />
				</div>			
			</div>	
	</div>	
	<div class="row clearfix">	
		<div class="col-md-6 column">
			<div id="getCategories" class="scroll-y table-with-border"></div>			
		</div>		
		<div class="col-md-6 column">
			<div id="TenderCategories" class="scroll-y table-with-border"></div>
		</div>
	</div> 
</div>