/*
Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
*/

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('[data-function="toFilterStreamers"]');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    finderStreamer(input.value);
  }
});

const ul = document.createElement('ul');
ul.style.listStyle = 'none';

const finderStreamer = (text) => {
  const filtered = streamers.filter((streamer) => streamer.name.includes(text));

  ul.innerHTML = '';
  for (const streamer of filtered) {
    const li = document.createElement('li');
    li.textContent = streamer.name;
    li.style.paddingBottom = '15px';
    ul.appendChild(li);
  }
};

document.body.appendChild(ul);
