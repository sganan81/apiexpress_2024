# API de Clima - Proyecto Grupal

## Introducción

Este proyecto es una API construida en Node.js y Express que proporciona acceso a datos climáticos a través de la API de OpenWeather. La API permitirá a los usuarios obtener información sobre el clima actual, pronósticos, datos de contaminación y más.

## Integrantes del Grupo

- Ignacio Sotomayor
- Lucas Bertone

## Endpoints

### 1. Clima Actual por Coordenadas
- **Endpoint:** `/api/v1/clima/actual?lat={lat}&lon={lon}`
- **Ejemplo:** `/api/v1/clima/actual?lat=-34.61&lon=-58.38`
- **Descripción:** Obtiene el clima actual para una ubicación específica utilizando sus coordenadas (latitud y longitud).

### 2. Clima Actual por Nombre de Ciudad
- **Endpoint:** `/api/v1/clima/ciudad?ciudad={nombre_ciudad}`
- **Ejemplo:** `/api/v1/clima/ciudad?ciudad=bahia%20blanca`
- **Descripción:** Obtiene el clima actual para una ubicación especificada por su nombre. También se puede incluir el código de estado y país.

### 3. Pronóstico a 5 Días por Coordenadas
- **Endpoint:** `/api/v1/clima/extendido?lat={lat}&lon={lon}`
- **Ejemplo:** `/api/v1/clima/extendido?lat=-34.61&lon=-58.38`
- **Descripción:** Proporciona el pronóstico del clima a 5 días con datos cada 3 horas para una ubicación específica.


### 4. Pronóstico a 5 Días por Ciudad
- **Endpoint:** `/api/v1/clima/extendidoPorCiudad?ciudad={ciudad}`
- **Ejemplo:** `/api/v1/clima/extendidoPorCiudad?ciudad=bahia%20blanca`
- **Descripción:** Proporciona el pronóstico del clima a 5 días con datos cada 3 horas para una ciudad que ingreses como parametro.

### 4. Pronóstico a 5 Días por Codigo Postal
- **Endpoint:** `/api/v1/clima/extendidoPorCodigoPostal?zip={zip}`
- **Ejemplo:** `/api/v1/clima/extendidoPorCodigoPostal?zip=8000`
- **Descripción:** Proporciona el pronóstico del clima a 5 días con datos cada 3 horas ingresando el codigo postal.

### 5. Datos Actuales de Contaminación del Aire
- **Endpoint:** `/api/v1/clima/air_pollution?lat={lat}&lon={lon}`
- **Ejemplo:** `/api/v1/aire/polucion?lat=-34.61&lon=-58.38`
- **Descripción:** Obtiene información actual sobre la contaminación del aire para una ubicación específica.

### 6. Datos Históricos de Contaminación del Aire
- **Endpoint:** `/api/v1/clima/air_pollution/history?lat={lat}&lon={lon}&start={start}&end={end}`
- **Descripción:** Proporciona datos históricos de contaminación del aire para una ubicación específica entre fechas determinadas.

### 7. Geocodificación Directa
- **Endpoint:** `/api/v1/clima/geo/direct?q={nombre_ciudad},{codigo_estado},{codigo_pais}&limit={limit}`
- **Descripción:** Obtiene las coordenadas geográficas (latitud y longitud) de una ubicación especificada por su nombre.

### 8. Coordenadas por Código Postal
- **Endpoint:** `/api/v1/clima/geo/zip?zip={codigo_postal},{codigo_pais}`
- **Descripción:** Proporciona las coordenadas geográficas a partir de un código postal específico.

### 9. Geocodificación Inversa
- **Endpoint:** `/api/v1/clima/geo/reverse?lat={lat}&lon={lon}&limit={limit}`
- **Descripción:** Obtiene el nombre de la ubicación (ciudad o área) a partir de coordenadas geográficas específicas.



