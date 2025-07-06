const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const busStop = [
  {name: 'ПТУ', loc: 55.1178117, timeArrivalBus1: [
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
]}
];

function findObject(array, key, value) {
  return array.find(item => item[key] === value);
}


// Получаем данные локации
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
 alert("Geolocation is not supported by this browser.");
}
function successCallback(position) {

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const foundObject = findObject(busStop, 'loc', latitude);

  for (let i = 0 ; i < foundObject.timeArrivalBus1.length; i++) {
      if ( currentHour == foundObject.timeArrivalBus1.hour && (currentMinute < foundObject.timeArrivalBus1.minute) ) {
        let minuteForBus = foundObject.timeArrivalBus1[i].minute - currentMinute;
        alert('Ваша остановка ' + foundObject.name + '\nМаршрут №1 \nДо ближайшего автобуса: ' + minuteForBus + ' минут');
        break;
      } else if (currentHour < foundObject.timeArrivalBus1[i].hour) {
        let minuteForBus = (60 - currentMinute) + foundObject.timeArrivalBus1[i].minute;
        alert('Ваша остановка ' + foundObject.name + '\nМаршрут №1 \nдо ближайшего автобуса: ' + minuteForBus + ' минут');
        break;
      }
  }  
}

function errorCallback(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}
