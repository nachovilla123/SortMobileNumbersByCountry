# Números por país

Este proyecto tiene como objetivo filtrar y organizar números de teléfono por país a partir de un archivo de texto proporcionado.

## Descripción

El proyecto consta de las siguientes funciones:

### `filterNumbersByCountry(numbers)`

Esta función recibe una lista de números de teléfono y los filtra por país. Utiliza una lista predefinida de países y sus respectivos códigos de país para determinar el país de cada número. Devuelve un objeto que contiene los números filtrados organizados por país.

### `getCountryFromPhoneNumber(phoneNumber)`

Esta función recibe un número de teléfono y determina el país correspondiente a través de su código de país. Utiliza expresiones regulares para identificar el código de país en el número y devuelve el nombre del país correspondiente.

### `leerArchivoTXT(archivo)`

Esta función lee un archivo de texto y devuelve una lista de elementos. El archivo debe contener números de teléfono separados por comas. Elimina los paréntesis si están presentes al principio y al final de cada número.

### `generateTxtFiles(filteredNumbers)`

Esta función genera archivos de texto separados por país a partir de los números filtrados. Crea una carpeta llamada "sortedNumbersFiles" en el directorio actual y guarda cada lista de números en un archivo de texto con el nombre del país correspondiente.

## Uso

1. Asegúrate de tener instalada una versión de Node.js en tu sistema.
2. Descarga o clona este repositorio.
3. Coloca los números de teléfono en un archivo de texto siguiendo el formato requerido.
4. Modifica el código para especificar la ubicación de tu archivo de texto en la variable `archivoTXT`.
5. Ejecuta el programa utilizando el siguiente comando:

```bash
node nombre-del-archivo.js
