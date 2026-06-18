# Ecommify Database Design
 
Repositorio académico del proyecto **Diseño y Optimización de Bases de Datos** para Ecommify. El proyecto incluye implementación técnica en **PostgreSQL** y **MongoDB**, con enfoque en modelado de datos, optimización de consultas, indexación y documentación reproducible. 
## Objetivo

Documentar y organizar la implementación de la base de datos de Ecommify, separando claramente el diseño relacional, el diseño documental y las evidencias técnicas del proceso de optimización.

## Estructura del repositorio
 
```text
Ecommify_Database_Design/
│
├── README.md
├── docs/
│   ├── Documento_Tecnico_Diseno.pdf
│   └── PresentacionEjecutiva.pdf
│
├── mongodb/
│   └── schema/
│
├── notebooks/
│
└── postgresql/
    ├── queries/
    │   ├── 01_Analisis_Ventas_Mensuales.sql
    │   ├── 02_Top_Categorias_Productos.sql
    │   ├── 03_auditoria_logistica_y_retrasos.sql
    │   ├── 04_satisfaccion_cliente_por_categoria.sql
    │   └── 05_preferencias_de_pago.sql
    │
    └── schema/
        ├── DDL_Tables.sql
        ├── customers.sql
        ├── order_items.sql
        ├── orders.sql
        ├── payments.sql
        ├── products.sql
        └── reviews.sql
```
 
## Tecnologías utilizadas
 
- PostgreSQL / Supabase. 
- MongoDB Atlas.
- SQL.
- Git y GitHub.
- Notebooks para documentación y pruebas.
 
## Implementación PostgreSQL
 
La implementación relacional está compuesta por las tablas `CUSTOMERS`, `PRODUCTS`, `ORDERS`, `ORDER_ITEMS`, `PAYMENTS` y `REVIEWS`, con claves primarias UUID, claves foráneas, restricciones `CHECK` y columnas `JSONB` para atributos semiestructurados.
 
## Consultas analíticas
 
El repositorio incluye consultas enfocadas en análisis de negocio y rendimiento:
 
- `01_Analisis_Ventas_Mensuales.sql`.
- `02_Top_Categorias_Productos.sql`.
- `03_auditoria_logistica_y_retrasos.sql`. 
- `04_satisfaccion_cliente_por_categoria.sql`. 
- `05_preferencias_de_pago.sql`.
 
Estas consultas sirven como base para evaluar comportamiento, agregación y optimización con `EXPLAIN ANALYZE`.
 
## Instrucciones de setup
 
### 1. Clonar el repositorio
 
```bash
git clone https://github.com/BeltranCh97/Ecommify_Database_Design.git
cd Ecommify_Database_Design
```
 
### 2. Configurar PostgreSQL o Supabase
 
Crear una base de datos nueva o usar un proyecto en Supabase.
 
### 3. Ejecutar el esquema
 
Ejecutar primero el archivo:
 
```sql
postgresql/schema/DDL_Tables.sql
```
 
Este script crea la estructura completa del modelo relacional. [file:19]
 
### 4. Ejecutar los scripts por tabla
 
Si se prefiere, también se pueden ejecutar los archivos individuales ubicados en `postgresql/schema/`.
 
### 5. Cargar datos de prueba
 
Cargar los datos de prueba necesarios para validar consultas y rendimiento.
 
### 6. Ejecutar consultas analíticas
 
Correr las consultas ubicadas en `postgresql/queries/`.
 
### 7. Validar rendimiento
 
Ejecutar las consultas con `EXPLAIN ANALYZE` para comparar tiempos de ejecución y planes antes y después de optimizar.
 
## Evidencias
 
La carpeta `docs/` contiene el documento técnico y la presentación ejecutiva del proyecto.  
Las carpetas `notebooks/` y `postgresql/queries/` guardan soporte del proceso de análisis y optimización.
 
## Estado del proyecto
 
La parte de PostgreSQL está implementada con su esquema, consultas y evidencias de optimización.  
La parte de MongoDB se organiza en `mongodb/schema/` y se integra como componente complementario del trabajo.
 
## Integrantes
Roberto Jose Breuer
Luis Fernando Beltran
