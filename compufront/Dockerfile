#Dockerfile para react / front
#Importa módulo componente
FROM node:alpine 

#Copia todo el contenido de origen a carpeta de Docker
WORKDIR /usr/app
COPY ./ ./

#Comando para ejecutar
RUN npm install  

#Puerto donde va a escuchar el contenedor, no tiene relación con el puerto especificado para el API
#Match con 3000 para React
EXPOSE 8080

#Comandos que se ejecutan una vez terminado el contenedor
ENTRYPOINT [ "npm", "start"]

CMD ["npm", "start"]

