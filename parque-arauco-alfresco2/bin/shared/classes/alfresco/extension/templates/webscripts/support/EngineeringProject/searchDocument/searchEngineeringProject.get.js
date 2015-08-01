
var search = args.search;
var type = args.type;
var from = args.from;
var to = args.to;
var country = args.country;
var shoppingCenter = args.shoppingCenter;
var query = 'TYPE:"pa:doc"';
var all = ' AND (ALL:"{$search}")';
var queryCountry = ' AND @generalData\\:id:"{$ID}"';

//query = '@photos\\:idpublicacion:'+idPublicacion+' AND - @photos\\:resized:"SI"';
	
	//pa:country';

//SE DEBE TERMINAR

