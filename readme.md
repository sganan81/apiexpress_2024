## API con express creada con NodeJS

La api no requiere clave, se puede ejecutar con
node app.js

Endpoint "Obtener un Pokémon por ID" - Evelin Paumgertner:
1 - Registro de ID Pokemons:
http://localhost:3000/id_pokemon
2 - Buscar pokemon por ID:
http://localhost:3000/id_pokemon/1
3 - Query params:
http://localhost:3000/id_pokemon?limit=10&page=2

Endpoint "Obtener un Pokémon por Nombre de pokemon" - Emiliano Correa:
1 - Registro de nombres:
http://localhost:3000/pokemon
2 - Buscar pokemon por nombre de pokemon:
http://localhost:3000/pokemon/1
3 - Query params:
http://localhost:3000/pokemon?limit=10&page=2
 
Endpoint "Obtener listas de movimientos " - Gaston Ivan Haag Gomez:
1 - Registro de movimientos:
http://localhost:3000/moves
2 - Buscar movimientos por ID:
http://localhost:3000/moves/1
3 - Query params:
http://localhost:3000/moves?limit=50&page=1

Endpoint "Obtener Habilidades por nombre o id" - Facundo Reiseng:
1 - Registro de habilidades:
http://localhost:3000/ability
2 - Buscar habilidades por nombre (en ingles) o id:
http://localhost:3000/ability/1
http://localhost:3000/ability/stench
3 - Query params:
http://localhost:3000/ability?limit=15&page=3