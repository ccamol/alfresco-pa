<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var mallName = args.name;
var sapCode = args.sapCode;
var financeCompany = args.financeCompany;
var subProjectManager = args.subProjectManager;

var idCountry = args.idCountry;
var idMallType = args.idMallType;


mallName="Super Mall";
sapCode="Codigo super SAP";
financeCompany = "Compa�ia Financiera 1";
subProjectManager ="Felipe Nino";
idCountry = "2";
idMallType = "1";

//logger.log("*********************************************************");
//logger.log("pais");
//logger.log("*********************************************************");
var country = CountrySrv.getById(idCountry);
//logger.log("*********************************************************");
//logger.log("tipo mall");
//logger.log("*********************************************************");
var mallType = MallTypeSrv.getById(idMallType);

//logger.log("*********************************************************");
//logger.log("country = " + country);
//logger.log("*********************************************************");

var mall = new Mall();
mall.name=mallName;
mall.idMallSap=sapCode;
mall.financeCompany=financeCompany;
mall.subProjectManager=subProjectManager;
//logger.log("*********************************************************");
//logger.log("pais2");
//logger.log("*********************************************************");
mall.country = country;
//logger.log("*********************************************************");
//logger.log("tipo mall2");
//logger.log("*********************************************************");
mall.mallType= mallType;

MallSrv.add(mall);