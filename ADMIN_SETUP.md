# Activar el panel administrativo

El panel está disponible en `/admin` y usa Supabase Auth. Para activarlo:

1. Crea un proyecto en Supabase.
2. Ejecuta, en orden, los archivos de `supabase/migrations/` desde el SQL Editor.
3. En Supabase Auth, crea el usuario administrador con correo y contraseña.
4. Configura en Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_EMAILS` (uno o varios correos separados por coma)
5. Ejecuta un nuevo deployment.

La clave `SUPABASE_SERVICE_ROLE_KEY` se usa solamente en rutas del servidor. Nunca debe exponerse con el prefijo `NEXT_PUBLIC_`.

## Funciones disponibles

- Crear, editar, publicar, despublicar y eliminar artículos.
- Subir y eliminar imágenes de la galería.
- Mostrar únicamente artículos publicados en el sitio público.
- Actualizar blog y galería pública con revalidación automática de 60 segundos.
