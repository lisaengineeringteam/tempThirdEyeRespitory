"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_mixins_subscribe-mixin_ts"],{

/***/ "./src/mixins/subscribe-mixin.ts":
/*!***************************************!*\
  !*** ./src/mixins/subscribe-mixin.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeMixin\": () => (/* binding */ SubscribeMixin)\n/* harmony export */ });\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nconst SubscribeMixin = superClass => {\n  let SubscribeClass = _decorate(null, function (_initialize, _superClass) {\n    class SubscribeClass extends _superClass {\n      constructor(...args) {\n        super(...args);\n\n        _initialize(this);\n      }\n\n    }\n\n    return {\n      F: SubscribeClass,\n      d: [{\n        kind: \"field\",\n        decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_0__.property)({\n          attribute: false\n        })],\n        key: \"hass\",\n        value: void 0\n      }, {\n        kind: \"field\",\n        key: \"hassSubscribeRequiredHostProps\",\n        value: void 0\n      }, {\n        kind: \"field\",\n        key: \"__unsubs\",\n        value: void 0\n      }, {\n        kind: \"method\",\n        key: \"connectedCallback\",\n        value: // we wait with subscribing till these properties are set on the host element\n        function connectedCallback() {\n          _get(_getPrototypeOf(SubscribeClass.prototype), \"connectedCallback\", this).call(this);\n\n          this.__checkSubscribed();\n        }\n      }, {\n        kind: \"method\",\n        key: \"disconnectedCallback\",\n        value: function disconnectedCallback() {\n          _get(_getPrototypeOf(SubscribeClass.prototype), \"disconnectedCallback\", this).call(this);\n\n          if (this.__unsubs) {\n            while (this.__unsubs.length) {\n              const unsub = this.__unsubs.pop();\n\n              if (unsub instanceof Promise) {\n                unsub.then(unsubFunc => unsubFunc());\n              } else {\n                unsub();\n              }\n            }\n\n            this.__unsubs = undefined;\n          }\n        }\n      }, {\n        kind: \"method\",\n        key: \"updated\",\n        value: function updated(changedProps) {\n          _get(_getPrototypeOf(SubscribeClass.prototype), \"updated\", this).call(this, changedProps);\n\n          if (changedProps.has(\"hass\")) {\n            this.__checkSubscribed();\n\n            return;\n          }\n\n          if (!this.hassSubscribeRequiredHostProps) {\n            return;\n          }\n\n          for (const key of changedProps.keys()) {\n            if (this.hassSubscribeRequiredHostProps.includes(key)) {\n              this.__checkSubscribed();\n\n              return;\n            }\n          }\n        }\n      }, {\n        kind: \"method\",\n        key: \"hassSubscribe\",\n        value: function hassSubscribe() {\n          return [];\n        }\n      }, {\n        kind: \"method\",\n        key: \"__checkSubscribed\",\n        value: function __checkSubscribed() {\n          var _this$hassSubscribeRe;\n\n          if (this.__unsubs !== undefined || !this.isConnected || this.hass === undefined || (_this$hassSubscribeRe = this.hassSubscribeRequiredHostProps) !== null && _this$hassSubscribeRe !== void 0 && _this$hassSubscribeRe.some(prop => this[prop] === undefined)) {\n            return;\n          }\n\n          this.__unsubs = this.hassSubscribe();\n        }\n      }]\n    };\n  }, superClass);\n\n  return SubscribeClass;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWl4aW5zL3N1YnNjcmliZS1taXhpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFPQTtBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTs7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFlQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQUFBO0FBQUE7QUFBQTtBQThCQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQTtBQUFBO0FBQUE7QUFBQTtBQWlEQTtBQUNBO0FBbERBO0FBQUE7QUFBQTtBQUFBO0FBb0RBOztBQUNBO0FBUUE7QUFDQTs7QUFDQTtBQUNBO0FBaEVBO0FBQUE7QUFBQTs7QUFrRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL21peGlucy9zdWJzY3JpYmUtbWl4aW4udHM/MjdjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBQcm9wZXJ0eVZhbHVlcywgUmVhY3RpdmVFbGVtZW50IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFzc1N1YnNjcmliZUVsZW1lbnQge1xuICBoYXNzU3Vic2NyaWJlKCk6IFVuc3Vic2NyaWJlRnVuY1tdO1xufVxuXG5leHBvcnQgY29uc3QgU3Vic2NyaWJlTWl4aW4gPSA8VCBleHRlbmRzIENvbnN0cnVjdG9yPFJlYWN0aXZlRWxlbWVudD4+KFxuICBzdXBlckNsYXNzOiBUXG4pID0+IHtcbiAgY2xhc3MgU3Vic2NyaWJlQ2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICAgIC8vIHdlIHdhaXQgd2l0aCBzdWJzY3JpYmluZyB0aWxsIHRoZXNlIHByb3BlcnRpZXMgYXJlIHNldCBvbiB0aGUgaG9zdCBlbGVtZW50XG4gICAgcHJvdGVjdGVkIGhhc3NTdWJzY3JpYmVSZXF1aXJlZEhvc3RQcm9wcz86IHN0cmluZ1tdO1xuXG4gICAgcHJpdmF0ZSBfX3Vuc3Vicz86IEFycmF5PFVuc3Vic2NyaWJlRnVuYyB8IFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPj47XG5cbiAgICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fX2NoZWNrU3Vic2NyaWJlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICBpZiAodGhpcy5fX3Vuc3Vicykge1xuICAgICAgICB3aGlsZSAodGhpcy5fX3Vuc3Vicy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB1bnN1YiA9IHRoaXMuX191bnN1YnMucG9wKCkhO1xuICAgICAgICAgIGlmICh1bnN1YiBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHVuc3ViLnRoZW4oKHVuc3ViRnVuYykgPT4gdW5zdWJGdW5jKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fdW5zdWJzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSkge1xuICAgICAgICB0aGlzLl9fY2hlY2tTdWJzY3JpYmVkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5oYXNzU3Vic2NyaWJlUmVxdWlyZWRIb3N0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgICBpZiAodGhpcy5oYXNzU3Vic2NyaWJlUmVxdWlyZWRIb3N0UHJvcHMuaW5jbHVkZXMoa2V5IGFzIHN0cmluZykpIHtcbiAgICAgICAgICB0aGlzLl9fY2hlY2tTdWJzY3JpYmVkKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhc3NTdWJzY3JpYmUoKTogQXJyYXk8XG4gICAgICBVbnN1YnNjcmliZUZ1bmMgfCBQcm9taXNlPFVuc3Vic2NyaWJlRnVuYz5cbiAgICA+IHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9fY2hlY2tTdWJzY3JpYmVkKCk6IHZvaWQge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9fdW5zdWJzICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgISh0aGlzIGFzIHVua25vd24gYXMgRWxlbWVudCkuaXNDb25uZWN0ZWQgfHxcbiAgICAgICAgdGhpcy5oYXNzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgdGhpcy5oYXNzU3Vic2NyaWJlUmVxdWlyZWRIb3N0UHJvcHM/LnNvbWUoXG4gICAgICAgICAgKHByb3ApID0+IHRoaXNbcHJvcF0gPT09IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3Vuc3VicyA9IHRoaXMuaGFzc1N1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gU3Vic2NyaWJlQ2xhc3M7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mixins/subscribe-mixin.ts\n");

/***/ })

}]);