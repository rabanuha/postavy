
const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();

alert("часы: " + currentHour + ", минуты: " + currentMinute);

const timeArray = [
  { hour: 7, minute: 3 },
  { hour: 7, minute: 33 },
  { hour: 8, minute: 38 },
  { hour: 8, minute: 58 },
  { hour: 11, minute: 8 },
  { hour: 11, minute: 33 },
  { hour: 11, minute: 58 },
  { hour: 12, minute: 28 },
  { hour: 12, minute: 53 },
  { hour: 13, minute: 48 },
  { hour: 14, minute: 18 },
  { hour: 15, minute: 13 },
  { hour: 15, minute: 43 },
  { hour: 16, minute: 33 },
  { hour: 17, minute: 3 },
  { hour: 17, minute: 23 },
  { hour: 17, minute: 53 },
  { hour: 18, minute: 13 },
  { hour: 18, minute: 43 },
];

for (let i = 0 ; i < timeArray.length; i++) {
    if ( currentHour == timeArray[i].hour && (currentMinute < timeArray[i].minute) ) {
      let minuteForBus = timeArray[i].minute - currentMinute;
      alert( 'Маршрут №1 \nдо ближайшего автобуса: ' + minuteForBus + ' минут');
      break;
    } else if (currentHour < timeArray[i].hour) {
      let minuteForBus = (60 - currentMinute) + timeArray[i].minute;
      alert('Маршрут №1 \nдо ближайшего автобуса: ' + minuteForBus + ' минут');
      break;
    }
}

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// } else {
//   // Геолокация не поддерживается
//  alert("Geolocation is not supported by this browser.");
// }

// function successCallback(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
//   alert("Latitude: " + latitude + ", Longitude: " + longitude);
// }

// function errorCallback(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       alert("User denied the request for Geolocation.");
//       break;
//     case error.POSITION_UNAVAILABLE:
//       alert("Location information is unavailable.");
//       break;
//     case error.TIMEOUT:
//       alert("The request to get user location timed out.");
//       break;
//     case error.UNKNOWN_ERROR:
//       alert("An unknown error occurred.");
//       break;
//   }
// }
