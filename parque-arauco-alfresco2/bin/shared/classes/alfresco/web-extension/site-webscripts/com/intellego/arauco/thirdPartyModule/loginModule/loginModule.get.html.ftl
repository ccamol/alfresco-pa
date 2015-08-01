<html>
<head>
<script type="text/javascript" src="/share/arauco/js/jquery-1.10.2.js" charset="utf-8"></script>
<script type="text/javascript" src="/share/arauco/js/jquery-ui.js" charset="utf-8"></script>
<script type="text/javascript" src="${page.url.context}/arauco/js/ajaxfileupload.js" charset="utf-8"></script>

		<script>
		$(document).ready(function() {
		loginShare();
   
});

function loginShare(){
	$.ajax({
		url:'/share/page/dologin',
		type: "post",
		dataType: "html",  
		async: false,
		data  : {
			username : "",
			password : ""
		},
		success:   function(data) {
		 window.location = "/share/page/moduleAccess";
		},
		error : function(xhr, ajaxOptions, thrownError) {
			alert("Error Login "
			+ xhr.status + " " + thrownError);
			}
	});

}
		</script>
</head>

<body>
<div class="dashlet">
  <div id="dashletWolrd" class="title">Login Terceros</div>

  <div class="col-md-12 column bar">
	<div class="row clearfix">
    <div class="col-md-6 column input-group small-search">
     <h3>Login Terceros</h3>
    </div><!-- /input-group -->

	<div id="LoginUser">
	
	<input id="user"      type="text"/>
	<input id="password"   	  type="password"/>
	<input id="login"    value="Entrar"  type="submit"  onclick="loginShare();"/>
	</div>
	
	
	</div>	
	</div>
  </div>
</div>

</body>



</html>