const locations = [];

for (let i = 1; i <= 3; i++) {
  const lat = prompt("enter lat");
  const lon = prompt("enter lon");
  //   locations.push({
  //     lat: lat,
  //     lon: lon,
  //   });

  locations.push({
    lat,
    lon,
  });
}

console.log(locations);
