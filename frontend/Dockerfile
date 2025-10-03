# ---- Etapa 1: Definir la imagen base ----
# Usamos una imagen oficial de NGINX basada en Alpine Linux.
# 'alpine' es una distribución de Linux extremadamente pequeña,
# lo que hace que nuestra imagen final sea muy ligera.
FROM nginx:1.25-alpine

# ---- Etapa 2: Copiar los archivos del sitio web ----
# Copia los archivos de nuestro frontend (index.html, style.css, script.js)
# al directorio por defecto donde NGINX sirve contenido.
COPY . /usr/share/nginx/html

# ---- Etapa 3: Exponer el puerto ----
# NGINX por defecto escucha en el puerto 80.
EXPOSE 80