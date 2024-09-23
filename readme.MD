# API de Clima - Proyecto Grupal

## Introducción

Este proyecto es una API construida en Node.js y Express que proporciona acceso a datos climáticos a través de la API de OpenWeather. La API permitirá a los usuarios obtener información sobre el clima actual, pronósticos, datos de contaminación y más.

## Integrantes del Grupo

- Ignacio Sotomayor
- Lucas Bertone

 

## Bertone Endpoints


### 1. Clima Actual por Nombre de Ciudad
- **Endpoint:** `/api/v1/clima/ciudad?ciudad={nombre_ciudad}`
- **Ejemplo:** `/api/v1/clima/ciudad?ciudad=bahia%20blanca`
- **Descripción:** Obtiene el clima actual para una ubicación especificada por su nombre. También se puede incluir el código de estado y país.

### 2. Clima Actual por Nombre de Ciudad Filtrando datos como la T max y minima
- **Endpoint:** `/api/v1/clima/ciudadFiltrado?ciudad={nombre_ciudad}`
- **Ejemplo:** `/api/v1/clima/ciudadFiltrado?ciudad=bahia%20blanca`
- **Descripción:** Obtienes el clima actual pero filtrando datos como la velocidad del viento, temperatura maxima y minima. Y tambien otros datos como el nombre de la ciudad, entre otros datos.

### 3. Pronóstico a 5 Días por Coordenadas
- **Endpoint:** `/api/v1/pronostico/extendido?lat={lat}&lon={lon}`
- **Ejemplo:** `/api/v1/pronostico/extendido?lat=-34.61&lon=-58.38`
- **Descripción:** Proporciona el pronóstico del clima a 5 días con datos cada 3 horas para una ubicación específica.

### 4. Pronóstico a 5 Días por Ciudad 
- **Endpoint:** `/api/v1/pronostico/extendidoPorCiudad/:ciudad`
- **Ejemplo:** `/api/v1/pronostico/extendidoPorCiudad/Bahia Blanca`
- **Descripción:** Proporciona el pronóstico del clima a 5 días con datos cada 3 horas para una ciudad que ingreses como parametro.

### 5. Pronóstico a 5 Días por Codigo Postal
- **Endpoint:** `/api/v1/pronostico/extendidoPorCodigoPostal?zip={zip}`
- **Ejemplo:** `/api/v1/pronostico/extendidoPorCodigoPostal?zip=8000`
- **Descripción:** Proporciona el pronóstico del clima a 5 días con datos cada 3 horas ingresando el codigo postal.

### 6. Datos Actuales de Contaminación del Aire
- **Endpoint:** `/api/v1/aire/polucion?lat={lat}&lon={lon}`
- **Ejemplo:** `/api/v1/aire/polucion?lat=-34.61&lon=-58.38`
- **Descripción:** Obtiene información actual sobre la contaminación del aire para una ubicación específica.

## 7. Datos historicos de Contaminación del Aire
- **Endpoint:** `/api/v1/aire/polucionHistorica?lat={lat}&lon={lon}&start{start}&end={end}`
- **Ejemplo:** `/api/v1/aire/polucionHistorica?lat=-34.61&lon=-58.38&start=1694803200&end=1694889600`
- **Descripción:** Obtiene información historica sobre la contaminación del aire para una ubicación específica y en una franja de tiempo determinado por el usuario. El formato de la fecha esta en timestamp Unix para convertirlo podemos usar una herramienta como epochconverter.com





