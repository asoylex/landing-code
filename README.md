# Landing de Captura de Leads

Landing page construida con Next.js para capturar leads desde un formulario y enviarlos a una API externa (por ejemplo, Laravel).

## Funcionalidades

- Secciones de landing: navbar, hero, precios, contacto y footer.
- Formulario de contacto con validacion en cliente usando Yup.
- Envio de datos por `fetch` a la URL configurada en entorno.
- Estados de UI: errores por campo, loading y modal de exito.

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalacion

1. Entrar al proyecto.

```bash
cd landing-code
```

2. Instalar dependencias.

```bash
npm install
```

3. Crear el archivo `.env.local` en la raiz del proyecto y configurar la URL destino del POST.

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api/leads
```

Importante: el formulario hace `POST` directamente a `NEXT_PUBLIC_API_URL`.

## Ejecutar en desarrollo

```bash
npm run dev
```

Aplicacion disponible en `http://localhost:3000`.

## Payload enviado

```json
{
  "nombre": "Juan Perez",
  "correo": "juan@email.com",
  "telefono": "555-1234",
  "company": "Mi Empresa",
  "mensaje": "Estoy interesado"
}
```

## Validaciones del formulario

- `nombre`: requerido.
- `correo`: requerido y formato email valido.
- `telefono`: requerido.
- `company`: opcional.
- `mensaje`: opcional.

## Flujo del formulario

1. El usuario completa y envia el formulario.
2. Se valida el payload con Yup (`abortEarly: false`).
3. Se ejecuta la peticion `POST` a `NEXT_PUBLIC_API_URL`.
4. Si la respuesta es correcta, se limpia el formulario y se muestra mensaje/modal de exito.
5. Si falla, se muestran errores de validacion o error general.

## Estructura actual del proyecto

```txt
app/
  globals.css
  layout.tsx
  page.tsx

components/
  Contact.tsx
  Footer.tsx
  Hero.tsx
  Navbar.tsx
  Pricing.tsx

public/
  leads.csv
```

## Scripts disponibles

```bash
npm run dev    # Desarrollo
npm run build  # Build de produccion
npm run start  # Servidor en produccion
npm run lint   # Lint con ESLint
```

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Yup

## Notas

- Verifica que el backend permita CORS desde el frontend.
- Si cambias la ruta del endpoint, actualiza `NEXT_PUBLIC_API_URL`.
- El formulario de contacto esta implementado en `components/Contact.tsx`.