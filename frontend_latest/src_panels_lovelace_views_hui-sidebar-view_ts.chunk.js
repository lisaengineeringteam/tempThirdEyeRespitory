"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_views_hui-sidebar-view_ts"],{

/***/ "./src/panels/lovelace/views/hui-sidebar-view.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/views/hui-sidebar-view.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideBarView\": () => (/* binding */ SideBarView)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var lit_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/class-map */ \"./node_modules/lit/directives/class-map.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ \"./src/common/util/compute_rtl.ts\");\n/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor/config-util */ \"./src/panels/lovelace/editor/config-util.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nconst mdiArrowLeft = \"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z\";\nconst mdiArrowRight = \"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z\";\nconst mdiPlus = \"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\";\n\n\n\n\n\n\nlet SideBarView = _decorate(null, function (_initialize, _LitElement) {\n  class SideBarView extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: SideBarView,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"lovelace\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        type: Number\n      })],\n      key: \"index\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        type: Boolean\n      })],\n      key: \"isStrategy\",\n\n      value() {\n        return false;\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"cards\",\n\n      value() {\n        return [];\n      }\n\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.state)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_mqlListenerRef\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      key: \"_mql\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        _get(_getPrototypeOf(SideBarView.prototype), \"connectedCallback\", this).call(this);\n\n        this._mql = window.matchMedia(\"(min-width: 760px)\");\n        this._mqlListenerRef = this._createCards.bind(this);\n\n        this._mql.addListener(this._mqlListenerRef);\n      }\n    }, {\n      kind: \"method\",\n      key: \"disconnectedCallback\",\n      value: function disconnectedCallback() {\n        var _this$_mql;\n\n        _get(_getPrototypeOf(SideBarView.prototype), \"disconnectedCallback\", this).call(this);\n\n        (_this$_mql = this._mql) === null || _this$_mql === void 0 ? void 0 : _this$_mql.removeListener(this._mqlListenerRef);\n        this._mqlListenerRef = undefined;\n        this._mql = undefined;\n      }\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        this._config = config;\n      }\n    }, {\n      kind: \"method\",\n      key: \"willUpdate\",\n      value: function willUpdate(changedProperties) {\n        var _this$lovelace, _this$lovelace2, _this$lovelace3;\n\n        _get(_getPrototypeOf(SideBarView.prototype), \"willUpdate\", this).call(this, changedProperties);\n\n        if ((_this$lovelace = this.lovelace) !== null && _this$lovelace !== void 0 && _this$lovelace.editMode) {\n          Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_material_mwc-list_mwc-list-item-base_js-node_modules_material_mwc-list_m-ec3d2e\"), __webpack_require__.e(\"vendors-node_modules_material_mwc-list_mwc-list_js\"), __webpack_require__.e(\"vendors-node_modules_material_mwc-menu_mwc-menu-surface_js\"), __webpack_require__.e(\"vendors-node_modules_material_mwc-menu_mwc-menu_js\"), __webpack_require__.e(\"vendors-node_modules_material_mwc-fab_mwc-fab-base_js-node_modules_material_mwc-fab_mwc-fab_css_js\"), __webpack_require__.e(\"src_components_ha-button-menu_ts\"), __webpack_require__.e(\"src_components_ha-fab_ts\"), __webpack_require__.e(\"src_panels_lovelace_views_default-view-editable_ts\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./default-view-editable */ \"./src/panels/lovelace/views/default-view-editable.ts\"));\n        }\n\n        if (changedProperties.has(\"cards\")) {\n          this._createCards();\n        }\n\n        if (!changedProperties.has(\"lovelace\") && !changedProperties.has(\"_config\")) {\n          return;\n        }\n\n        const oldLovelace = changedProperties.get(\"lovelace\");\n\n        if (!changedProperties.has(\"cards\") && (oldLovelace === null || oldLovelace === void 0 ? void 0 : oldLovelace.config) !== ((_this$lovelace2 = this.lovelace) === null || _this$lovelace2 === void 0 ? void 0 : _this$lovelace2.config) || oldLovelace && (oldLovelace === null || oldLovelace === void 0 ? void 0 : oldLovelace.editMode) !== ((_this$lovelace3 = this.lovelace) === null || _this$lovelace3 === void 0 ? void 0 : _this$lovelace3.editMode)) {\n          this._createCards();\n        }\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        var _this$lovelace4;\n\n        return lit__WEBPACK_IMPORTED_MODULE_0__.html`\n      <div class=\"container\"></div>\n      ${(_this$lovelace4 = this.lovelace) !== null && _this$lovelace4 !== void 0 && _this$lovelace4.editMode ? lit__WEBPACK_IMPORTED_MODULE_0__.html`\n            <ha-fab\n              .label=${this.hass.localize(\"ui.panel.lovelace.editor.edit_card.add\")}\n              extended\n              @click=${this._addCard}\n              class=${(0,lit_directives_class_map__WEBPACK_IMPORTED_MODULE_2__.classMap)({\n          rtl: (0,_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_4__.computeRTL)(this.hass)\n        })}\n            >\n              <ha-svg-icon slot=\"icon\" .path=${mdiPlus}></ha-svg-icon>\n            </ha-fab>\n          ` : \"\"}\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_addCard\",\n      value: function _addCard() {\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__.fireEvent)(this, \"ll-create-card\");\n      }\n    }, {\n      kind: \"method\",\n      key: \"_createCards\",\n      value: function _createCards() {\n        var _this$_mql2;\n\n        const mainDiv = document.createElement(\"div\");\n        mainDiv.id = \"main\";\n        let sidebarDiv;\n\n        if ((_this$_mql2 = this._mql) !== null && _this$_mql2 !== void 0 && _this$_mql2.matches) {\n          sidebarDiv = document.createElement(\"div\");\n          sidebarDiv.id = \"sidebar\";\n        } else {\n          sidebarDiv = mainDiv;\n        }\n\n        if (this.hasUpdated) {\n          const oldMain = this.renderRoot.querySelector(\"#main\");\n          const oldSidebar = this.renderRoot.querySelector(\"#sidebar\");\n          const container = this.renderRoot.querySelector(\".container\");\n\n          if (oldMain) {\n            container.removeChild(oldMain);\n          }\n\n          if (oldSidebar) {\n            container.removeChild(oldSidebar);\n          }\n\n          container.appendChild(mainDiv);\n          container.appendChild(sidebarDiv);\n        } else {\n          this.updateComplete.then(() => {\n            const container = this.renderRoot.querySelector(\".container\");\n            container.appendChild(mainDiv);\n            container.appendChild(sidebarDiv);\n          });\n        }\n\n        this.cards.forEach((card, idx) => {\n          var _this$_config, _this$_config$cards, _this$lovelace5, _cardConfig$view_layo3;\n\n          const cardConfig = (_this$_config = this._config) === null || _this$_config === void 0 ? void 0 : (_this$_config$cards = _this$_config.cards) === null || _this$_config$cards === void 0 ? void 0 : _this$_config$cards[idx];\n          let element;\n\n          if (this.isStrategy || !((_this$lovelace5 = this.lovelace) !== null && _this$lovelace5 !== void 0 && _this$lovelace5.editMode)) {\n            card.editMode = false;\n            element = card;\n          } else {\n            var _cardConfig$view_layo;\n\n            element = document.createElement(\"hui-card-options\");\n            element.hass = this.hass;\n            element.lovelace = this.lovelace;\n            element.path = [this.index, idx];\n            card.editMode = true;\n            const movePositionButton = document.createElement(\"ha-icon-button\");\n            movePositionButton.slot = \"buttons\";\n            const moveIcon = document.createElement(\"ha-svg-icon\");\n            moveIcon.path = (cardConfig === null || cardConfig === void 0 ? void 0 : (_cardConfig$view_layo = cardConfig.view_layout) === null || _cardConfig$view_layo === void 0 ? void 0 : _cardConfig$view_layo.position) !== \"sidebar\" ? mdiArrowRight : mdiArrowLeft;\n            movePositionButton.appendChild(moveIcon);\n            movePositionButton.addEventListener(\"click\", () => {\n              var _cardConfig$view_layo2;\n\n              this.lovelace.saveConfig((0,_editor_config_util__WEBPACK_IMPORTED_MODULE_5__.replaceCard)(this.lovelace.config, [this.index, idx], { ...cardConfig,\n                view_layout: {\n                  position: (cardConfig === null || cardConfig === void 0 ? void 0 : (_cardConfig$view_layo2 = cardConfig.view_layout) === null || _cardConfig$view_layo2 === void 0 ? void 0 : _cardConfig$view_layo2.position) !== \"sidebar\" ? \"sidebar\" : \"main\"\n                }\n              }));\n            });\n            element.appendChild(movePositionButton);\n            element.appendChild(card);\n          }\n\n          if ((cardConfig === null || cardConfig === void 0 ? void 0 : (_cardConfig$view_layo3 = cardConfig.view_layout) === null || _cardConfig$view_layo3 === void 0 ? void 0 : _cardConfig$view_layo3.position) !== \"sidebar\") {\n            mainDiv.appendChild(element);\n          } else {\n            sidebarDiv.appendChild(element);\n          }\n        });\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return lit__WEBPACK_IMPORTED_MODULE_0__.css`\n      :host {\n        display: block;\n        padding-top: 4px;\n        height: 100%;\n        box-sizing: border-box;\n      }\n\n      .container {\n        display: flex;\n        justify-content: center;\n        margin-left: 4px;\n        margin-right: 4px;\n      }\n\n      #main {\n        max-width: 1620px;\n        flex-grow: 2;\n      }\n\n      #sidebar {\n        flex-grow: 1;\n        flex-shrink: 0;\n        max-width: 380px;\n      }\n\n      .container > div {\n        min-width: 0;\n        box-sizing: border-box;\n      }\n\n      .container > div > * {\n        display: block;\n        margin: var(--masonry-view-card-margin, 4px 4px 8px);\n      }\n\n      @media (max-width: 500px) {\n        .container > div > * {\n          margin-left: 0;\n          margin-right: 0;\n        }\n      }\n\n      ha-fab {\n        position: sticky;\n        float: right;\n        right: calc(16px + env(safe-area-inset-right));\n        bottom: calc(16px + env(safe-area-inset-bottom));\n        z-index: 1;\n      }\n\n      ha-fab.rtl {\n        float: left;\n        right: auto;\n        left: calc(16px + env(safe-area-inset-left));\n      }\n    `;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);\ncustomElements.define(\"hui-sidebar-view\", SideBarView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL3ZpZXdzL2h1aS1zaWRlYmFyLXZpZXcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQVBBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBVEE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFvQkE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBeEJBO0FBQUE7QUFBQTtBQUFBO0FBMEJBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBa0NBO0FBQ0E7QUFuQ0E7QUFBQTtBQUFBO0FBQUE7QUFxQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBQ0E7O0FBRUE7O0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFsRUE7QUFBQTtBQUFBO0FBQUE7QUFvRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF4RkE7QUFBQTtBQUFBO0FBQUE7QUEyRkE7QUFDQTtBQTVGQTtBQUFBO0FBQUE7QUFBQTtBQThGQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTs7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBPQTtBQUFBO0FBQUE7QUE2T0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9wYW5lbHMvbG92ZWxhY2Uvdmlld3MvaHVpLXNpZGViYXItdmlldy50cz8yZmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1kaUFycm93TGVmdCwgbWRpQXJyb3dSaWdodCwgbWRpUGx1cyB9IGZyb20gXCJAbWRpL2pzXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdEdyb3VwLFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IHByb3BlcnR5LCBzdGF0ZSB9IGZyb20gXCJsaXQvZGVjb3JhdG9yc1wiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0L2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgdHlwZSB7XG4gIExvdmVsYWNlVmlld0NvbmZpZyxcbiAgTG92ZWxhY2VWaWV3RWxlbWVudCxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB0eXBlIHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSHVpRXJyb3JDYXJkIH0gZnJvbSBcIi4uL2NhcmRzL2h1aS1lcnJvci1jYXJkXCI7XG5pbXBvcnQgeyBIdWlDYXJkT3B0aW9ucyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2h1aS1jYXJkLW9wdGlvbnNcIjtcbmltcG9ydCB7IHJlcGxhY2VDYXJkIH0gZnJvbSBcIi4uL2VkaXRvci9jb25maWctdXRpbFwiO1xuaW1wb3J0IHR5cGUgeyBMb3ZlbGFjZSwgTG92ZWxhY2VDYXJkIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWRlQmFyVmlldyBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZVZpZXdFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSkgcHVibGljIGluZGV4PzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGlzU3RyYXRlZ3kgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pIHB1YmxpYyBjYXJkczogQXJyYXk8XG4gICAgTG92ZWxhY2VDYXJkIHwgSHVpRXJyb3JDYXJkXG4gID4gPSBbXTtcblxuICBAc3RhdGUoKSBwcml2YXRlIF9jb25maWc/OiBMb3ZlbGFjZVZpZXdDb25maWc7XG5cbiAgcHJpdmF0ZSBfbXFsTGlzdGVuZXJSZWY/OiAoKSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgX21xbD86IE1lZGlhUXVlcnlMaXN0O1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX21xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNzYwcHgpXCIpO1xuICAgIHRoaXMuX21xbExpc3RlbmVyUmVmID0gdGhpcy5fY3JlYXRlQ2FyZHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9tcWwuYWRkTGlzdGVuZXIodGhpcy5fbXFsTGlzdGVuZXJSZWYpO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fbXFsPy5yZW1vdmVMaXN0ZW5lcih0aGlzLl9tcWxMaXN0ZW5lclJlZiEpO1xuICAgIHRoaXMuX21xbExpc3RlbmVyUmVmID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX21xbCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBMb3ZlbGFjZVZpZXdDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci53aWxsVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgIGlmICh0aGlzLmxvdmVsYWNlPy5lZGl0TW9kZSkge1xuICAgICAgaW1wb3J0KFwiLi9kZWZhdWx0LXZpZXctZWRpdGFibGVcIik7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImNhcmRzXCIpKSB7XG4gICAgICB0aGlzLl9jcmVhdGVDYXJkcygpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICFjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJsb3ZlbGFjZVwiKSAmJlxuICAgICAgIWNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcIl9jb25maWdcIilcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRMb3ZlbGFjZSA9IGNoYW5nZWRQcm9wZXJ0aWVzLmdldChcImxvdmVsYWNlXCIpIGFzXG4gICAgICB8IExvdmVsYWNlXG4gICAgICB8IHVuZGVmaW5lZDtcblxuICAgIGlmIChcbiAgICAgICghY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiY2FyZHNcIikgJiZcbiAgICAgICAgb2xkTG92ZWxhY2U/LmNvbmZpZyAhPT0gdGhpcy5sb3ZlbGFjZT8uY29uZmlnKSB8fFxuICAgICAgKG9sZExvdmVsYWNlICYmIG9sZExvdmVsYWNlPy5lZGl0TW9kZSAhPT0gdGhpcy5sb3ZlbGFjZT8uZWRpdE1vZGUpXG4gICAgKSB7XG4gICAgICB0aGlzLl9jcmVhdGVDYXJkcygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgJHt0aGlzLmxvdmVsYWNlPy5lZGl0TW9kZVxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLmFkZFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGV4dGVuZGVkXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2FkZENhcmR9XG4gICAgICAgICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgIHJ0bDogY29tcHV0ZVJUTCh0aGlzLmhhc3MhKSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoYS1zdmctaWNvbiBzbG90PVwiaWNvblwiIC5wYXRoPSR7bWRpUGx1c30+PC9oYS1zdmctaWNvbj5cbiAgICAgICAgICAgIDwvaGEtZmFiPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9hZGRDYXJkKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImxsLWNyZWF0ZS1jYXJkXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ2FyZHMoKTogdm9pZCB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5pZCA9IFwibWFpblwiO1xuXG4gICAgbGV0IHNpZGViYXJEaXY6IEhUTUxEaXZFbGVtZW50O1xuICAgIGlmICh0aGlzLl9tcWw/Lm1hdGNoZXMpIHtcbiAgICAgIHNpZGViYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2lkZWJhckRpdi5pZCA9IFwic2lkZWJhclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlYmFyRGl2ID0gbWFpbkRpdjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICBjb25zdCBvbGRNYWluID0gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcbiAgICAgIGNvbnN0IG9sZFNpZGViYXIgPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpO1xuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpITtcbiAgICAgIGlmIChvbGRNYWluKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRNYWluKTtcbiAgICAgIH1cbiAgICAgIGlmIChvbGRTaWRlYmFyKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChvbGRTaWRlYmFyKTtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyRGl2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVDb21wbGV0ZS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpITtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhckRpdik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNhcmRzLmZvckVhY2goKGNhcmQ6IExvdmVsYWNlQ2FyZCwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBjYXJkQ29uZmlnID0gdGhpcy5fY29uZmlnPy5jYXJkcz8uW2lkeF07XG4gICAgICBsZXQgZWxlbWVudDogTG92ZWxhY2VDYXJkIHwgSHVpQ2FyZE9wdGlvbnM7XG4gICAgICBpZiAodGhpcy5pc1N0cmF0ZWd5IHx8ICF0aGlzLmxvdmVsYWNlPy5lZGl0TW9kZSkge1xuICAgICAgICBjYXJkLmVkaXRNb2RlID0gZmFsc2U7XG4gICAgICAgIGVsZW1lbnQgPSBjYXJkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJodWktY2FyZC1vcHRpb25zXCIpO1xuICAgICAgICBlbGVtZW50Lmhhc3MgPSB0aGlzLmhhc3M7XG4gICAgICAgIGVsZW1lbnQubG92ZWxhY2UgPSB0aGlzLmxvdmVsYWNlO1xuICAgICAgICBlbGVtZW50LnBhdGggPSBbdGhpcy5pbmRleCEsIGlkeF07XG4gICAgICAgIGNhcmQuZWRpdE1vZGUgPSB0cnVlO1xuICAgICAgICBjb25zdCBtb3ZlUG9zaXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGEtaWNvbi1idXR0b25cIik7XG4gICAgICAgIG1vdmVQb3NpdGlvbkJ1dHRvbi5zbG90ID0gXCJidXR0b25zXCI7XG4gICAgICAgIGNvbnN0IG1vdmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhhLXN2Zy1pY29uXCIpO1xuICAgICAgICBtb3ZlSWNvbi5wYXRoID1cbiAgICAgICAgICBjYXJkQ29uZmlnPy52aWV3X2xheW91dD8ucG9zaXRpb24gIT09IFwic2lkZWJhclwiXG4gICAgICAgICAgICA/IG1kaUFycm93UmlnaHRcbiAgICAgICAgICAgIDogbWRpQXJyb3dMZWZ0O1xuICAgICAgICBtb3ZlUG9zaXRpb25CdXR0b24uYXBwZW5kQ2hpbGQobW92ZUljb24pO1xuICAgICAgICBtb3ZlUG9zaXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvdmVsYWNlIS5zYXZlQ29uZmlnKFxuICAgICAgICAgICAgcmVwbGFjZUNhcmQodGhpcy5sb3ZlbGFjZSEuY29uZmlnLCBbdGhpcy5pbmRleCEsIGlkeF0sIHtcbiAgICAgICAgICAgICAgLi4uY2FyZENvbmZpZyEsXG4gICAgICAgICAgICAgIHZpZXdfbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICBjYXJkQ29uZmlnPy52aWV3X2xheW91dD8ucG9zaXRpb24gIT09IFwic2lkZWJhclwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJzaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIm1haW5cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobW92ZVBvc2l0aW9uQnV0dG9uKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgIH1cbiAgICAgIGlmIChjYXJkQ29uZmlnPy52aWV3X2xheW91dD8ucG9zaXRpb24gIT09IFwic2lkZWJhclwiKSB7XG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0R3JvdXAge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICB9XG5cbiAgICAgICNtYWluIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNjIwcHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgIH1cblxuICAgICAgI3NpZGViYXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBtYXgtd2lkdGg6IDM4MHB4O1xuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyID4gZGl2ID4gKiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IHZhcigtLW1hc29ucnktdmlldy1jYXJkLW1hcmdpbiwgNHB4IDRweCA4cHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLmNvbnRhaW5lciA+IGRpdiA+ICoge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoYS1mYWIge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHJpZ2h0OiBjYWxjKDE2cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSk7XG4gICAgICAgIGJvdHRvbTogY2FsYygxNnB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgaGEtZmFiLnJ0bCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogY2FsYygxNnB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSk7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXNpZGViYXItdmlld1wiOiBTaWRlQmFyVmlldztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJodWktc2lkZWJhci12aWV3XCIsIFNpZGVCYXJWaWV3KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/lovelace/views/hui-sidebar-view.ts\n");

/***/ })

}]);