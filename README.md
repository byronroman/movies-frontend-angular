# ng-movies

Aplicación frontend desarrollada en **Angular** para la gestión y visualización de películas, conectada a un microservicio backend.

## Estructura del proyecto

```
ng-movies/
├── public/             # Archivos públicos (favicon, etc.)
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── album/              # Componente principal de películas
│   │   ├── models/                 # Modelos de datos (Movie)
│   │   ├── services/
│   │   │   └── album.service/      # Servicio para consumir la API de películas
│   │   ├── app.config.ts           # Configuración principal de la app
│   │   ├── app.html                # Template raíz
│   │   ├── app.routes.ts           # Rutas de la aplicación
│   │   └── app.ts                  # Componente raíz
│   ├── environments/               # Variables de entorno
│   │   └── environment.ts
│   ├── index.html                  # HTML principal
│   ├── main.ts                     # Bootstrap de Angular
│   └── styles.scss                 # Estilos globales
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Desarrollo

Para iniciar el servidor de desarrollo y ver la aplicación en tu navegador:

```bash
ng serve
```

Luego abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## Variables de entorno

Configura la URL del backend en `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  MICROSERVICE_URL: "http://localhost:3000/",
};
```

## Estructura principal

- **components/album/**: Componente para mostrar y gestionar películas.
- **services/album.service/**: Servicio Angular para consumir la API REST del backend.
- **models/movie.model.ts**: Modelo de datos de película.
- **environments/**: Variables de entorno para desarrollo y producción.

## Scripts útiles

- **Construir la app**:
  ```bash
  ng build
  ```
- **Ejecutar pruebas unitarias**:
  ```bash
  ng test
  ```
- **Ejecutar pruebas end-to-end**:
  ```bash
  ng e2e
  ```

## Notas

- Este frontend está pensado para conectarse a un backend NestJS corriendo en `http://localhost:3000/`.
