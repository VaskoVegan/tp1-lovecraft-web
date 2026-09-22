# Umbral 5B — Archivo de campo

Sitio grupal para el Trabajo Práctico 1 de Desarrollo de Sistemas Web (Front End), 2026. La propuesta presenta al equipo y documenta su proceso con una identidad visual inspirada en los archivos, la exploración y la literatura de H. P. Lovecraft.

## Estado de la entrega

La portada, los dos perfiles confirmados y la bitácora están desarrollados. Los expedientes 03 y 04 permanecen en pausa, tal como acordó el equipo; no se inventaron nombres ni datos personales. Antes de entregar, completar los elementos marcados como pendientes en esta guía y en la lista final.

## Recorrido

- `index.html`: portada, presentación del equipo, expedientes y medidor interactivo.
- `integrante1.html`: perfil e interacción de Rubén Darío Basconcelo.
- `integrante2.html`: perfil e interacción de Sergio David Pasini Cabello.
- `integrante3.html` y `integrante4.html`: accesos reservados para completar cuando se confirme a las personas integrantes.
- `bitacora.html`: decisiones, roles, avances y tareas abiertas.

La navegación principal permite volver a Inicio, ir a los perfiles desde el listado y abrir la Bitácora. Cada perfil incluye un enlace de regreso al equipo y enlaces a los demás expedientes activos.

## Integrantes y responsabilidades

| N.º | Integrante | Responsabilidad acordada | Perfil |
|---|---|---|---|
| 1 | Rubén Darío Basconcelo — Mendoza, 48 años | Organización inicial, estructura, perfil e interacción propios; participación en pruebas, README y Bitácora. | [Expediente 01](integrante1.html) · GitHub pendiente de confirmar |
| 2 | Sergio David Pasini Cabello — Mendoza, 42 años | Diseño visual, identidad, tipografías y CSS compartido; perfil propio y pruebas responsive. | [Expediente 02](integrante2.html) · GitHub pendiente de confirmar |
| 3 | En pausa | JavaScript e interactividad, según la distribución acordada. Incorporación y datos por confirmar. | Pendiente |
| 4 | En pausa | Documentación e integración, según la distribución acordada. Incorporación y datos por confirmar. | Pendiente |

> La consigna requiere perfiles completos para cada integrante. Los expedientes 03 y 04 no se completan hasta contar con su información y participación confirmadas.

## Tecnologías

- HTML semántico para las páginas y la navegación.
- CSS propio, variables de diseño, animaciones y media queries.
- JavaScript sin dependencias para las interacciones y el menú móvil.
- Google Fonts: [Marcellus](https://fonts.google.com/specimen/Marcellus), [IM Fell English](https://fonts.google.com/specimen/IM+Fell+English) y [DM Sans](https://fonts.google.com/specimen/DM+Sans).
- Ilustraciones vectoriales originales (`img/umbral.svg`, `img/lovecraft.svg`, `img/cthulhu.svg`, `img/dagon.svg`, `img/investigator.svg`), miniaturas CSS para los enlaces de cine y música, avatares tipográficos y motivos gráficos dibujados con CSS; no se usan fotografías personales ni imágenes de terceros.

## Guía de estilos

| Uso | Color |
|---|---|
| Fondo abisal | `#101512` |
| Panel | `#151C18` |
| Texto principal | `#E8E2D1` |
| Texto secundario | `#B4B7A5` |
| Latón de archivo | `#C18959` |
| Violeta | `#A48AD4` |
| Violeta profundo | `#8C70C2` |
| Lila claro | `#C4AFEA` |
| Verde espectral | `#A7C879` |
| Líneas | `rgba(210, 190, 151, 0.17)` |

Los títulos usan Marcellus; citas y acentos literarios usan IM Fell English; el texto de lectura y los controles usan DM Sans. La identidad combina fondos de tinta, acentos violetas y verdes, y toques de latón. La portada y el bestiario usan SVG originales; los avatares y las miniaturas de favoritos se dibujan con CSS.

## Estructura

```text
tp1-lovecraft-web/
├── index.html
├── integrante1.html
├── integrante2.html
├── integrante3.html          # pendiente de incorporación
├── integrante4.html          # pendiente de incorporación
├── bitacora.html
├── img/
│   ├── umbral.svg
│   ├── lovecraft.svg
│   ├── cthulhu.svg
│   ├── dagon.svg
│   └── investigator.svg
├── README.md
├── css/
│   └── style.css
└── js/
    ├── index.js
    ├── integrante1.js
    ├── integrante2.js
    ├── integrante3.js        # pendiente de incorporación
    └── integrante4.js        # pendiente de incorporación
```

No se requiere instalar paquetes. Para una vista local, abrir `index.html` en un navegador moderno.

## Interacciones JavaScript

- **Portada — `js/index.js`:** el botón “Investigar la señal” reduce el medidor en pasos, actualiza su mensaje y su valor accesible; al llegar a cero, registra el estado final. El mismo archivo abre y cierra el menú en pantallas pequeñas.
- **Expediente 01 — `js/integrante1.js`:** “Marcar el pulso” activa una animación y muestra notas secuenciales inspiradas en la organización y el ritmo de trabajo de Rubén.
- **Expediente 02 — `js/integrante2.js`:** “Consultar el archivo” revela observaciones secuenciales y anima el mapa estelar.
- **Portada — archivo ilustrado:** galería visual original con retrato literario, Cthulhu, Dagon y una investigadora ficticia; tentáculos con animación CSS y opción de movimiento reducido.
- **Perfiles — favoritos:** las miniaturas de cine abren búsquedas en IMDb y las de bandas, búsquedas en Spotify.
- **Expedientes 03 y 04:** interacciones pendientes junto con la incorporación de cada perfil.

## Diseño adaptable

La hoja compartida incluye ajustes para escritorio, tabletas y móviles. Los breakpoints explícitos corresponden a `1200px`, `900px` y `400px`. La revisión visual en esos anchos debe registrarse antes de la entrega final.

## Enlaces a favoritos

Los títulos de cine abren búsquedas en IMDb y las bandas abren búsquedas en Spotify. Cada enlace incluye una miniatura ilustrada propia que funciona también como área clickeable; no se reutiliza arte de pósteres ni portadas comerciales.

## Capturas

La consigna solicita capturas del sitio. **Pendiente:** agregar capturas actuales dentro de `capturas/` y enlazarlas aquí después de la revisión responsive. No se incluyen imágenes de una versión anterior como si fueran evidencia de este estado.

## Repositorio y publicación

- Repositorio remoto configurado: [github.com/VaskoVegan/tp1-lovecraft-web](https://github.com/VaskoVegan/tp1-lovecraft-web).
- Enlace de perfil de GitHub de Rubén: pendiente de confirmar.
- Enlace de perfil de GitHub de Sergio: pendiente de confirmar.
- URL publicada en Vercel: pendiente de publicar y confirmar.

La planilla de entregas debe recibir un único enlace: el repositorio grupal público. La URL de Vercel se documenta aquí.

## Uso de IA y autoría

Se utilizó ChatGPT (OpenAI) como asistente en esta etapa para revisar la consigna, proponer estructura y redacción, y apoyar la implementación de HTML, CSS y JavaScript. El equipo debe revisar y comprender el código, contrastar el contenido con sus decisiones y registrar qué modificó antes de entregar.

**Pendiente de completar por el equipo:** indicar plan gratuito o pago y experiencia previa; describir los criterios de los recursos generados; anotar los cambios humanos realizados tras revisar las sugerencias. Los avatares son monogramas CSS creados a partir de iniciales, no retratos generados por IA.

## Evolución prevista

1. Confirmar la participación, datos y perfiles de GitHub de integrantes 3 y 4.
2. Completar sus páginas e interacciones propias.
3. Hacer y registrar la revisión visual a 400 px, 900 px y 1200 px.
4. Incorporar capturas, URL de Vercel y una bitácora con dificultades y soluciones observadas durante esas revisiones.
5. Actualizar el registro del uso de IA con la experiencia y el plan utilizados por el equipo.

## Lista antes de entregar

- [ ] Completar los GitHub de Rubén y Sergio y enlazar los perfiles desde el README.
- [ ] Revisar y registrar responsive a 400 px, 900 px y 1200 px.
- [ ] Incorporar capturas actuales y agregar enlaces en la sección Capturas.
- [ ] Publicar en Vercel y agregar la URL.
- [ ] Completar la declaración de uso de IA sobre plan, experiencia y revisión humana.
- [ ] Si se incorporan integrantes 3 y 4, completar sus datos, páginas e interacciones.
- [ ] Confirmar que el repositorio sea público y que la navegación funcione en la publicación.
