<html>
<head>
<style>
input.stageButton0 {
    background-image: url(/share/img/stage/ico_cerrado.png); /* 16px x 16px */
    background-color: transparent; /* make the button transparent */
    background-repeat: no-repeat;  /* make the background image appear only once */
    background-position: 0px 0px;  /* equivalent to 'top left' */
    border: none;           /* assuming we don't want any borders */
    cursor: pointer;        /* make the cursor like hovering over an <a> element */
    height: 110px;
    width : 110px;
    vertical-align: middle; /* align the text vertically centered */
}

input.subStageButton0 {
    background-image: url(/share/img/stage/ico_cerrado.png); /* 16px x 16px */
    background-color: transparent; /* make the button transparent */
    background-repeat: no-repeat;  /* make the background image appear only once */
    background-position: 0px 0px;  /* equivalent to 'top left' */
    border: none;           /* assuming we don't want any borders */
    cursor: pointer;        /* make the cursor like hovering over an <a> element */
    height: 110px;
    width : 110px;
    vertical-align: middle; /* align the text vertically centered */
 	background-size: 30px 30px;
}
input.stageButton0:focus  + label{
	font-weight: bold !important;
	color: red;
}

input.stageButton1 {
    background-image: url(/share/img/stage/ico_activo.png); /* 16px x 16px */
    background-color: transparent; /* make the button transparent */
    background-repeat: no-repeat;  /* make the background image appear only once */
    background-position: 0px 0px;  /* equivalent to 'top left' */
    border: none;           /* assuming we don't want any borders */
    cursor: pointer;        /* make the cursor like hovering over an <a> element */
    height: 110px;
    width : 110px;
    vertical-align: middle; /* align the text vertically centered */
}

input.subStageButton1 {
    background-image: url(/share/img/stage/ico_activo.png); /* 16px x 16px */
    background-color: transparent; /* make the button transparent */
    background-repeat: no-repeat;  /* make the background image appear only once */
    background-position: 0px 0px;  /* equivalent to 'top left' */
    border: none;           /* assuming we don't want any borders */
    cursor: pointer;        /* make the cursor like hovering over an <a> element */
    height: 110px;
    width : 110px;
    vertical-align: middle; /* align the text vertically centered */
    background-size: 30px 30px;
}

input.stageButton1:focus + label{
	font-weight: bold !important;
	color: red;
}

input.stageButton2 {
    background-image: url(/share/img/stage/ico_espera.png); /* 16px x 16px */
    background-color: transparent; /* make the button transparent */
    background-repeat: no-repeat;  /* make the background image appear only once */
    background-position: 0px 0px;  /* equivalent to 'top left' */
    border: none;           /* assuming we don't want any borders */
    cursor: pointer;        /* make the cursor like hovering over an <a> element */
    height: 110px;
    width : 110px;
    vertical-align: middle; /* align the text vertically centered */
}

input.stageButton2 {
    background-image: url(/share/img/stage/ico_espera.png); /* 16px x 16px */
    background-color: transparent; /* make the button transparent */
    background-repeat: no-repeat;  /* make the background image appear only once */
    background-position: 0px 0px;  /* equivalent to 'top left' */
    border: none;           /* assuming we don't want any borders */
    cursor: pointer;        /* make the cursor like hovering over an <a> element */
    height: 110px;
    width : 110px;
    vertical-align: middle; /* align the text vertically centered */
    background-size: 30px 30px;
}

input.stageButton2:focus  + label{
	font-weight: bold !important;
	color: red;
}

</style>
 <script type="text/javascript" src="${page.url.context}/arauco/ajax/projectManagement/stage.js" charset="utf-8"></script>
</head>
 <div class="dashlet">
 <div id="dashletWolrd" class="title">Etapas</div>
 <div id="stageProject" class="column-md-12 column">
 </div>
 </div>
</html>