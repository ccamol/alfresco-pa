	    <div class="dashlet">
		<div id="dashletWolrd" class="title"></div>
		<div class="col-md-12 column bar">
		
		<div class="col-md-6 column">		
			<p>Area:
			<select id="selectArea" onChange="folderTree();" >
				<#list areaList as area> 	
					<option value="${area.id}" selected>${area.site}</option>
				</#list>
			</select>
			</p>
		</div>
		<div class="col-md-6 column">
			<p>Rol:
			<select id="selectRol" onChange="folderTree();" >
				<#list rolList as node> 	
					<option value="${node.id}" selected>${node.name}</option>
				</#list>
			</select>
			</p>
		</div>
		</div>
		
		<div class="col-md-12 column heightDashlet">
		<div id="folderTree"></div>
		</div>
		</div>

