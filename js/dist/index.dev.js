"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = updateEverySec;

var _displayNextLaunch = _interopRequireDefault(require("./displayNextLaunch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// picking up the correct url
var NEXT_LAUNCH = "https://api.spacexdata.com/v4/launches/next"; // this variabel is going to be fill up later
// asyn function that is going to fetch

function getProducts() {
  var response, json, data;
  return regeneratorRuntime.async(function getProducts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(NEXT_LAUNCH));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          json = _context.sent;
          data = json;
          (0, _displayNextLaunch["default"])(data);
          updateEverySec(data);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0); // displayMessage("error", error, "container");

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

getProducts();

function updateEverySec(data) {
  var nextLaunchDate = new Date(data.date_local);
  var countDownDate = new Date(nextLaunchDate).getTime();
  var day = document.querySelector("#days");
  var hrs = document.querySelector("#hours");
  var minutes = document.querySelector("#min");
  var seconds = document.querySelector("#sec");
  var nextLanunchText = document.querySelector(".inner-counter p");
  setInterval(function () {
    var today = new Date().getTime();

    if (countDownDate > today) {
      var timeRemaining = countDownDate - today;
      var sec = Math.floor(timeRemaining / 1000);
      var min = Math.floor(sec / 60);
      var hours = Math.floor(min / 60);
      var days = Math.floor(hours / 24);
      hours %= 24;
      min %= 60;
      sec %= 60;
      day.innerHTML = "".concat(days);
      hrs.innerHTML = "".concat(hours < 10 ? "0" : "", " ").concat(hours);
      minutes.innerHTML = "".concat(min < 10 ? "0" : "", " ").concat(min);
      seconds.innerHTML = "".concat(sec < 10 ? "0" : "", " ").concat(sec);
    } else {
      nextLanunchText.textContent = 'Launch has ended';
      day.textContent = '00';
      hrs.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    }
  }, 1000);
}