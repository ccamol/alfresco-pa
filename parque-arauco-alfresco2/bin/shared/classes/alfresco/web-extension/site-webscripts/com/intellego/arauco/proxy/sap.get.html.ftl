<#ftl encoding="UTF-8">
<html>
<head>
<script type="text/javascript" src="/share/arauco/js/jquery-1.10.2.js" charset="utf-8"></script>

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
data : {
username : 'admin',
password : 'password'
},
success: function(data) {
redirect();
}
});

}

function redirect(){
$.ajax({
url:'/share/page/dashlets/entryPointSAP.json?sapid=${sapid}<#if sucSAP?exists>&sucSAP=${sucSAP}</#if>',
type: "get",
dataType: "json", 
async: false,
success: function(data) {
window.location = "/share/page/documentTree?nodeType=" + data.nodeType + "&id=" +  data.nodeId;
}
});

}


</script>

</head>
<body>
</body>
</html>