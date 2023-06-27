console.log(navigator);
console.log(navigator.geolocation);

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
  const { latitude, longitude } = position.coords;

  console.log('Географические координаты устройства', latitude, longitude);
});

  // navigator.geolocation.watchPosition(({coords})=>{
  //   console.log('Устройство обновило  местоположение', coords.latitude, coords.longitude);
  // })