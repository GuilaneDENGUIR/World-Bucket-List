/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: data, getData, putData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putData\", function() { return putData; });\n/* harmony import */ var _dream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dream.js */ \"./src/dream.js\");\n\r\n\r\nlet data;\r\n\r\nfunction getData()\r\n{\r\n    const req = new XMLHttpRequest();\r\n    const method = \"GET\";\r\n    const url = \"https://world-bucket-lis-1549812567015.firebaseio.com/dreams.json\";\r\n\r\n    req.open(method,url);\r\n\r\n    req.onreadystatechange = function(event){\r\n        if(this.readyState === XMLHttpRequest.DONE)\r\n        {\r\n            if(this.status === 200)\r\n            {\r\n                data = JSON.parse(this.responseText);\r\n                Object(_dream_js__WEBPACK_IMPORTED_MODULE_0__[\"BuildAllDreams\"])();\r\n            }\r\n            else\r\n            {\r\n                console.log(\"Status: \", this.status);\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    req.send();\r\n}\r\n\r\nfunction putData()\r\n{\r\n    const req = new XMLHttpRequest();\r\n    const method = \"PUT\";\r\n    const url = \"https://world-bucket-lis-1549812567015.firebaseio.com/dreams.json\";\r\n\r\n    req.open(method,url);\r\n\r\n    req.onreadystatechange = function(event){\r\n        if(this.readyState === XMLHttpRequest.DONE)\r\n        {\r\n            if(this.status === 200)\r\n            {\r\n                console.log(JSON.parse(this.responseText));\r\n            }\r\n            else\r\n            {\r\n                console.log(\"Status: \", this.status);\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    req.send(JSON.stringify(data));\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/dream.js":
/*!**********************!*\
  !*** ./src/dream.js ***!
  \**********************/
/*! exports provided: BuildAllDreams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BuildAllDreams\", function() { return BuildAllDreams; });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ \"./src/map.js\");\n\r\n\r\n\r\n\r\nconst dreamsContainer = document.querySelector(\"#dreams-container\");\r\n\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n\r\nfunction BuildAllDreams()\r\n{\r\n    while(dreamsContainer.hasChildNodes())\r\n    {\r\n        dreamsContainer.removeChild(dreamsContainer.lastChild);\r\n    }\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"data\"].forEach(buildOneDream);\r\n    addDreamsListeners();\r\n}\r\n\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n\r\nfunction buildOneDream(dream)\r\n{   \r\n    const dreamElement = document.createElement(\"div\");\r\n    dreamElement.innerHTML = \r\n    `<div class=\"card text-center\" id=\"${dream.id}\">\r\n        <h4 class=\"card-header font-weight-bold\">${dream.description}</h4>\r\n        <img src=${dream.imagePath} class=\"card-img-top\" alt=\"\">\r\n        <div class=\"card-body\">\r\n            <a href=\"#\" class=\"button-action btn btn-${dream.done ? \"secondary\":\"danger\"} btn-block font-weight-bold\">${dream.done ? \"Je veux le refaire\":\"Je me lance !\"}</a>\r\n        </div>\r\n        <div class=\"card-footer text-muted text-right\">\r\n          <a href=\"#\" type=\"button\" class=\"button-visit btn btn-outline-secondary btn-sm\">Visiter</a>\r\n          <a href=\"${dream.link}\" target=\"_blank\" type=\"button\" class=\"btn btn-outline-dark btn-sm\">Plus d'info</a>\r\n        </div>\r\n    </div>`;\r\n    dreamsContainer.appendChild(dreamElement);\r\n    Object(_map_js__WEBPACK_IMPORTED_MODULE_1__[\"addMarkerOnMap\"])(dream);\r\n\r\n}\r\n\r\nfunction addDreamsListeners()\r\n{\r\n    document.querySelectorAll(\".button-visit\").forEach(item => {\r\n        item.addEventListener(\"click\", event => {\r\n            visitDream(item.parentElement.parentElement.getAttribute(\"id\"));\r\n        })\r\n    });\r\n\r\n    document.querySelectorAll(\".button-action\").forEach(item => {\r\n        item.addEventListener(\"click\", event => {\r\n            toggleDreamDone(item.parentElement.parentElement.getAttribute(\"id\"));\r\n            BuildAllDreams();\r\n        })\r\n    });\r\n}\r\n\r\nfunction visitDream(dreamId)\r\n{\r\n    let position = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"data\"].filter(item => item.id == dreamId)[0].coordinates;\r\n    Object(_map_js__WEBPACK_IMPORTED_MODULE_1__[\"visitDreamOnMap\"])(position);\r\n}\r\n\r\nfunction toggleDreamDone(dreamId)\r\n{\r\n    let dream = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"data\"].filter(item => item.id == dreamId)[0];\r\n    dream.done = !dream.done;\r\n    Object(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"putData\"])();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/dream.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./src/map.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\r\n\r\n\r\n\r\n\r\nfunction init()\r\n{\r\n    Object(_map_js__WEBPACK_IMPORTED_MODULE_0__[\"initMap\"])();\r\n    Object(_data_js__WEBPACK_IMPORTED_MODULE_1__[\"getData\"])();\r\n}\r\n\r\nwindow.init = init;\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: initMap, addMarkerOnMap, visitDreamOnMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMap\", function() { return initMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMarkerOnMap\", function() { return addMarkerOnMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"visitDreamOnMap\", function() { return visitDreamOnMap; });\n\r\nlet map;\r\nlet panorama;\r\nconst panoramaElement = document.querySelector(\"#panorama\");\r\n\r\nconst resetMapButton = document.querySelector(\"#reset-map\");\r\nconst backToMapButton = document.querySelector(\"#back-to-map\");\r\n\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n//----------------------------------------------------------------------------------------------------------------------------\r\nfunction initMap() {\r\n    map = new google.maps.Map(document.getElementById('map'), {\r\n        center: {lat: 48.858159, lng: 2.294497},\r\n        zoom: 2,\r\n        streetViewControl: false\r\n    });\r\n\r\n    panorama = new google.maps.StreetViewPanorama(\r\n    document.getElementById('panorama'), {\r\n        position: {lat: 48.858159, lng: 2.294497},\r\n        pov: {\r\n        heading: 34,\r\n        pitch: 10\r\n        }\r\n    });\r\n\r\n    addMapListeners();\r\n    panoramaElement.style.display = \"none\";\r\n    backToMapButton.style.display = \"none\";\r\n\r\n\r\n}\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n//----------------------------------------------------------------------------------------------------------------------------\r\nfunction addMapListeners()\r\n{\r\n    resetMapButton.addEventListener(\"click\", resetMap);\r\n    backToMapButton.addEventListener(\"click\", backToMap);\r\n\r\n}\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n//----------------------------------------------------------------------------------------------------------------------------\r\nfunction addMarkerOnMap(dream)\r\n{\r\n    const marker = new google.maps.Marker({\r\n        position: dream.coordinates,\r\n        map: map,\r\n        icon: dream.done ? \"images/marker_done.png\":\"images/marker.png\"\r\n    });\r\n\r\n    marker.addListener('click', function() {\r\n        \r\n       zoomOn(marker.getPosition());\r\n    });\r\n    \r\n    panoramaElement.style.display = \"none\";\r\n    backToMapButton.style.display = \"none\";\r\n}\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n//----------------------------------------------------------------------------------------------------------------------------\r\nfunction zoomOn(position)\r\n{\r\n    map.setZoom(20);\r\n    map.setCenter(position);\r\n    map.setMapTypeId(\"satellite\");\r\n}\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n//----------------------------------------------------------------------------------------------------------------------------\r\nfunction resetMap()\r\n{\r\n    map.setZoom(2);\r\n    map.setCenter({lat: 48.858159, lng: 2.294497});\r\n    map.setMapTypeId(\"roadmap\");\r\n}\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n//----------------------------------------------------------------------------------------------------------------------------\r\n\r\nfunction backToMap()\r\n{\r\n    panoramaElement.style.display = \"none\";\r\n    backToMapButton.style.display = \"none\";\r\n    resetMapButton.style.display = \"block\";\r\n}\r\n\r\n\r\nfunction visitDreamOnMap(position)\r\n{\r\n    panorama.setPosition(position);\r\n    panoramaElement.style.display = \"block\";\r\n    backToMapButton.style.display = \"block\";\r\n    resetMapButton.style.display = \"none\";\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ })

/******/ });