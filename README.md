# 🎬 CineVerse: Angular Movie Manager

![CineVerse Demo](/public/CineVerse.gif)

Frontend desarrollado en **Angular** para la gestión y visualización de películas. Esta aplicación consume un backend REST en NestJs y permite crear, editar y eliminar películas fácilmente.

<p align="center">
  <a href="https://github.com/byronroman/movies-microservice-nestjs" target="_blank">
    <img src="https://img.shields.io/badge/Ver%20Backend%20NestJS-000?style=for-the-badge&logo=nestjs&logoColor=red" alt="Ver Backend NestJS">
  </a>
</p>

---

## 📁 Estructura del proyecto

```bash
src/
├── app/
│   ├── components/
│   │   ├── album/            # Componente principal de visualización de películas
│   │   ├── footer/           # Componente del footer de la app
│   │   └── header/           # Componente del header de la app
│   ├── models/               # Definición de modelos (ej. MovieModel)
│   ├── services/
│   │   └── album.service/    # Servicio para conexión con la API de películas
│   ├── app.config.ts         # Configuración principal de la aplicación
│   ├── app.html              # Template raíz
│   ├── app.routes.ts         # Definición de rutas
│   └── app.ts                # Componente principal
├── assets/                   # Archivos estáticos (logos, etc.)
│   └── logo-cineverse.svg
├── environments/
│   └── environment.ts        # Variables de entorno
├── index.html                # HTML principal
├── main.ts                   # Entrada principal de Angular
└── styles.scss               # Estilos globales
```

---

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/byronroman/movies-frontend-angular.git
   cd ng-movies
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## 💻 Desarrollo local

Levanta el servidor de desarrollo y abre el navegador:

```bash
ng serve
```

Visita [http://localhost:4200](http://localhost:4200)

---

## ⚙️ Variables de entorno

Edita la URL base del backend en `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  MICROSERVICE_URL: "http://localhost:3000/",
};
```

---

## 🧩 Principales componentes

| Carpeta                   | Función                                                            |
| ------------------------- | ------------------------------------------------------------------ |
| `components/album/`       | Componente principal para visualizar, editar y eliminar películas. |
| `components/footer/`      | Footer fijo inferior.                                              |
| `components/header/`      | Header superior con logo.                                          |
| `services/album.service/` | Servicio para conectar con la API REST de películas.               |
| `models/movie.model.ts`   | Interfaz que define la estructura de una película.                 |

---

## 📝 Notas adicionales

- Esta aplicación fue desarrollada a partir de un tutorial base, pero incluye modificaciones personalizadas con fines educativos y de práctica.

---

## 🧑‍💻 Autor

Desarrollado por [Byron Román](https://github.com/byronroman) — IBM Intern & Fullstack Developer.

---
