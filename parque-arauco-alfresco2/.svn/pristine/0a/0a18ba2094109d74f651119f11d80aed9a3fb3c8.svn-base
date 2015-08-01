package com.intellego.parquearauco.security.aop;

import java.lang.annotation.Annotation;

import org.alfresco.service.ServiceRegistry;
import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;

import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.annotations.FuncionalityID;
import com.intellego.parquearauco.security.services.SecurityService;

public class SecurityInterceptor implements MethodInterceptor {

	private ServiceRegistry serviceRegistry;

	public Object invoke(MethodInvocation method) throws Throwable {
		Response response = new Response();
		response.setResult(-1);
		response.setMessage("El usuario no tiene permiso para ejecutar esta acci�n o se ha producido un error durante la verificaci�n de los permisos");

		try{
			int functionalityId = method.getMethod().getAnnotation(FuncionalityID.class).id();
			boolean checkSecurity = method.getMethod().getAnnotation(FuncionalityID.class).checkSecurity();

			if(checkSecurity){
				SecurityService securityService = new SecurityService();
				securityService.setServiceRegistry(serviceRegistry);

				int nodeId = 1;
				int nodeType = 1;
				int fieldNumber=-1;
				int parameterNumberId=-1;
				int parameterNumberType=-1;
				for(Annotation[] annotations : method.getMethod().getParameterAnnotations()){
					fieldNumber++;
					for(Annotation each : annotations){
						if(each.annotationType().getName().contains("nodeId")){
							parameterNumberId=fieldNumber;
						}
						if(each.annotationType().getName().contains("nodeType")){
							parameterNumberType=fieldNumber;
						}
						break;
					}
				}

				if(parameterNumberId>-1 && parameterNumberType>-1){
					nodeId = (int) method.getArguments()[parameterNumberId];
					nodeType = (int) method.getArguments()[parameterNumberType];
					if(securityService.checkSecurity(nodeId, nodeType, functionalityId)){
						response = (Response) method.proceed();
					}
				}
			}else{
				response = (Response) method.proceed();
			}
		}catch(Exception e){
			e.printStackTrace();
		}

		return response;
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}
}
