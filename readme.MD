## API con express creada con NodeJS
A continuación, describo los endpoints implementados en este proyecto. Cada uno sigue un flujo consistente:
-Parámetros: Se reciben los parámetros necesarios para la operación, y se verifica si alguno es obligatorio y está vacío. En ese caso, se responde con un mensaje de error.

-Petición a la API: Uso la API proporcionada para obtener los datos requeridos. La ruta de la API incluye los parámetros que determinan los valores que se solicitan.

-Respuesta en JSON: Los datos obtenidos son procesados y filtrados según la relevancia. En algunos casos, se descartan ciertos datos no esenciales antes de enviar la respuesta en formato JSON.

-Manejo de errores: Se implementan verificaciones de errores y se manejan de forma adecuada, devolviendo respuestas claras al cliente con los códigos de estado correspondientes.

-Los métodos definidos en la carpeta Controller son exportados para su uso en la carpeta routes.

1) getPolucionFutura: Muestra los datos del aire a futuro de una ubicacion especifica dada por coordenadas.

2) getClimaPorCoordenadasFiltrado: Muestra los datos del clima de una ubicacion especifica dada por coordenadas.

3) getClimaPorCiudadFiltrado: Muestra los datos del clima por la ciudad que ingrese el usuario.

4) getCoordenadasDeCiudad: Muestra las coordenadas de la ciudad que ingrese el usuario.

5) getCiudadPorCoordenadas: Lo inverso a lo anterior, muestra la ciudad por las coordenadas ingresadas.

6) getCoordenadasPorCodigoPostal: Muestra las coordenadas de la ubicacion ingresada por el codigo postal.
