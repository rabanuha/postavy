const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const nearestBus = document.querySelector(".nearestBus");
const bus = document.querySelector(".bus");


const busStop = [
  {name: 'ПТУ', latitudeBus: 55.1175, longitudeBus: 26.8250, routes : [{ numberBus : '1', timeHourMinute : [
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
    { hour: 18, minute: 43 }]}, 
    { numberBus : '3', timeHourMinute : [
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
    { hour: 18, minute: 23 }]},
    { numberBus : '3тк', timeHourMinute : [
    { hour: 7, minute: 5 },
    { hour: 8, minute: 5 },
    { hour: 9, minute: 6 },
    { hour: 10, minute: 14 },
    { hour: 11, minute: 0 },
    { hour: 12, minute: 55 },
    { hour: 13, minute: 45 },
    { hour: 15, minute: 31 },
    { hour: 16, minute: 30 },
    { hour: 17, minute: 30 },
    { hour: 18, minute: 18 },
    { hour: 19, minute: 11 }]},
    { numberBus : '1тк', timeHourMinute : [
    { hour: 9, minute: 3 }]}]}, 

  // -------------------------------------

  {name: 'Льнозавод', latitudeBus: 55.1181, longitudeBus: 26.8240, timeArrivalBus1: [
  { hour: 7, minute: 3 }], timeArrivalBus3: [{ hour: 7, minute: 3 }]
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



function handleClick(event) {

  let parent = bus.parentNode;
  parent.removeChild(bus);
  parent.removeChild(nearestBus);


  function timeArrivalBus(array, hour, minute) {
    
    const arrivalTimeBus = [{name : array.name}];
        for (let i = 0 ; i < array.routes.length; i++) {
          for (let j = 0 ; j < array.routes[i].timeHourMinute.length; j++) {
                if ( hour == array.routes[i].timeHourMinute[j].hour && (minute < array.routes[i].timeHourMinute[j].minute) ) {
                  arrivalTimeBus.push({bus : array.routes[i].numberBus, minute : (array.routes[i].timeHourMinute[j].minute - minute)});
                  break;
                } else if (hour < array.routes[i].timeHourMinute[j].hour) {
                  // let minuteForBus = (60 - currentMinute) + array.routes[i].timeHourMinute[j].minute;
                  // let numberForBus = array.routes[i].numberBus
                  arrivalTimeBus.push({bus : array.routes[i].numberBus, minute : ((60 - currentMinute) + array.routes[i].timeHourMinute[j].minute)});
                  break;
                  }
          }
        }      

    return arrivalTimeBus;
  }


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
    // const latitude = Math.trunc(position.coords.latitude * 10000) / 10000;
    // const longitude = Math.trunc(position.coords.longitude * 10000) / 10000;
    // alert(latitude + " " + longitude);
    const foundObject = findObject(busStop, 'latitudeBus', 55.1175, 'longitudeBus', 26.8250);
    const tA = timeArrivalBus(foundObject, currentHour, currentMinute);
    objToDiv(tA);
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
  
}

nearestBus.addEventListener('click', handleClick);

function objToDiv(array) {
  console.log(array);
  const interactiveBlock = document.querySelector(".interactive-block");
  interactiveBlock.style.backgroundColor = "white";

  const stopBusName = document.createElement('div');
  stopBusName.classList.add('stop-bus-name');
  stopBusName.textContent = 'остановка: ' + array[0].name;
  interactiveBlock.appendChild(stopBusName);
  const blockSceduleBuses = document.createElement('div');
  blockSceduleBuses.classList.add('block-scedule-buses');
  interactiveBlock.appendChild(blockSceduleBuses);

  for (var i = 1; i < array.length; i++) {
    const  blockSceduleBus = document.createElement('div');
    blockSceduleBus.classList.add('block-scedule-bus');
    blockSceduleBuses.appendChild(blockSceduleBus);


    const numBusBlock = document.createElement('div');
    numBusBlock.classList.add('num-bus-block');
    blockSceduleBus.appendChild(numBusBlock);

    const numBusImg = document.createElement('div');
    numBusImg.classList.add('num-bus-img');
    numBusBlock.appendChild(numBusImg);

    const numBus = document.createElement('div');
    numBus.classList.add('num-bus');
    numBus.textContent = array[i].bus;
    numBusBlock.appendChild(numBus);


    const timeBus = document.createElement('div');
    timeBus.classList.add('time-bus');
    timeBus.textContent = 'через: ' + array[i].minute + ' мин.';
    blockSceduleBus.appendChild(timeBus);
  }
}






