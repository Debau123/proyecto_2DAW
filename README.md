# Restaurante - Verificación de Correo y Autologin

Este proyecto es una aplicación de restaurante creada con **Next.js** y **MongoDB Atlas**, con soporte para verificación de correo electrónico y autologin tras la verificación. Además, incluye un sistema de login y logout seguro basado en cookies y JWT.

## Características

- **Verificación de correo electrónico**: El usuario recibe un enlace por correo, y al verificarlo, es redirigido automáticamente a la página de inicio y logueado.
- **Sistema de login/logout**: Gestionado a través de cookies seguras y JWT.
- **Autenticación segura**: Basada en `HttpOnly` cookies con `SameSite=None`.
- **MongoDB Atlas**: Base de datos para gestionar usuarios y sus estados.

---

## Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior).
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) para la base de datos.
- [Git](https://git-scm.com/) para clonar el repositorio.

---

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/restaurante.git
   cd restaurante
