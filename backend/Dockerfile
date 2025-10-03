# ---- Etapa 1: Definir la imagen base ----
# Usamos una imagen oficial de Python. La etiqueta '3.9-slim' es una versión
# ligera, ideal para producción porque ocupa menos espacio.
FROM python:3.9-slim

# ---- Etapa 2: Configurar el entorno de trabajo ----
# Establece el directorio de trabajo dentro del contenedor.
# Todos los comandos siguientes se ejecutarán desde esta ruta.
WORKDIR /app

# ---- Etapa 3: Instalar dependencias ----
# Copia solo el archivo de requerimientos primero. Esto aprovecha el caché de Docker.
# Si 'requirements.txt' no cambia, Docker no volverá a instalar las dependencias
# en futuras construcciones, haciéndolas mucho más rápidas.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ---- Etapa 4: Copiar el código de la aplicación ----
# Copia el resto del código de la aplicación (app.py) al directorio de trabajo.
COPY . .

# ---- Etapa 5: Exponer el puerto y definir el comando de inicio ----
# Informa a Docker que el contenedor escuchará en el puerto 5000.
# Es una buena práctica de documentación.
EXPOSE 5000

# El comando que se ejecutará cuando el contenedor se inicie.
# Es el equivalente a correr 'python app.py' en la terminal.
CMD ["python", "app.py"]