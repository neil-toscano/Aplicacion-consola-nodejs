Este es una aplicación de consola, para la multiplicación, puedes pasar banderas o flags para especificar.
## 1. Clonar el repositorio 

## 2. Instalar dependencias
`npm install`

## 3. Ejecutar aplicacion
`npm run dev`

## 4. Build de produccion
`npm run build`

## 5. Ejecutar en produccion
`node dist/app`

## Ejemplos de comando
| Comando | Descripcion |
| ------- | ------------|
| node dist/app -b 15 | Crea una tabla de multiplicacion del 15 el el directorio outputs|
| node dist/app -b 15 -l 100 | Crea una tabla de multiplicacion del 15 pero hasta el 100 |
| node dist/app -b 15 -l 12 -s true | Muestra la tabla de multiplicacion en la consola |
| node dist/app -b 15 -n mult-table | Crea un archivo llamado mult-table con la multiplicacion |
| node dist/app -b 15 -d outputs/multiplication | Crea un directorio donde se guardaran la tabla de multiplicacion |
