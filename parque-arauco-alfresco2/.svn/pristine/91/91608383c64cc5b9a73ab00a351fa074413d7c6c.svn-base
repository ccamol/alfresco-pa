/**
 * ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.intellego.parquearauco.sap.ws.clients;

public class ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator extends org.apache.axis.client.Service implements ZSERVICE_INTEGRA_ALFRESCO_Service {

    public ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator() {
    }


    public ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public ZSERVICE_INTEGRA_ALFRESCO_ServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for ZBINDING_INTEGRA_ALFRESCO
    private java.lang.String ZBINDING_INTEGRA_ALFRESCO_address = "http://qsiscso-pa1.parquearauco.com:8000/sap/bc/srt/rfc/sap/zservice_integra_alfresco/400/zservice_integra_alfresco/zbinding_integra_alfresco";
    public java.lang.String getZBINDING_INTEGRA_ALFRESCOAddress() {
        return ZBINDING_INTEGRA_ALFRESCO_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String ZBINDING_INTEGRA_ALFRESCOWSDDServiceName = "ZBINDING_INTEGRA_ALFRESCO";

    public java.lang.String getZBINDING_INTEGRA_ALFRESCOWSDDServiceName() {
        return ZBINDING_INTEGRA_ALFRESCOWSDDServiceName;
    }

    public void setZBINDING_INTEGRA_ALFRESCOWSDDServiceName(java.lang.String name) {
        ZBINDING_INTEGRA_ALFRESCOWSDDServiceName = name;
    }

    public ZSERVICE_INTEGRA_ALFRESCO_PortType getZBINDING_INTEGRA_ALFRESCO() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(ZBINDING_INTEGRA_ALFRESCO_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getZBINDING_INTEGRA_ALFRESCO(endpoint);
    }

    public ZSERVICE_INTEGRA_ALFRESCO_PortType getZBINDING_INTEGRA_ALFRESCO(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            ZBINDING_INTEGRA_ALFRESCOStub _stub = new ZBINDING_INTEGRA_ALFRESCOStub(portAddress, this);
            _stub.setPortName(getZBINDING_INTEGRA_ALFRESCOWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setZBINDING_INTEGRA_ALFRESCOEndpointAddress(java.lang.String address) {
        ZBINDING_INTEGRA_ALFRESCO_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (ZSERVICE_INTEGRA_ALFRESCO_PortType.class.isAssignableFrom(serviceEndpointInterface)) {
                ZBINDING_INTEGRA_ALFRESCOStub _stub = new ZBINDING_INTEGRA_ALFRESCOStub(new java.net.URL(ZBINDING_INTEGRA_ALFRESCO_address), this);
                _stub.setPortName(getZBINDING_INTEGRA_ALFRESCOWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("ZBINDING_INTEGRA_ALFRESCO".equals(inputPortName)) {
            return getZBINDING_INTEGRA_ALFRESCO();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("urn:sap-com:document:sap:rfc:functions", "ZSERVICE_INTEGRA_ALFRESCO");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("urn:sap-com:document:sap:rfc:functions", "ZBINDING_INTEGRA_ALFRESCO"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("ZBINDING_INTEGRA_ALFRESCO".equals(portName)) {
            setZBINDING_INTEGRA_ALFRESCOEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
