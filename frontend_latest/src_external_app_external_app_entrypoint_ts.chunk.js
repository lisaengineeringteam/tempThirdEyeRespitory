"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_external_app_external_app_entrypoint_ts"],{

/***/ "./src/external_app/external_app_entrypoint.ts":
/*!*****************************************************!*\
  !*** ./src/external_app/external_app_entrypoint.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attachExternalToApp\": () => (/* binding */ attachExternalToApp)\n/* harmony export */ });\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/*\nAll commands that do UI stuff need to be loaded from the app bundle as UI stuff\nin core bundle slows things down and causes duplicate registration.\n\nThis is the entry point for providing external app stuff from app entrypoint.\n*/\n\nconst attachExternalToApp = hassMainEl => {\n  window.addEventListener(\"haptic\", ev => hassMainEl.hass.auth.external.fireMessage({\n    type: \"haptic\",\n    payload: {\n      hapticType: ev.detail\n    }\n  }));\n  hassMainEl.hass.auth.external.addCommandHandler(msg => handleExternalMessage(hassMainEl, msg));\n};\n\nconst handleExternalMessage = (hassMainEl, msg) => {\n  const bus = hassMainEl.hass.auth.external;\n\n  if (msg.command === \"restart\") {\n    hassMainEl.hass.connection.reconnect(true);\n    bus.fireMessage({\n      id: msg.id,\n      type: \"result\",\n      success: true,\n      result: null\n    });\n  } else if (msg.command === \"notifications/show\") {\n    (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__.fireEvent)(hassMainEl, \"hass-show-notifications\");\n    bus.fireMessage({\n      id: msg.id,\n      type: \"result\",\n      success: true,\n      result: null\n    });\n  } else {\n    return false;\n  }\n\n  return true;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2FwcF9lbnRyeXBvaW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBR0E7O0FBRUE7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2FwcF9lbnRyeXBvaW50LnRzPzA0ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkFsbCBjb21tYW5kcyB0aGF0IGRvIFVJIHN0dWZmIG5lZWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIGFwcCBidW5kbGUgYXMgVUkgc3R1ZmZcbmluIGNvcmUgYnVuZGxlIHNsb3dzIHRoaW5ncyBkb3duIGFuZCBjYXVzZXMgZHVwbGljYXRlIHJlZ2lzdHJhdGlvbi5cblxuVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHByb3ZpZGluZyBleHRlcm5hbCBhcHAgc3R1ZmYgZnJvbSBhcHAgZW50cnlwb2ludC5cbiovXG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnRNYWluIH0gZnJvbSBcIi4uL2xheW91dHMvaG9tZS1hc3Npc3RhbnQtbWFpblwiO1xuaW1wb3J0IHR5cGUgeyBFTUV4dGVybmFsTWVzc2FnZUNvbW1hbmRzIH0gZnJvbSBcIi4vZXh0ZXJuYWxfbWVzc2FnaW5nXCI7XG5cbmV4cG9ydCBjb25zdCBhdHRhY2hFeHRlcm5hbFRvQXBwID0gKGhhc3NNYWluRWw6IEhvbWVBc3Npc3RhbnRNYWluKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFwdGljXCIsIChldikgPT5cbiAgICBoYXNzTWFpbkVsLmhhc3MuYXV0aC5leHRlcm5hbCEuZmlyZU1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJoYXB0aWNcIixcbiAgICAgIHBheWxvYWQ6IHsgaGFwdGljVHlwZTogZXYuZGV0YWlsIH0sXG4gICAgfSlcbiAgKTtcblxuICBoYXNzTWFpbkVsLmhhc3MuYXV0aC5leHRlcm5hbCEuYWRkQ29tbWFuZEhhbmRsZXIoKG1zZykgPT5cbiAgICBoYW5kbGVFeHRlcm5hbE1lc3NhZ2UoaGFzc01haW5FbCwgbXNnKVxuICApO1xufTtcblxuY29uc3QgaGFuZGxlRXh0ZXJuYWxNZXNzYWdlID0gKFxuICBoYXNzTWFpbkVsOiBIb21lQXNzaXN0YW50TWFpbixcbiAgbXNnOiBFTUV4dGVybmFsTWVzc2FnZUNvbW1hbmRzXG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgYnVzID0gaGFzc01haW5FbC5oYXNzLmF1dGguZXh0ZXJuYWwhO1xuXG4gIGlmIChtc2cuY29tbWFuZCA9PT0gXCJyZXN0YXJ0XCIpIHtcbiAgICBoYXNzTWFpbkVsLmhhc3MuY29ubmVjdGlvbi5yZWNvbm5lY3QodHJ1ZSk7XG4gICAgYnVzLmZpcmVNZXNzYWdlKHtcbiAgICAgIGlkOiBtc2cuaWQsXG4gICAgICB0eXBlOiBcInJlc3VsdFwiLFxuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHJlc3VsdDogbnVsbCxcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtc2cuY29tbWFuZCA9PT0gXCJub3RpZmljYXRpb25zL3Nob3dcIikge1xuICAgIGZpcmVFdmVudChoYXNzTWFpbkVsLCBcImhhc3Mtc2hvdy1ub3RpZmljYXRpb25zXCIpO1xuICAgIGJ1cy5maXJlTWVzc2FnZSh7XG4gICAgICBpZDogbXNnLmlkLFxuICAgICAgdHlwZTogXCJyZXN1bHRcIixcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICByZXN1bHQ6IG51bGwsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/external_app/external_app_entrypoint.ts\n");

/***/ })

}]);