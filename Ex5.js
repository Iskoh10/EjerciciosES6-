/*
5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.
*/

/* 5.1 */
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const filteredAges = ages.filter((age) => {
  if (age > 18) {
    return age;
  }
});
console.log(filteredAges);

/* 5.2 */
const parAges = ages.filter((age) => {
  if (age % 2 === 0) {
    return age;
  }
});
console.log(parAges);

/* 5.3 */
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const lolStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed === 'League of Legends') {
    return streamer;
  }
});

console.log(lolStreamers);

/* 5.4 */
const uStreamers = streamers.filter((streamer) => {
  if (streamer.name.includes('u')) {
    return streamer;
  }
});
console.log(uStreamers);

/* 5.5 */
const legendsStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    return streamer;
  }
});
console.log(legendsStreamers);

/* const upperLegendsStreamers = legendsStreamers.map((streamer) => {
  if (streamer.age > 35) {
    return (streamer = streamer.gameMorePlayed.toUpperCase());
  } else {
    return streamer;
  }
});

console.log(upperLegendsStreamers); */
