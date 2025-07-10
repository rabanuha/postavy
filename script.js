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
  { hour: 18, minute: 43 }], timeArrivalBus3: [
  { hour: 6, minute: 33 },
  { hour: 7, minute: 23 },
  { hour: 8, minute: 13 },
  { hour: 8, minute: 48 },
  { hour: 9, minute: 13 },
  { hour: 9, minute: 43 },
  { hour: 10, minute: 8 },
  { hour: 10, minute: 28 },
  { hour: 11, minute: 48 },
  { hour: 12, minute: 43 },
  { hour: 13, minute: 3 },
  { hour: 13, minute: 30 },
  { hour: 13, minute: 58 },
  { hour: 14, minute: 28 },
  { hour: 14, minute: 48 },
  { hour: 15, minute: 22 },
  { hour: 16, minute: 43 },
  { hour: 17, minute: 13 },
  { hour: 17, minute: 33 },
  { hour: 18, minute: 3 },
  { hour: 18, minute: 23 },]
}, 
  {name: 'Льнозавод', latitudeBus: 55.1181, longitudeBus: 26.8240, timeArrivalBus1: [
  { hour: 7, minute: 3 }], timeArrivalBus3: [
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
  { hour: 18, minute: 43 }]
}, 
  {name: 'Кирмаш-напротив', latitudeBus: 55.1156, longitudeBus: 26.8295, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Кирмаш-Хит-Копеечка', latitudeBus: 55.1159, longitudeBus: 26.8293, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Купалинка', latitudeBus: 55.1141, longitudeBus: 26.8337, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Худ. школа', latitudeBus: 55.1137, longitudeBus: 26.8340, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Краевед. музей', latitudeBus: 55.1139, longitudeBus: 26.8387, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Дет. библиотека', latitudeBus: 55.1135, longitudeBus: 26.8402, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'РДК', latitudeBus: 55.1132, longitudeBus: 26.8454, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Мясная лавка', latitudeBus: 55.1131, longitudeBus: 26.8460, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Белит', latitudeBus: 55.1131, longitudeBus: 26.8543, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'маг. Вемс', latitudeBus: 55.1129, longitudeBus: 26.8566, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Поставымебель', latitudeBus: 55.1129, longitudeBus: 26.8622, timeArrivalBus1: [
  { hour: 6, minute: 36 },
  { hour: 7, minute: 21 },
  { hour: 7, minute: 36 },
  { hour: 8, minute: 16 },
  { hour: 8, minute: 36 },
  { hour: 11, minute: 36 },
  { hour: 12, minute: 6 },
  { hour: 12, minute: 31 },
  { hour: 12, minute: 56 },
  { hour: 13, minute: 26 },
  { hour: 13, minute: 51 },
  { hour: 14, minute: 16 },
  { hour: 14, minute: 46 },
  { hour: 16, minute: 11 },
  { hour: 16, minute: 41 },
  { hour: 17, minute: 1 },
  { hour: 17, minute: 31 },
  { hour: 17, minute: 51 },
  { hour: 18, minute: 21 },
  { hour: 18, minute: 46 },
  { hour: 19, minute: 11 },
  { hour: 19, minute: 41 },
  { hour: 20, minute: 6 },



], timeArrivalBus3: [
  { hour: 7, minute: 3 }]
},
  {name: 'Суши WOK', latitudeBus: 55.1127, longitudeBus: 26.8623, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Детский сад', latitudeBus: 55.1125, longitudeBus: 26.8700, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'ДЭУ', latitudeBus: 55.1126, longitudeBus: 26.8723, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Поставский лесхоз', latitudeBus: 55.1124, longitudeBus: 26.8735, timeArrivalBus1: [
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
  { hour: 18, minute: 43 }], timeArrivalBus3: [

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
  { hour: 18, minute: 43 }]
},
  {name: 'Лимончик', latitudeBus: 55.1139, longitudeBus: 26.8736, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Теремок', latitudeBus: 55.1143, longitudeBus: 26.8738, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Станкевича', latitudeBus: 55.1169, longitudeBus: 26.8776, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Школа №3', latitudeBus: 55.1208, longitudeBus: 26.8145, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Fix Price', latitudeBus: 55.1204, longitudeBus: 26.8152, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Полевая', latitudeBus: 55.1222, longitudeBus: 26.8087, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Суд', latitudeBus: 55.1076, longitudeBus: 26.8389, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Гостиница', latitudeBus: 55.1074, longitudeBus: 26.8386, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'АТП №16 (на площадь)', latitudeBus: 55.1052, longitudeBus: 26.8386, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'АТП №16', latitudeBus: 55.1050, longitudeBus: 26.8383, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Больница', latitudeBus: 55.1035, longitudeBus: 26.8384, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Больница (на площадь)', latitudeBus: 55.1028, longitudeBus: 26.8387, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Сельхозтехника', latitudeBus: 55.1029, longitudeBus: 26.8452, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Мягкая жизнь (Гагарина)', latitudeBus: 55.1036, longitudeBus: 26.8455, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Кляро', latitudeBus: 55.1069, longitudeBus: 26.8458, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Стройтеплоком (Кларо)', latitudeBus: 55.1068, longitudeBus: 26.8458, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Средняя школа №2', latitudeBus: 55.1069, longitudeBus: 26.8502, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Средняя школа №2 (на Станкевича)', latitudeBus: 55.1068, longitudeBus: 26.8302, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Песочная', latitudeBus: 55.1068, longitudeBus: 26.8538, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Песочная(на Станкевича)', latitudeBus: 55.1066, longitudeBus: 26.8561, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Мелиоративная', latitudeBus: 55.1068, longitudeBus: 26.8624, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Мелиоративная(на Станкевича)', latitudeBus: 55.1070, longitudeBus: 26.8627, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]},
  {name: 'Средняя школа №1', latitudeBus: 55.1099, longitudeBus: 26.8628, timeArrivalBus1: [

  { hour: 7, minute: 3 }], timeArrivalBus3: [

  { hour: 7, minute: 1 },
  { hour: 7, minute: 26 },
  { hour: 7, minute: 51 },
  { hour: 8, minute: 26 },
  { hour: 8, minute: 46 },
  { hour: 9, minute: 21 },
  { hour: 9, minute: 46 },
  { hour: 10, minute: 10 },
  { hour: 11, minute: 1 },
  { hour: 12, minute: 21 },
  { hour: 12, minute: 36 },
  { hour: 13, minute: 11 },
  { hour: 13, minute: 36 },
  { hour: 14, minute: 1 },
  { hour: 14, minute: 26 },
  { hour: 15, minute: 1 },
  { hour: 15, minute: 21 },
  { hour: 16, minute: 51 },
  { hour: 17, minute: 11 },
  { hour: 17, minute: 41 },
  { hour: 18, minute: 1 }
]},
  {name: 'Нотариальная контора', latitudeBus: 55.1102, longitudeBus: 26.8631, timeArrivalBus1: [
  { hour: 7, minute: 3 }
]}];




// Получаем данные локации



// функция получения координат и определение остановки
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


function successCallback(position) {
  const latitude = Math.trunc(position.coords.latitude * 10000) / 10000;
  const longitude = Math.trunc(position.coords.longitude * 10000) / 10000;
  alert(latitude + " " + longitude);
  const foundObject = findObject(busStop, 'latitudeBus', latitude, 'longitudeBus', longitude);
  alert(foundObject.name);
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
      for (let i = 0 ; i < foundObject.timeArrivalBus3.length; i++) {
          if ( currentHour == foundObject.timeArrivalBus3.hour && (currentMinute < foundObject.timeArrivalBus3.minute) ) {
            let minuteForBus = foundObject.timeArrivalBus3[i].minute - currentMinute;
            alert('Ваша остановка ' + foundObject.name + '\nМаршрут №3 \nдо ближайшего автобуса: ' + minuteForBus + ' минут');
            break;
          } else if (currentHour < foundObject.timeArrivalBus3[i].hour) {
            let minuteForBus = (60 - currentMinute) + foundObject.timeArrivalBus3[i].minute;
            alert('Ваша остановка ' + foundObject.name + '\nМаршрут №3 \nдо ближайшего автобуса: ' + minuteForBus + ' минут');
            break;
          }
      }
    } 


  } 
    
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
 alert("Geolocation is not supported by this browser.");
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
  
