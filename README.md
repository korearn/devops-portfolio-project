# Proyecto DevOps: Pipeline CI/CD y Despliegue en Kubernetes

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

Este proyecto demuestra un ciclo de vida de desarrollo de software completo, desde la codificación de una aplicación web de 3 capas hasta su despliegue automatizado en un clúster de Kubernetes, implementando prácticas de CI/CD.

## 🏛️ Diagrama de Arquitectura

*(**Acción requerida:** Crea un diagrama en [draw.io](https://app.diagrams.net/) o una herramienta similar y sube la imagen a tu repositorio. Luego, reemplaza el siguiente enlace para que se muestre aquí.)*

![Arquitectura CI/CD y Kubernetes](./diagrama-arquitectura.png)

## 🚀 Stack Tecnológico

* **Lenguaje de Backend:** Python con el framework Flask.
* **Contenerización:** Docker y Docker Compose para el entorno de desarrollo local.
* **Orquestación:** Kubernetes para gestionar el despliegue y la red de la aplicación.
* **CI/CD:** GitHub Actions para la integración, prueba y entrega continua.
* **Registro de Contenedores:** Docker Hub para almacenar las imágenes de la aplicación.
* **Ingress Controller:** NGINX para el enrutamiento de tráfico hacia la aplicación.

## ✨ Características Principales

* **Pipeline de CI/CD Automatizado:** Cada `push` a la rama `main` dispara un workflow que:
    1.  **Prueba (CI):** Construye la aplicación con Docker Compose y ejecuta pruebas de humo para validar que los servicios responden.
    2.  **Publica (CD):** Si las pruebas pasan, construye y publica las imágenes de frontend y backend en Docker Hub.
* **Despliegue Declarativo en Kubernetes:** Manifiestos YAML definen el estado deseado de la aplicación (Deployments, Services, Ingress).
* **Enrutamiento Avanzado:** Un Ingress NGINX gestiona el tráfico externo, dirigiendo las peticiones a `/api` al backend y todo lo demás al frontend, simulando un entorno de producción real.
* **Infraestructura Reproducible:** El uso de Docker y Kubernetes asegura que la aplicación se comporte de la misma manera en cualquier entorno.

## 🔧 Cómo Ejecutar el Proyecto Localmente

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/devops-portfolio-project.git](https://github.com/korearn/devops-portfolio-project.git)
    cd devops-portfolio-project
    ```
2.  Asegúrate de tener Docker Desktop instalado y corriendo.
3.  Levanta la aplicación con Docker Compose:
    ```bash
    docker-compose up --build
    ```
4.  Accede al frontend en `http://localhost:8080`.

##  kubernetes/README.md
Este directorio contiene todos los manifiestos de Kubernetes necesarios para desplegar la aplicación.

Para desplegar en un clúster local con un Ingress Controller NGINX ya instalado, usa el siguiente comando:
```bash
# Reemplaza 'tu-usuario-dockerhub' en los archivos de deployment primero
kubectl apply -f kubernetes/
```
La aplicación estará disponible en `http://localhost`.

---
*Creado por Leonardo G. León Hernández*
* [LinkedIn](https://linkedin.com/in/leonardoleonh/)
* [GitHub](https://github.com/korearn