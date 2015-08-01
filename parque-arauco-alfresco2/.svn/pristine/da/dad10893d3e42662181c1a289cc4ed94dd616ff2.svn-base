package com.intellego.parquearauco.sap.ws.baseprocessorextension;

import java.util.Date;
import java.util.List;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;

import com.ibm.icu.util.Calendar;
import com.intellego.parquearauco.baseprocessorextension.Contracts;
import com.intellego.parquearauco.baseprocessorextension.Countrys;
import com.intellego.parquearauco.baseprocessorextension.MallTypes;
import com.intellego.parquearauco.baseprocessorextension.Malls;
import com.intellego.parquearauco.baseprocessorextension.Sucs;
import com.intellego.parquearauco.constants.Constants;
import com.intellego.parquearauco.dto.Contract;
import com.intellego.parquearauco.dto.Country;
import com.intellego.parquearauco.dto.Mall;
import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.dto.Suc;
import com.intellego.parquearauco.filters.ContractFilter;
import com.intellego.parquearauco.filters.CountryFilter;
import com.intellego.parquearauco.filters.MallFilter;
import com.intellego.parquearauco.filters.SucFilter;
import com.intellego.parquearauco.sap.ws.clients.SAPClient;
import com.intellego.parquearauco.sap.ws.clients.ZSCCOMERCIAL;
import com.intellego.parquearauco.sap.ws.clients.ZSCONTRATOS;
import com.intellego.parquearauco.sap.ws.clients.ZSSUC;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class SAPProcess  extends BaseProcessorExtension{

	private ServiceRegistry serviceRegistry;
	private SAPClient client=null;

	public Response<Boolean> vinculate(Suc virtualSUC, Suc realSUC){
		Response<Boolean> response = new Response<Boolean>();
		response.setMessage("No existen documentos que mover en el SUC");
		response.setStatus(1);
		Integer idSUC = -1;

		try{
			String query = new String("@pa\\:sucNumber:" + virtualSUC.getId());
			NodeService nodeService = this.serviceRegistry.getNodeService();
			SearchService searchService = this.serviceRegistry.getSearchService();
			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,query);
			if(resultSet.length()>0){
				for(NodeRef each : resultSet.getNodeRefs()){
					idSUC = Integer.parseInt((String) nodeService.getProperty(each, Constants.PROP_SUCNUMBER));
					if(idSUC.equals(virtualSUC.getId())){
						nodeService.setProperty(each, Constants.PROP_SUCNUMBERID, String.valueOf(realSUC.getId()));
						nodeService.setProperty(each, Constants.PROP_SUCNUMBER, String.valueOf(realSUC.getId()));
						nodeService.setProperty(each, Constants.PROP_IDSUCSAP, String.valueOf(realSUC.getSucCode()));
					}
				}
				response.setStatus(1);
				response.setMessage("Operación realizada con éxito");
				virtualSUC.setSucType(2);
				Sucs sucs = new Sucs();
				sucs.update(virtualSUC);
			}
		}catch(Exception e){
			response.setStatus(-1);
			response.setMessage("Se produjo un error al vincular documentos");
			e.printStackTrace();
		}

		return response;
	}


	public void init(){
		this.client = new SAPClient();
		client.execute();
	}

	public void init(String user, String password){
		this.client = new SAPClient();
		client.execute(user, password);
	}

	public boolean processContracts(){
		boolean response = true;

		if(this.client==null) this.init();

		Sucs sucs = new Sucs();
		Malls malls = new Malls();
		
		SucFilter sucFilter = new SucFilter();
		MallFilter mallFilter = new MallFilter();
		Response<List<Suc>> sucResponse = new Response<List<Suc>>();
		Response<List<Mall>> mallResponse = new Response<List<Mall>>();
		Contracts contracts = new Contracts();
		ContractFilter contractFilter = new ContractFilter();
		Response<List<Contract>> contractResponse = new Response<List<Contract>>();


		for(ZSCONTRATOS each : client.getContractList()){
			sucFilter = new SucFilter();
			
			sucFilter.getSucCode().exact(each.getSMENR(), TextFilter.EQUALS_TO);
			mallFilter.getIdMallSap().exact(each.getBUKRS() + each.getBENOCN(), TextFilter.EQUALS_TO);
			mallResponse = malls.getListByFilter(mallFilter);
			if(mallResponse.getStatus() >-1 && mallResponse.getResult().size()>0){
				sucFilter.getMall().exact(mallResponse.getResult().get(0).getId(), TextFilter.EQUALS_TO);
			}
			sucResponse = sucs.getListByFilter(sucFilter);
			if(sucResponse.getStatus()>-1 && sucResponse.getResult().size()>0){
				contractFilter = new ContractFilter();
				contractFilter.getSapCode().exact(each.getRECNNR(), TextFilter.EQUALS_TO);
				contractResponse = contracts.getListByFilter(contractFilter);
				if(contractResponse.getStatus()>-1 && contractResponse.getResult().size()>0){
					this.updateContract(each, contractResponse.getResult().get(0), sucResponse.getResult().get(0));
				}else{
					this.createContract(each, sucResponse.getResult().get(0));
				}
			}
		}

		return response;
	}

	public boolean processSUCS(){
		boolean response = true;

		if(this.client==null) this.init();

		Malls malls = new Malls();
		MallFilter mallFilter = new MallFilter();
		Response<List<Mall>> mallResponse = new Response<List<Mall>>();
		Sucs sucs = new Sucs();
		SucFilter sucFilter = new SucFilter();
		Response<List<Suc>> sucResponse = new Response<List<Suc>>();


		for(ZSSUC each : client.getSucList()){
			mallFilter = new MallFilter();
			mallFilter.getIdMallSap().exact(each.getBUKRS() + each.getSWENR(), TextFilter.EQUALS_TO);
			mallResponse = malls.getListByFilter(mallFilter);
			if(mallResponse.getStatus()>-1 && mallResponse.getResult().size()>0){
				sucFilter = new SucFilter();
				sucFilter.getMall().exact(mallResponse.getResult().get(0).getId(), NumericFilter.EQUALS_TO);
				sucFilter.getSucCode().exact(each.getSMENR(), TextFilter.EQUALS_TO);
				sucResponse = sucs.getListByFilter(sucFilter);
				if(sucResponse.getStatus()>-1 && sucResponse.getResult().size()>0){
					this.updateSUC(each, sucResponse.getResult().get(0), mallResponse.getResult().get(0));
				}else{
					this.createSUC(each, mallResponse.getResult().get(0));
				}
			}
		}

		return response;
	}

	public boolean sucHistory(){
		boolean response = true;

		if(this.client==null) this.init();

		Malls malls = new Malls();
		MallFilter mallFilter = new MallFilter();
		Response<List<Mall>> mallResponse = new Response<List<Mall>>();
		Sucs sucs = new Sucs();
		SucFilter sucFilter = new SucFilter();
		Response<List<Suc>> sucResponse = new Response<List<Suc>>();


		for(ZSSUC each : client.getSucList()){
			mallFilter = new MallFilter();
			mallFilter.getIdMallSap().exact(each.getBUKRS() + each.getSWENR(), TextFilter.EQUALS_TO);
			mallResponse = malls.getListByFilter(mallFilter);
			if(mallResponse.getStatus()>-1 && mallResponse.getResult().size()>0){
				sucFilter = new SucFilter();
				sucFilter.getMall().exact(mallResponse.getResult().get(0).getId(), NumericFilter.EQUALS_TO);
				sucFilter.getSucCode().exact(each.getSMENR(), TextFilter.EQUALS_TO);
				sucResponse = sucs.getListByFilter(sucFilter);
				if(sucResponse.getStatus()>-1 && sucResponse.getResult().size()>0){
					this.updateSUC(each, sucResponse.getResult().get(0), mallResponse.getResult().get(0));
				}else{
					this.createSUC(each, mallResponse.getResult().get(0));
				}
			}
		}

		return response;
	}

	public boolean processMalls(){
		boolean response = true;

		if(this.client==null) this.init();

		Malls malls = new Malls();
		MallFilter mallFilter = new MallFilter();
		Response<List<Mall>> mallResponse = new Response<List<Mall>>();

		for(ZSCCOMERCIAL each : client.getComercialList()){
			mallFilter = new MallFilter();
			mallFilter.getIdMallSap().exact(each.getBUKRS() + each.getSWENR(), TextFilter.EQUALS_TO);
			mallResponse = malls.getListByFilter(mallFilter);
			if(mallResponse.getStatus()>-1 && mallResponse.getResult().size()>0){
				this.updateMall(each, mallResponse.getResult().get(0));
			}else{
				this.createMall(each);
			}
		}

		return response;
	}

	private boolean updateSUC(ZSSUC sapRecord, Suc sucRecord, Mall mallRecord){
		boolean response = false;

		Sucs sucs = new Sucs();

		//sucRecord.setMall(mallRecord);
		sucRecord.setSucCode(sapRecord.getSMENR());
		
		String endDate = sapRecord.getVALIDTO();
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(parseDate(endDate));
		
		if(calendar.getTime().after(new Date())){
			if(sapRecord.getMEAS().equals("MP01")){
				sucRecord.setStoreM2(sapRecord.getMEASVALUE().trim());
			}else if(sapRecord.getMEAS().equals("MP02")){
				sucRecord.setEscaparateM(sapRecord.getMEASVALUE().trim());
			}else if(sapRecord.getMEAS().equals("MP04")){
				sucRecord.setTerraseM2(sapRecord.getMEASVALUE().trim());
			}
		}

		Response<Suc> responseAdd = sucs.update(sucRecord);
		if(responseAdd.getStatus()>-1) response = true;

		return response;
	}

	private boolean updateContract(ZSCONTRATOS sapRecord, Contract contractRecord, Suc sucRecord){
		boolean response = false;

		Contracts contracts = new Contracts();

		contractRecord.setSucEntity(sucRecord);
		contractRecord.setSapCode(sapRecord.getRECNNR());
		contractRecord.setName(sapRecord.getRECNTXT());
		contractRecord.setStartDate(this.parseDate(sapRecord.getRECNBEG()));
		contractRecord.setFinishDate(this.parseDate(sapRecord.getRECNENDABS()));

		Response<Contract> responseAdd = contracts.update(contractRecord);
		if(responseAdd.getStatus()>-1) response = true;

		return response;
	}

	private boolean createContract(ZSCONTRATOS sapRecord, Suc sucRecord){
		boolean response = false;

		Contracts contracts = new Contracts();

		Contract contractRecord = new Contract();

		contractRecord.setSucEntity(sucRecord);
		contractRecord.setSapCode(sapRecord.getRECNNR());
		contractRecord.setName(sapRecord.getRECNTXT());
		contractRecord.setStartDate(this.parseDate(sapRecord.getRECNBEG()));
		contractRecord.setFinishDate(this.parseDate(sapRecord.getRECNENDABS()));

		Response<Contract> responseAdd = contracts.add(contractRecord);
		if(responseAdd.getStatus()>-1) response = true;


		return response;
	}

	private boolean createSUC(ZSSUC sapRecord, Mall mallRecord){
		boolean response = false;

		Sucs sucs = new Sucs();
		Suc suc = new Suc();

		suc.setDescription(sapRecord.getSMENR());
		suc.setSucCode(sapRecord.getSMENR());
		suc.setMall(mallRecord);
		suc.setSucType(0);
		suc.setStatus(1);
		
		
//		MP00: Mt2 totales SUC + Terrazas (No corresponde a ningún campo, no se utilizará) OK
//		MP01: Mt2 SUC (Corresponde a M2 Local)  Si corresponde a m2 de local (local = Suc)/ o a metros cuadrados de Bodega
//		MP02: Mt lineales frente de local (M Vitrina????) Si corresponde a mt de vitrina
//		MP03: Mt2 Terraza Cubierta
//		MP04: Mt2 Terraza Descubierta
//		MP05: Superficie de contribución (No está en los datos del SUC)  A las grandes tiendas se les cobra un porcentaje de las contribuciones que paga el  Mall por la superficie que se les arrienda, no todos los suc's tienen esto, pero algunos sí.
		String endDate = sapRecord.getVALIDTO();
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(parseDate(endDate));
		
		
		if(calendar.getTime().after(new Date())){
			if(sapRecord.getMEAS().equals("MP01")){
				suc.setStoreM2(sapRecord.getMEASVALUE().trim());
			}else if(sapRecord.getMEAS().equals("MP02")){
				suc.setEscaparateM(sapRecord.getMEASVALUE().trim());
			}else if(sapRecord.getMEAS().equals("MP04")){
				suc.setTerraseM2(sapRecord.getMEASVALUE().trim());
			}
		}

		Response<Suc> responseAdd = sucs.add(suc);
		if(responseAdd.getStatus()>-1) response = true;

		return response;
	}

	private boolean updateMall(ZSCCOMERCIAL sapRecord, Mall mallRecord){
		boolean response = false;

		Malls malls = new Malls();

		mallRecord.setCountry(this.getCountry(sapRecord.getLAND1()));
		mallRecord.setIdMallSap(sapRecord.getBUKRS() + sapRecord.getSWENR());
		mallRecord.setName(sapRecord.getXWETEXT());

		Response<Mall> responseAdd = malls.update(mallRecord);
		if(responseAdd.getStatus()>-1) response = true;

		return response;
	}

	private boolean createMall(ZSCCOMERCIAL sapRecord){
		boolean response = false;

		Malls malls = new Malls();
		Mall mall = new Mall();

		mall.setCountry(this.getCountry(sapRecord.getLAND1()));
		//mall.setFinanceCompany(new String());
		mall.setIdMallSap(sapRecord.getBUKRS() + sapRecord.getSWENR());
		mall.setName(sapRecord.getXWETEXT());
		mall.setMallType(new MallTypes().getById(1).getResult());

		NodeRef image = this.getDefaultImage();
		if(image!=null){
			NodeService nodeService = this.serviceRegistry.getNodeService();
			mall.setImageUuid(image.getId());
			mall.setNameImage((String) nodeService.getProperty(image, ContentModel.PROP_NAME));
		}

		Response<Mall> responseAdd = malls.add(mall);
		if(responseAdd.getStatus()>-1) response = true;

		return response;
	}


	private Country getCountry(String countryCode){
		Country response = null;

		Countrys countrys = new Countrys();
		CountryFilter countryFilter = new CountryFilter();
		countryFilter.getCountryCode().exact(countryCode, TextFilter.EQUALS_TO);

		Response<List<Country>> responseCountry = countrys.getListByFilter(countryFilter);
		if(responseCountry.getStatus()>-1 && responseCountry.getResult().size()>0){
			response = responseCountry.getResult().get(0);
		}

		return response;
	}

	private NodeRef getDefaultImage(){

		NodeRef image = null;

		SearchService searchService = this.serviceRegistry.getSearchService();
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"@cm\\:title:defaultimage");
		if(resultSet.length()>0){
			image = resultSet.getNodeRef(0);
		}

		return image;
	}

	private Date parseDate(String date){

		Date response = null;

		String[] textDate = date.split("-");

		Calendar calendar = Calendar.getInstance();
		calendar.set(Integer.valueOf(textDate[0]), Integer.valueOf(textDate[1]) + 1, Integer.valueOf(textDate[2]));

		response = calendar.getTime();
		return response;

	}


	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

}
