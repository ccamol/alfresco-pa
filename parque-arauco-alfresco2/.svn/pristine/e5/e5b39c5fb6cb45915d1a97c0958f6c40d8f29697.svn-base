package com.intellego.parquearauco.sap.ws.clients;

import java.net.MalformedURLException;
import java.net.URL;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;

import org.apache.axis.AxisFault;

import com.intellego.parquearauco.dto.Suc;
import com.intellego.parquearauco.sap.ws.clients.holders.ZTTCCOMERCIALHolder;
import com.intellego.parquearauco.sap.ws.clients.holders.ZTTCONTRATOSHolder;
import com.intellego.parquearauco.sap.ws.clients.holders.ZTTSUCHolder;

public class SAPClient {

	private List<ZSCCOMERCIAL> comercialList;
	private List<ZSCONTRATOS> contractList;
	private List<ZSSUC> sucList;
	
	public void execute(Suc sucRecord, String user, String password){
		try {
			ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator wsSAP = new ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator();
			ZBINDING_INTEGRA_ALFRESCOStub ws = new ZBINDING_INTEGRA_ALFRESCOStub(new URL(wsSAP.getZBINDING_INTEGRA_ALFRESCOAddress()), wsSAP);


			ZTTCCOMERCIALHolder comercial = initializeComercial();
			ZTTCONTRATOSHolder contracts = initializeContratos();
			ZTTSUCHolder suc = initializeSUC();

			ws.setUsername(user);
			ws.setPassword(password);
			ws.ZRFC_INTEGRA_ALFRESCO(sucRecord.getMall().getIdMallSap().substring(0, 4), "AA", "", sucRecord.getMall().getIdMallSap().substring(4, 7), comercial, contracts, suc);

			ZSCCOMERCIAL comercialArray[] = comercial.value;
			comercialList = new ArrayList<ZSCCOMERCIAL>();
			for(int i=0; i<comercialArray.length;i++){
				comercialList.add(comercialArray[i]);
			}

			ZSCONTRATOS contratosArray[] = contracts.value;
			contractList = new ArrayList<ZSCONTRATOS>();
			for(int i=0; i<contratosArray.length;i++){
				contractList.add(contratosArray[i]);
			}

			ZSSUC sucArray[] = suc.value;
			sucList = new ArrayList<ZSSUC>();
			for(int i=0; i<sucArray.length;i++){
				sucList.add(sucArray[i]);
			}

		
		} catch (AxisFault e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (RemoteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	
	public void execute(Suc sucRecord){
		this.execute(sucRecord, "ABAP_INTELEG", "inicio14");
	}
	
	public void execute(String user, String password){
		try {
			ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator wsSAP = new ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator();
			ZBINDING_INTEGRA_ALFRESCOStub ws = new ZBINDING_INTEGRA_ALFRESCOStub(new URL(wsSAP.getZBINDING_INTEGRA_ALFRESCOAddress()), wsSAP);


			ZTTCCOMERCIALHolder comercial = initializeComercial();
			ZTTCONTRATOSHolder contracts = initializeContratos();
			ZTTSUCHolder suc = initializeSUC();

			ws.setUsername(user);
			ws.setPassword(password);
			ws.ZRFC_INTEGRA_ALFRESCO("", "", "", "", comercial, contracts, suc);

			ZSCCOMERCIAL comercialArray[] = comercial.value;
			comercialList = new ArrayList<ZSCCOMERCIAL>();
			for(int i=0; i<comercialArray.length;i++){
				comercialList.add(comercialArray[i]);
			}

			ZSCONTRATOS contratosArray[] = contracts.value;
			contractList = new ArrayList<ZSCONTRATOS>();
			for(int i=0; i<contratosArray.length;i++){
				contractList.add(contratosArray[i]);
			}

			ZSSUC sucArray[] = suc.value;
			sucList = new ArrayList<ZSSUC>();
			for(int i=0; i<sucArray.length;i++){
				sucList.add(sucArray[i]);
			}

		
		} catch (AxisFault e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (RemoteException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}

	
	public void execute(){
		this.execute("ABAP_INTELEG", "inicio14");
	}
	
	
	public static ZTTCCOMERCIALHolder initializeComercial(){
		ZTTCCOMERCIALHolder item = new ZTTCCOMERCIALHolder();
		ZSCCOMERCIAL array[] = new ZSCCOMERCIAL[1];
		array[0] = new ZSCCOMERCIAL();
		array[0].setBUKRS("");
		array[0].setCAMPO01("");
		array[0].setCAMPO02("");
		array[0].setCAMPO03("");
		array[0].setCAMPO04("");
		array[0].setCAMPO05("");
		array[0].setCAMPO06("");
		array[0].setCAMPO07("");
		array[0].setCAMPO08("");
		array[0].setCAMPO09("");
		array[0].setCAMPO10("");
		array[0].setLAND1("");
		array[0].setORT01("");
		array[0].setSWENR("");
		array[0].setXWETEXT("");
		item.value = array;
		return item;
	}

	public static ZTTCONTRATOSHolder initializeContratos(){
		ZTTCONTRATOSHolder item = new ZTTCONTRATOSHolder();
		ZSCONTRATOS array[] = new ZSCONTRATOS[1];
		array[0] = new ZSCONTRATOS();
		array[0].setBUKRS("");
		array[0].setBENOCN("");
		array[0].setRECNBEG("");
		array[0].setRECNENDABS("");
		array[0].setRECNNOTPER("");
		array[0].setRECNNR("");
		array[0].setRECNTXT("");
		array[0].setSMENR("");
		array[0].setVALIDFROM("");
		array[0].setCAMPO01("");
		array[0].setCAMPO02("");
		array[0].setCAMPO03("");
		array[0].setCAMPO04("");
		array[0].setCAMPO05("");
		array[0].setCAMPO06("");
		array[0].setCAMPO07("");
		array[0].setCAMPO08("");
		array[0].setCAMPO09("");
		array[0].setCAMPO10("");
		item.value = array;
		return item;
	}

	public static ZTTSUCHolder initializeSUC(){
		ZTTSUCHolder item = new ZTTSUCHolder();
		ZSSUC array[] = new ZSSUC[1];
		array[0] = new ZSSUC();
		array[0].setBUKRS("");
		array[0].setMEAS("");
		array[0].setMEASVALUE("");
		array[0].setSMENR("");
		array[0].setSWENR("");
		array[0].setVALIDFROM("");
		array[0].setVALIDTO("");
		array[0].setCAMPO01("");
		array[0].setCAMPO02("");
		array[0].setCAMPO03("");
		array[0].setCAMPO04("");
		array[0].setCAMPO05("");
		array[0].setCAMPO06("");
		array[0].setCAMPO07("");
		array[0].setCAMPO08("");
		array[0].setCAMPO09("");
		array[0].setCAMPO10("");
		item.value = array;
		return item;
	}


	public List<ZSCCOMERCIAL> getComercialList() {
		return comercialList;
	}


	public void setComercialList(List<ZSCCOMERCIAL> comercialList) {
		this.comercialList = comercialList;
	}


	public List<ZSCONTRATOS> getContractList() {
		return contractList;
	}


	public void setContractList(List<ZSCONTRATOS> contractList) {
		this.contractList = contractList;
	}


	public List<ZSSUC> getSucList() {
		return sucList;
	}


	public void setSucList(List<ZSSUC> sucList) {
		this.sucList = sucList;
	}

}
