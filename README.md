# UMBRAL 5B — Archivo de campo

## Proyecto web grupal · Front End · TP1 · 2026

**Umbral 5B** es un sitio web grupal desarrollado para el Trabajo Práctico Grupal 1 de Desarrollo de Sistemas Web · Front End.

El proyecto presenta al equipo como un grupo de investigadores que explora la relación entre **código, diseño e imaginación**, tomando como referencia estética y conceptual el universo del horror cósmico asociado a H. P. Lovecraft.

El sitio reúne una portada general, perfiles individuales, navegación interna, interacciones desarrolladas con JavaScript y una bitácora que documenta las decisiones, dificultades, pruebas y evolución del proyecto.

---

## 👁️ Integrantes

### 01 · Rubén Darío Basconcelo

**Responsabilidad principal:** Organización inicial del proyecto

* Organización de la estructura inicial.
* Participación en la definición general del sitio.
* Desarrollo de su perfil HTML.
* Desarrollo de su interacción JavaScript.
* Participación en pruebas y testing.
* Participación en README y Bitácora.

**GitHub:** VaskoVegan

### 02 · Sergio David Pasini Cabello

**Responsabilidad principal:** Diseño visual y CSS

* Propuesta de identidad visual.
* Definición de la paleta junto al equipo.
* Definición de tipografías.
* Desarrollo de la base del CSS compartido.
* Desarrollo de su perfil HTML.
* Desarrollo de su interacción JavaScript.
* Participación en pruebas responsive.

**GitHub:** cspasini

### 03 · [NOMBRE DEL INTEGRANTE]

**Responsabilidad principal:** JavaScript e interactividad

* Propuesta de interacciones.
* Implementación del JavaScript de la portada.
* Organización y revisión de los scripts.
* Desarrollo de su perfil HTML.
* Desarrollo de su interacción JavaScript.
* Revisión de errores de consola.
* Participación en pruebas.

**GitHub:** [COMPLETAR]

### 04 · [NOMBRE DEL INTEGRANTE]

**Responsabilidad principal:** Documentación e integración

* Organización de la Bitácora.
* Coordinación de la documentación del proceso.
* Participación en la integración final.
* Desarrollo de su perfil HTML.
* Desarrollo de su interacción JavaScript.
* Participación en README.
* Participación en pruebas finales.

**GitHub:** [COMPLETAR]

> Aunque cada integrante tuvo una responsabilidad principal, las decisiones y revisiones importantes fueron realizadas de manera colaborativa.

---

# 🎯 Propósito del proyecto

El objetivo fue construir un sitio web grupal que cumpliera con los requisitos técnicos del TP1 y, al mismo tiempo, desarrollara una identidad visual propia.

El concepto de **Umbral 5B** utiliza la idea de un archivo de investigación: cada integrante representa un expediente y la navegación permite recorrer distintas partes de una investigación ficticia.

La estética combina:

* horror cósmico;
* archivos de campo;
* documentación científica;
* tipografía editorial;
* elementos de interfaz de investigación;
* animaciones e interacciones inspiradas en señales desconocidas.

La intención no fue reproducir literalmente una estética de Lovecraft, sino utilizarla como punto de partida para construir una identidad visual propia.

---

# 🛠️ Tecnologías utilizadas

* **HTML5** — estructura y contenido.
* **CSS3** — diseño visual, responsive design, animaciones y componentes.
* **JavaScript** — interacciones dinámicas.
* **Google Fonts** — tipografías del proyecto.
* **Git / GitHub** — control de versiones y colaboración.
* **Vercel** — publicación del sitio.

No se utilizaron frameworks para la implementación principal. El sitio fue desarrollado utilizando HTML, CSS y JavaScript.

---

# 📁 Estructura del proyecto

```text
tp1-lovecraft-web/
│
├── index.html
├── integrante1.html
├── integrante2.html
├── integrante3.html
├── integrante4.html
├── bitacora.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── index.js
│
└── img/
    ├── avatares/
    └── ...
```

La estructura mantiene los archivos HTML principales en la raíz, los estilos y scripts en carpetas separadas y los recursos gráficos dentro de `img/`.

---

# 🎨 Guía de estilos

## Paleta

| Uso              | Color         | Hexadecimal |
| ---------------- | ------------- | ----------- |
| Fondo principal  | Ink           | `#101512`   |
| Fondo elevado    | Ink Raised    | `#151C18`   |
| Fondo secundario | Ink Soft      | `#1B241E`   |
| Papel principal  | Paper         | `#E8E2D1`   |
| Papel secundario | Paper Dim     | `#B4B7A5`   |
| Texto secundario | Muted         | `#8B9484`   |
| Acento principal | Copper        | `#C18959`   |
| Acento brillante | Copper Bright | `#D6A273`   |

La combinación busca transmitir una estética oscura, editorial y de archivo, utilizando el cobre como color de señalización y contraste.

## Tipografías

Se utilizan fuentes de **Google Fonts**:

* **Marcellus** — títulos y elementos destacados.
* **IM Fell English** — textos de carácter literario y expresivo.
* **DM Sans** — navegación, etiquetas, información técnica y textos de interfaz.

## Iconografía

Se utilizan principalmente:

* símbolos tipográficos;
* caracteres geométricos;
* indicadores de archivo;
* elementos circulares;
* símbolos relacionados con investigación y señalización.

La iconografía se mantiene deliberadamente simple para no competir con la información principal.

---

# 🧭 Navegación

El sitio cuenta con un menú principal accesible desde las distintas páginas:

* Inicio
* El equipo
* Bitácora

Además, cada perfil dispone de enlaces internos que permiten regresar a las secciones correspondientes sin depender del botón **Atrás** del navegador.

La navegación fue revisada para evitar enlaces rotos y permitir recorrer el sitio de forma continua.

---

# 👤 Perfiles individuales

Cada integrante cuenta con una página individual que presenta:

* foto o avatar;
* nombre;
* ciudad;
* edad;
* cuatro habilidades;
* tres películas favoritas;
* tres discos/artistas favoritos;
* enlaces externos correspondientes;
* una interacción desarrollada con JavaScript.

Los perfiles utilizan una estructura visual compartida para mantener la identidad general del proyecto, pero cada integrante aporta sus propios contenidos.

---

# ⚡ Interactividad JavaScript

El proyecto incorpora JavaScript tanto en la portada como en los perfiles individuales.

## Portada — Investigación de la señal

La portada contiene una interacción basada en un medidor de cordura.

El usuario puede investigar una señal desconocida. Cada interacción reduce progresivamente el nivel de cordura del investigador.

La secuencia evoluciona de la siguiente manera:

1. La cordura comienza en 100%.
2. Cada investigación reduce el valor.
3. Al disminuir la cordura aparecen cambios visuales y efectos de corrupción.
4. La interfaz comienza a presentar glitches y señales extrañas.
5. Al llegar a 0%, la interfaz colapsa y aparecen símbolos/rúnicos.
6. El mensaje cambia a una respuesta final.
7. Después de unos segundos, la experiencia se reinicia y la señal vuelve a estar disponible.

La interacción fue diseñada para que JavaScript no sea solamente un requisito técnico, sino que forme parte de la narrativa del sitio.

**Captura:**
`[INSERTAR CAPTURA DE LA INTERACCIÓN DE LA PORTADA]`

---

## Perfil — Rubén Darío Basconcelo

La página de Rubén incorpora una interacción JavaScript propia vinculada con la presentación de su perfil.

**Descripción:**
[COMPLETAR CON LA INTERACCIÓN DEFINITIVA]

**Captura:**
`[INSERTAR CAPTURA]`

---

## Perfil — Sergio David Pasini Cabello

La página de Sergio incorpora una interacción JavaScript propia vinculada con la presentación de su perfil.

**Descripción:**
[COMPLETAR CON LA INTERACCIÓN DEFINITIVA]

**Captura:**
`[INSERTAR CAPTURA]`

---

## Perfil — Integrante 03

El perfil incorpora una interacción JavaScript propia.

**Descripción:**
[COMPLETAR]

**Captura:**
`[INSERTAR CAPTURA]`

---

## Perfil — Integrante 04

El perfil incorpora una interacción JavaScript propia.

**Descripción:**
[COMPLETAR]

**Captura:**
`[INSERTAR CAPTURA]`

---

# 📱 Diseño responsive

El sitio fue desarrollado considerando diferentes tamaños de pantalla.

Se revisaron especialmente los breakpoints solicitados por la consigna:

* **400 px** — teléfonos pequeños.
* **900 px** — transición entre dispositivos medianos y escritorio.
* **1200 px** — escritorio amplio.

Además, se utilizaron puntos intermedios cuando fue necesario para mejorar la adaptación de componentes específicos.

Se revisaron:

* navegación;
* tarjetas de integrantes;
* perfiles;
* tarjetas de habilidades;
* tarjetas multimedia;
* imágenes;
* textos largos;
* bitácora;
* interacción JavaScript;
* ausencia de desbordes horizontales.

---

# 📓 Bitácora

La sección **Bitácora** documenta la evolución del proyecto y permite reconstruir las principales decisiones tomadas durante el desarrollo.

Se registraron, entre otros aspectos:

* organización inicial;
* definición del concepto;
* decisiones de diseño;
* construcción de la identidad visual;
* desarrollo del CSS;
* creación de perfiles;
* incorporación de JavaScript;
* problemas encontrados;
* pruebas responsive;
* ajustes de navegación;
* cambios realizados durante la integración;
* aprendizajes obtenidos durante el proceso.

La bitácora se encuentra disponible desde el menú principal del sitio.

---

# 🤝 Organización y trabajo colaborativo

El proyecto se organizó mediante responsabilidades principales para distribuir el trabajo, pero las decisiones relevantes fueron revisadas de manera conjunta.

Las tareas compartidas incluyeron:

* definición del concepto;
* elección del nombre del proyecto;
* identidad visual;
* estructura de navegación;
* revisión del CSS;
* revisión responsive;
* testing general;
* revisión de enlaces;
* revisión de JavaScript;
* Bitácora;
* README;
* preparación de la entrega.

La división de responsabilidades permitió organizar el trabajo sin convertir cada área en un trabajo aislado.

---

# 🤖 Uso de Inteligencia Artificial

Durante el desarrollo se utilizaron herramientas de Inteligencia Artificial como asistentes técnicos y creativos.

## Herramientas utilizadas

**ChatGPT — OpenAI**

Se utilizó como herramienta de asistencia durante distintas etapas del desarrollo, principalmente para:

* analizar la consigna;
* proponer alternativas de estructura;
* revisar y mejorar código HTML, CSS y JavaScript;
* detectar posibles problemas de responsive design;
* plantear soluciones para interacciones;
* realizar debugging;
* revisar accesibilidad y navegación;
* redactar y organizar documentación.

La IA también se utilizó como herramienta de discusión para evaluar alternativas de diseño y detectar inconsistencias.

## Código

La IA fue utilizada como apoyo, pero el código incorporado al proyecto fue revisado, adaptado
