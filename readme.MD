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
- **Endpoint:** `/api/v1/clima/weather?q={nombre_ciudad}`
- **Descripción:** Obtiene el clima actual para una ubicación especificada por su nombre. También se puede incluir el código de estado y país.

### 3. Pronóstico a 5 Días por Coordenadas
- **Endpoint:** `/api/v1/clima/forecast?lat={lat}&lon={lon}&appid={API key}&units={units}`
- **Descripción:** Proporciona el pronóstico del clima a 5 días con datos cada 3 horas para una ubicación específica.

### 4. Datos Actuales de Contaminación del Aire
- **Endpoint:** `/api/v1/clima/air_pollution?lat={lat}&lon={lon}&appid={API key}`
- **Descripción:** Obtiene información actual sobre la contaminación del aire para una ubicación específica.

### 5. Datos Históricos de Contaminación del Aire
- **Endpoint:** `/api/v1/clima/air_pollution/history?lat={lat}&lon={lon}&start={start}&end={end}&appid={API key}`
- **Descripción:** Proporciona datos históricos de contaminación del aire para una ubicación específica entre fechas determinadas.

### 6. Geocodificación Directa
- **Endpoint:** `/api/v1/clima/geo/direct?q={nombre_ciudad},{codigo_estado},{codigo_pais}&limit={limit}&appid={API key}`
- **Descripción:** Obtiene las coordenadas geográficas (latitud y longitud) de una ubicación especificada por su nombre.

### 7. Coordenadas por Código Postal
- **Endpoint:** `/api/v1/clima/geo/zip?zip={codigo_postal},{codigo_pais}&appid={API key}`
- **Descripción:** Proporciona las coordenadas geográficas a partir de un código postal específico.

### 8. Geocodificación Inversa
- **Endpoint:** `/api/v1/clima/geo/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}`
- **Descripción:** Obtiene el nombre de la ubicación (ciudad o área) a partir de coordenadas geográficas específicas.



