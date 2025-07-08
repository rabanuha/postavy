
const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();

const busStop = [
  {name: 'ПТУ', latitudeBus: 55.1175, longitudeBus: 26.8250, timeArrivalBus1: [
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
  { hour: 18, minute: 43 }
]}, {name: 'Льнозавод', latitudeBus: 55.1181, longitudeBus: 26.8240, timeArrivalBus1: [
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
  { hour: 18, minute: 43 }
]}
];




// функция поиска остановки
function findObject(array, key1, value1, key2, value2) {
  let closestObject = null;
  let minDifference = Infinity;

  array.forEach(obj => {
      const diff1 = Math.abs(obj[key1] - value1);
      const diff2 = Math.abs(obj[key2] - value2);
      const totalDifference = diff1 + diff2;

      if (totalDifference < minDifference) {
        minDifference = totalDifference;
        findObject = obj;
      }
    
  });

  return findObject;
}


// Получаем данные локации
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
 alert("Geolocation is not supported by this browser.");
}

// функция получения координат и определение остановки

function successCallback(position) {

  const latitude = Math.trunc(position.coords.latitude * 10000) / 10000;
  const longitude = Math.trunc(position.coords.longitude * 10000) / 10000;
  alert(latitude + " " + longitude);
  const foundObject = findObject(busStop, 'latitudeBus', latitude, 'longitudeBus', longitude);

if (foundObject) {
    for (let i = 0 ; i < foundObject.timeArrivalBus1.length; i++) {
        if ( currentHour == foundObject.timeArrivalBus1.hour && (currentMinute < foundObject.timeArrivalBus1.minute) ) {
          let minuteForBus = foundObject.timeArrivalBus1[i].minute - currentMinute;
          alert('Ваша остановка ' + foundObject.name + '\nМаршрут №1 \nдо ближайшего автобуса: ' + minuteForBus + ' минут');
          break;
        } else if (currentHour < foundObject.timeArrivalBus1[i].hour) {
          let minuteForBus = (60 - currentMinute) + foundObject.timeArrivalBus1[i].minute;
          alert('Ваша остановка ' + foundObject.name + '\nМаршрут №1 \nдо ближайшего автобуса: ' + minuteForBus + ' минут');
          break;
        }
    }
    
  } else {
    alert('Подойдите к остановке');
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
