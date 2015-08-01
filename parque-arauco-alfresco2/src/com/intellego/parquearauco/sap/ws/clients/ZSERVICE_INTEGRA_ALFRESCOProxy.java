package com.intellego.parquearauco.sap.ws.clients;

import com.intellego.parquearauco.sap.ws.clients.holders.ZTTCCOMERCIALHolder;
import com.intellego.parquearauco.sap.ws.clients.holders.ZTTCONTRATOSHolder;
import com.intellego.parquearauco.sap.ws.clients.holders.ZTTSUCHolder;

public class ZSERVICE_INTEGRA_ALFRESCOProxy implements ZSERVICE_INTEGRA_ALFRESCO_PortType {
  private String _endpoint = null;
  private ZSERVICE_INTEGRA_ALFRESCO_PortType zSERVICE_INTEGRA_ALFRESCO_PortType = null;
  
  public ZSERVICE_INTEGRA_ALFRESCOProxy() {
    _initZSERVICE_INTEGRA_ALFRESCOProxy();
  }
  
  public ZSERVICE_INTEGRA_ALFRESCOProxy(String endpoint) {
    _endpoint = endpoint;
    _initZSERVICE_INTEGRA_ALFRESCOProxy();
  }
  
  private void _initZSERVICE_INTEGRA_ALFRESCOProxy() {
    try {
      zSERVICE_INTEGRA_ALFRESCO_PortType = (new ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator()).getZBINDING_INTEGRA_ALFRESCO();
      if (zSERVICE_INTEGRA_ALFRESCO_PortType != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)zSERVICE_INTEGRA_ALFRESCO_PortType)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)zSERVICE_INTEGRA_ALFRESCO_PortType)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (zSERVICE_INTEGRA_ALFRESCO_PortType != null)
      ((javax.xml.rpc.Stub)zSERVICE_INTEGRA_ALFRESCO_PortType)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public ZSERVICE_INTEGRA_ALFRESCO_PortType getZSERVICE_INTEGRA_ALFRESCO_PortType() {
    if (zSERVICE_INTEGRA_ALFRESCO_PortType == null)
      _initZSERVICE_INTEGRA_ALFRESCOProxy();
    return zSERVICE_INTEGRA_ALFRESCO_PortType;
  }
  
  public void ZRFC_INTEGRA_ALFRESCO(java.lang.String i_BUKRS, java.lang.String i_RECNNR, java.lang.String i_SMENR, java.lang.String i_SWENR, ZTTCCOMERCIALHolder t_CCOMERCIAL, ZTTCONTRATOSHolder t_CONTRATOS, ZTTSUCHolder t_SUC) throws java.rmi.RemoteException{
    if (zSERVICE_INTEGRA_ALFRESCO_PortType == null)
      _initZSERVICE_INTEGRA_ALFRESCOProxy();
    zSERVICE_INTEGRA_ALFRESCO_PortType.ZRFC_INTEGRA_ALFRESCO(i_BUKRS, i_RECNNR, i_SMENR, i_SWENR, t_CCOMERCIAL, t_CONTRATOS, t_SUC);
  }
  
  
}