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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById('create-styles').onclick = () => {
    const createTheme = document.getElementById('generateThemes').value;
    parent.postMessage({
        pluginMessage: {
            type: 'create-styles', createTheme
        }
    }, '*');
};
document.getElementById('switch-styles').onclick = () => {
    const newThemeName = document.getElementById('themes').value;
    parent.postMessage({ pluginMessage: { type: 'switch-styles', newThemeName } }, '*');
};
document.getElementById('relink-styles').onclick = () => {
    const newThemeName = document.getElementById('themes').value;
    parent.postMessage({ pluginMessage: { type: 'relink-styles', newThemeName } }, '*');
};
document.getElementById('create-custom').onclick = () => {
    const newTheme = (document.getElementById('custom-theme'));
    const newThemeCode = newTheme.value;
    parent.postMessage({ pluginMessage: { type: 'create-custom', newThemeCode } }, '*');
};
// document.getElementById('load-themes').onclick = () => {
//   parent.postMessage({ pluginMessage: { type: 'load-themes'} }, '*')
// }
const tabButtonGenerate = document.getElementById('tab-button-generate');
const tabButtonTheme = document.getElementById('tab-button-theme');
const tabButtonCreate = document.getElementById('tab-button-create');
const tabButtonGuide = document.getElementById('tab-button-guide');
const tabContentGenerate = document.getElementById('contentGenerate');
const tabContentTheme = document.getElementById('contentTheme');
const tabContentCreate = document.getElementById('contentCreate');
const tabContentGuide = document.getElementById('contentGuide');
function addActive(button, content) {
    button.classList.add('active');
    content.classList.add('active');
}
function removeActive() {
    var activeItems = document.querySelectorAll('.active');
    [].forEach.call(activeItems, function (el) {
        el.classList.remove('active');
    });
}
tabButtonGenerate.onclick = function () {
    removeActive();
    addActive(tabButtonGenerate, tabContentGenerate);
};
tabButtonTheme.onclick = function () {
    removeActive();
    addActive(tabButtonTheme, tabContentTheme);
};
tabButtonCreate.onclick = function () {
    removeActive();
    addActive(tabButtonCreate, tabContentCreate);
};
tabButtonGenerate.click();
// document.getElementById('load-themes').click()


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQixzQ0FBc0MsRUFBRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLHNDQUFzQyxFQUFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQixzQ0FBc0MsRUFBRTtBQUNqRjtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQixxQkFBcUIsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpLnRzXCIpO1xuIiwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1zdHlsZXMnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVRoZW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlVGhlbWVzJykudmFsdWU7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgdHlwZTogJ2NyZWF0ZS1zdHlsZXMnLCBjcmVhdGVUaGVtZVxuICAgICAgICB9XG4gICAgfSwgJyonKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLXN0eWxlcycpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3VGhlbWVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lcycpLnZhbHVlO1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3N3aXRjaC1zdHlsZXMnLCBuZXdUaGVtZU5hbWUgfSB9LCAnKicpO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxpbmstc3R5bGVzJykub25jbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUaGVtZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWVzJykudmFsdWU7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAncmVsaW5rLXN0eWxlcycsIG5ld1RoZW1lTmFtZSB9IH0sICcqJyk7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1jdXN0b20nKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tdGhlbWUnKSk7XG4gICAgY29uc3QgbmV3VGhlbWVDb2RlID0gbmV3VGhlbWUudmFsdWU7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnY3JlYXRlLWN1c3RvbScsIG5ld1RoZW1lQ29kZSB9IH0sICcqJyk7XG59O1xuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWQtdGhlbWVzJykub25jbGljayA9ICgpID0+IHtcbi8vICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnbG9hZC10aGVtZXMnfSB9LCAnKicpXG4vLyB9XG5jb25zdCB0YWJCdXR0b25HZW5lcmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItYnV0dG9uLWdlbmVyYXRlJyk7XG5jb25zdCB0YWJCdXR0b25UaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItYnV0dG9uLXRoZW1lJyk7XG5jb25zdCB0YWJCdXR0b25DcmVhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLWJ1dHRvbi1jcmVhdGUnKTtcbmNvbnN0IHRhYkJ1dHRvbkd1aWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi1idXR0b24tZ3VpZGUnKTtcbmNvbnN0IHRhYkNvbnRlbnRHZW5lcmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50R2VuZXJhdGUnKTtcbmNvbnN0IHRhYkNvbnRlbnRUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50VGhlbWUnKTtcbmNvbnN0IHRhYkNvbnRlbnRDcmVhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudENyZWF0ZScpO1xuY29uc3QgdGFiQ29udGVudEd1aWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnRHdWlkZScpO1xuZnVuY3Rpb24gYWRkQWN0aXZlKGJ1dHRvbiwgY29udGVudCkge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKCkge1xuICAgIHZhciBhY3RpdmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3RpdmUnKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoYWN0aXZlSXRlbXMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbn1cbnRhYkJ1dHRvbkdlbmVyYXRlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlQWN0aXZlKCk7XG4gICAgYWRkQWN0aXZlKHRhYkJ1dHRvbkdlbmVyYXRlLCB0YWJDb250ZW50R2VuZXJhdGUpO1xufTtcbnRhYkJ1dHRvblRoZW1lLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlQWN0aXZlKCk7XG4gICAgYWRkQWN0aXZlKHRhYkJ1dHRvblRoZW1lLCB0YWJDb250ZW50VGhlbWUpO1xufTtcbnRhYkJ1dHRvbkNyZWF0ZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUFjdGl2ZSgpO1xuICAgIGFkZEFjdGl2ZSh0YWJCdXR0b25DcmVhdGUsIHRhYkNvbnRlbnRDcmVhdGUpO1xufTtcbnRhYkJ1dHRvbkdlbmVyYXRlLmNsaWNrKCk7XG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC10aGVtZXMnKS5jbGljaygpXG4iXSwic291cmNlUm9vdCI6IiJ9