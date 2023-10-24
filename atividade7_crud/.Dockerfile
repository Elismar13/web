FROM tomcat:8.0
  
MAINTAINER your_name
  
# COPY path-to-your-application-war path-to-webapps-in-docker-tomcat

COPY atividade7_crud.war /usr/local/tomcat/webapps/
