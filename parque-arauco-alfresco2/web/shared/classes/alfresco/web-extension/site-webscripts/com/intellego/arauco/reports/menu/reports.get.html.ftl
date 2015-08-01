<head>

<style type="text/css" >
	.tree {
	    min-height:20px;
	    padding:19px;
	    background-color:#fbfbfb;
	    -webkit-border-radius:4px;
	    -moz-border-radius:4px;
	    -webkit-box-shadow:inset 0 1px 1px rgba(0, 0, 0, 0.05);
	    -moz-box-shadow:inset 0 1px 1px rgba(0, 0, 0, 0.05);
	}
	.tree li {
	    list-style-type:none;
	    margin:0;
	    padding:10px 5px 0 5px;
	    position:relative
	}
	.tree li::before, .tree li::after {
	    content:'';
	    left:-20px;
	    position:absolute;
	    right:auto
	}
	.tree li::before {
	    border-left:1px solid #999;
	    bottom:50px;
	    height:100%;
	    top:0;
	    width:1px
	}
	.tree li::after {
	    border-top:1px solid #999;
	    height:20px;
	    top:25px;
	    width:25px
	}
	.tree li span {
	    -moz-border-radius:5px;
	    -webkit-border-radius:5px;
	    border:1px solid #999;
	    border-radius:5px;
	    display:inline-block;
	    padding:3px 8px;
	    text-decoration:none;
		background:#e3d9e9;
	}
	.tree li.parent_li>span {
	    cursor:pointer
	}
	.tree>ul>li::before, .tree>ul>li::after {
	    border:0
	}
	.tree li:last-child::before {
	    height:30px
	}
	.tree li.parent_li>span:hover, .tree li.parent_li>span:hover+ul li span {
	    background:#eee;
	    border:1px solid #94a0b4;
	    color:#000
	}
	
	[class^="icon-"], [class*=" icon-"] {
	    background-image: url("/alfresco/css/images/glyphicons-halflings.png");
	    background-position: 14px 14px;
	    background-repeat: no-repeat;
	    display: inline-block;
	    height: 14px;
	    line-height: 14px;
	    margin-top: 1px;
	    vertical-align: text-top;
	    width: 14px;
		background: url("/alfresco/css/images/glyphicons-halflings.png") no-repeat;
		 background-position: 14px 14px;
	}
	.tree li img{
	width:26px;
	height:26px;
	padding:2px;
	}
	.icon-folder-open {
	    background-position: -408px -120px;
	    width: 16px;
	    margin-right: 10px;
	}
	
	.icon-folder-close {
	    background-position: -384px -120px;
	    width: 16px;
	    margin-right: 10px;
	}
	.icon-chevron-right {
	    background-position: -456px -72px;
	}
</style>

<script>

function missingDocumentsReport(){
	$.ajax({
		url:'/share/page/dashlets/missingDocumentsReport',
		type: "get",
		dataType: "html", 
		async: false,  		
		success:   function(data) {
			$("#reportResults").html(data);
		}
	});
}

function versionTop15Report(){
	$.ajax({
		url:'/share/page/dashlets/versionTopReport',
		type: "get",
		dataType: "html", 
		async: false,  		
		success:   function(data) {
			$("#reportResults").html(data);
		}
	});
}

function documentsInProject(){
	$.ajax({
		url:'/share/page/dashlets/documentsInProjectReport',
		type: "get",
		dataType: "html", 
		data : {
			aclId : aclId
		},
		async: false,  		
		success:   function(data) {
			$("#reportResults").html(data);
		}
	});
}

function projectSummaryReport(){
	$.ajax({
		url:'/share/page/dashlets/projectSummaryReport',
		type: "get",
		dataType: "html", 
		async: false,  		
		success:   function(data) {
			$("#reportResults").html(data);
		}
	});
}

</script>


</head>
<body>
<div class="col-md-3 column">
<div class="dashlet">
	<div class="title">Reportes</div>
	<div class="tree">
		<ul>
			<li class="parent_li">
				<span><i class="icon-folder-open"></i>Estadísticas documentales</span> 
				<ul style="margin-left: 50px;">
					<li>
						<a onClick="versionTop15Report()">Top 15 documentos con m&aacutes versiones</a>
					</li>
					<li>
						<a <a onClick="missingDocumentsReport()">Proyectos con falta de documentos</a>
					</li>
					<li>
						<a <a onClick="projectSummaryReport()">Proyectos Mall en curso</a>
					</li>
				</ul>
			</li>
			<li class="parent_li">
				<span><i class="icon-folder-open"></i>Usabilidad</span> 
				<ul style="margin-left: 50px;">
					<li>
						<a>Reporte de usabilidad</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</div>
	
<div class="col-md-9 column">
	<div id="reportResults" style="min-height: 500px;"> 
	
</div>



</body>