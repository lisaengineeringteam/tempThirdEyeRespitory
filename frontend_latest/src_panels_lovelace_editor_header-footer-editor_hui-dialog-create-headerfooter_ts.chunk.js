"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_editor_header-footer-editor_hui-dialog-create-headerfooter_ts"],{

/***/ "./src/panels/lovelace/editor/header-footer-editor/get-headerfooter-stub-config.ts":
/*!*****************************************************************************************!*\
  !*** ./src/panels/lovelace/editor/header-footer-editor/get-headerfooter-stub-config.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHeaderFooterStubConfig\": () => (/* binding */ getHeaderFooterStubConfig)\n/* harmony export */ });\n/* harmony import */ var _create_element_create_header_footer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../create-element/create-header-footer-element */ \"./src/panels/lovelace/create-element/create-header-footer-element.ts\");\n\nconst getHeaderFooterStubConfig = async (hass, type, entities, entitiesFallback) => {\n  let config = {\n    type\n  };\n  const elClass = await (0,_create_element_create_header_footer_element__WEBPACK_IMPORTED_MODULE_0__.getHeaderFooterElementClass)(type);\n\n  if (elClass && elClass.getStubConfig) {\n    const classStubConfig = await elClass.getStubConfig(hass, entities, entitiesFallback);\n    config = { ...config,\n      ...classStubConfig\n    };\n  }\n\n  return config;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9oZWFkZXItZm9vdGVyLWVkaXRvci9nZXQtaGVhZGVyZm9vdGVyLXN0dWItY29uZmlnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFHQTtBQU1BO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9oZWFkZXItZm9vdGVyLWVkaXRvci9nZXQtaGVhZGVyZm9vdGVyLXN0dWItY29uZmlnLnRzP2ZiOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0SGVhZGVyRm9vdGVyRWxlbWVudENsYXNzIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZS1lbGVtZW50L2NyZWF0ZS1oZWFkZXItZm9vdGVyLWVsZW1lbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlSGVhZGVyRm9vdGVyQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2hlYWRlci1mb290ZXIvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdldEhlYWRlckZvb3RlclN0dWJDb25maWcgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHR5cGU6IHN0cmluZyxcbiAgZW50aXRpZXM6IHN0cmluZ1tdLFxuICBlbnRpdGllc0ZhbGxiYWNrOiBzdHJpbmdbXVxuKTogUHJvbWlzZTxMb3ZlbGFjZUhlYWRlckZvb3RlckNvbmZpZz4gPT4ge1xuICBsZXQgY29uZmlnOiBMb3ZlbGFjZUhlYWRlckZvb3RlckNvbmZpZyA9IHsgdHlwZSB9O1xuXG4gIGNvbnN0IGVsQ2xhc3MgPSBhd2FpdCBnZXRIZWFkZXJGb290ZXJFbGVtZW50Q2xhc3ModHlwZSk7XG5cbiAgaWYgKGVsQ2xhc3MgJiYgZWxDbGFzcy5nZXRTdHViQ29uZmlnKSB7XG4gICAgY29uc3QgY2xhc3NTdHViQ29uZmlnID0gYXdhaXQgZWxDbGFzcy5nZXRTdHViQ29uZmlnKFxuICAgICAgaGFzcyxcbiAgICAgIGVudGl0aWVzLFxuICAgICAgZW50aXRpZXNGYWxsYmFja1xuICAgICk7XG5cbiAgICBjb25maWcgPSB7IC4uLmNvbmZpZywgLi4uY2xhc3NTdHViQ29uZmlnIH07XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/lovelace/editor/header-footer-editor/get-headerfooter-stub-config.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/editor/header-footer-editor/hui-dialog-create-headerfooter.ts":
/*!*******************************************************************************************!*\
  !*** ./src/panels/lovelace/editor/header-footer-editor/hui-dialog-create-headerfooter.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HuiCreateDialogHeaderFooter\": () => (/* binding */ HuiCreateDialogHeaderFooter)\n/* harmony export */ });\n/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ \"./node_modules/@material/mwc-button/mwc-button.js\");\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _components_ha_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-dialog */ \"./src/components/ha-dialog.ts\");\n/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../resources/styles */ \"./src/resources/styles.ts\");\n/* harmony import */ var _lovelace_headerfooters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lovelace-headerfooters */ \"./src/panels/lovelace/editor/lovelace-headerfooters.ts\");\n/* harmony import */ var _get_headerfooter_stub_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-headerfooter-stub-config */ \"./src/panels/lovelace/editor/header-footer-editor/get-headerfooter-stub-config.ts\");\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nlet HuiCreateDialogHeaderFooter = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.customElement)(\"hui-dialog-create-headerfooter\")], function (_initialize, _LitElement) {\n  class HuiCreateDialogHeaderFooter extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: HuiCreateDialogHeaderFooter,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_2__.state)()],\n      key: \"_params\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"showDialog\",\n      value: async function showDialog(params) {\n        this._params = params;\n      }\n    }, {\n      kind: \"method\",\n      key: \"closeDialog\",\n      value: function closeDialog() {\n        this._params = undefined;\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__.fireEvent)(this, \"dialog-closed\", {\n          dialog: this.localName\n        });\n        return true;\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        if (!this._params) {\n          return lit__WEBPACK_IMPORTED_MODULE_1__.html``;\n        }\n\n        return lit__WEBPACK_IMPORTED_MODULE_1__.html`\n      <ha-dialog\n        open\n        scrimClickAction\n        .heading=${(0,_components_ha_dialog__WEBPACK_IMPORTED_MODULE_4__.createCloseHeading)(this.hass, this.hass.localize(`ui.panel.lovelace.editor.header-footer.choose_header_footer`, \"type\", this.hass.localize(`ui.panel.lovelace.editor.header-footer.${this._params.type}`)))}\n        @keydown=${this._ignoreKeydown}\n        @closed=${this._cancel}\n      >\n        <div class=\"elements\">\n          ${_lovelace_headerfooters__WEBPACK_IMPORTED_MODULE_6__.headerFooterElements.map((headerFooter, index) => lit__WEBPACK_IMPORTED_MODULE_1__.html`\n                <ha-card\n                  role=\"button\"\n                  tabindex=\"0\"\n                  aria-labeledby=${\"card-name-\" + index}\n                  outlined\n                  .type=${headerFooter.type}\n                  @click=${this._handleHeaderFooterPicked}\n                  @keyDown=${this._handleHeaderFooterPicked}\n                  dialogInitialFocus\n                >\n                  <ha-svg-icon .path=${headerFooter.icon}></ha-svg-icon>\n                  <div .id=${\"card-name-\" + index} role=\"none presentation\">\n                    ${this.hass.localize(`ui.panel.lovelace.editor.header-footer.types.${headerFooter.type}.name`)}\n                  </div>\n                </ha-card>\n              `)}\n        </div>\n        <div slot=\"primaryAction\">\n          <mwc-button @click=${this._cancel}>\n            ${this.hass.localize(\"ui.common.cancel\")}\n          </mwc-button>\n        </div>\n      </ha-dialog>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_handleHeaderFooterPicked\",\n      value: async function _handleHeaderFooterPicked(ev) {\n        if (ev instanceof KeyboardEvent && ev.key !== \"Enter\" && ev.key !== \" \" && ev.key !== \"Spacebar\") {\n          return;\n        }\n\n        const type = ev.currentTarget.type;\n        let config = {\n          type\n        };\n\n        if (this.hass) {\n          var _this$_params;\n\n          config = await (0,_get_headerfooter_stub_config__WEBPACK_IMPORTED_MODULE_7__.getHeaderFooterStubConfig)(this.hass, type, ((_this$_params = this._params) === null || _this$_params === void 0 ? void 0 : _this$_params.entities) || [], []);\n        }\n\n        this._params.pickHeaderFooter(config);\n\n        this.closeDialog();\n      }\n    }, {\n      kind: \"method\",\n      key: \"_ignoreKeydown\",\n      value: function _ignoreKeydown(ev) {\n        ev.stopPropagation();\n      }\n    }, {\n      kind: \"method\",\n      key: \"_cancel\",\n      value: function _cancel(ev) {\n        if (ev) {\n          ev.stopPropagation();\n        }\n\n        this.closeDialog();\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__.haStyleDialog, lit__WEBPACK_IMPORTED_MODULE_1__.css`\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-dialog {\n            --mdc-dialog-max-height: 100%;\n            height: 100%;\n          }\n        }\n\n        @media all and (min-width: 850px) {\n          ha-dialog {\n            --mdc-dialog-min-width: 550px;\n          }\n        }\n\n        ha-dialog {\n          --mdc-dialog-max-width: 550px;\n          --dialog-content-padding: 2px 24px 20px 24px;\n          --dialog-z-index: 5;\n        }\n\n        .elements {\n          display: flex;\n          flex-wrap: wrap;\n        }\n\n        .spinner,\n        ha-card {\n          width: calc(50% - 8px);\n          text-align: center;\n          margin: 4px;\n        }\n\n        ha-card {\n          box-sizing: border-box;\n          padding: 8px;\n          color: var(--secondary-text-color);\n          font-size: 16px;\n          cursor: pointer;\n        }\n\n        ha-svg-icon {\n          padding-bottom: 4px;\n          --mdc-icon-size: 38px;\n        }\n      `];\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_1__.LitElement);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9oZWFkZXItZm9vdGVyLWVkaXRvci9odWktZGlhbG9nLWNyZWF0ZS1oZWFkZXJmb290ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBSUE7QUFEQTtBQUlBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6RUE7QUFBQTtBQUFBO0FBQUE7QUE0RUE7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQUE7O0FBQ0E7QUFNQTs7QUFFQTs7QUFDQTtBQUNBO0FBbkdBO0FBQUE7QUFBQTtBQUFBO0FBc0dBO0FBQ0E7QUF2R0E7QUFBQTtBQUFBO0FBQUE7QUEwR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUE5R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlIQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBbEtBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvaGVhZGVyLWZvb3Rlci1lZGl0b3IvaHVpLWRpYWxvZy1jcmVhdGUtaGVhZGVyZm9vdGVyLnRzP2MxODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgY3NzLCBDU1NSZXN1bHRHcm91cCwgaHRtbCwgTGl0RWxlbWVudCwgVGVtcGxhdGVSZXN1bHQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgc3RhdGUgfSBmcm9tIFwibGl0L2RlY29yYXRvcnNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUNsb3NlSGVhZGluZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWRpYWxvZ1wiO1xuaW1wb3J0IHR5cGUgeyBIYXNzRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvbWFrZS1kaWFsb2ctbWFuYWdlclwiO1xuaW1wb3J0IHsgaGFTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgdHlwZSB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgTG92ZWxhY2VIZWFkZXJGb290ZXJDb25maWcgfSBmcm9tIFwiLi4vLi4vaGVhZGVyLWZvb3Rlci90eXBlc1wiO1xuaW1wb3J0IHsgaGVhZGVyRm9vdGVyRWxlbWVudHMgfSBmcm9tIFwiLi4vbG92ZWxhY2UtaGVhZGVyZm9vdGVyc1wiO1xuaW1wb3J0IHsgZ2V0SGVhZGVyRm9vdGVyU3R1YkNvbmZpZyB9IGZyb20gXCIuL2dldC1oZWFkZXJmb290ZXItc3R1Yi1jb25maWdcIjtcbmltcG9ydCB0eXBlIHsgQ3JlYXRlSGVhZGVyRm9vdGVyRGlhbG9nUGFyYW1zIH0gZnJvbSBcIi4vc2hvdy1jcmVhdGUtaGVhZGVyZm9vdGVyLWRpYWxvZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1kaWFsb2ctY3JlYXRlLWhlYWRlcmZvb3RlclwiKVxuZXhwb3J0IGNsYXNzIEh1aUNyZWF0ZURpYWxvZ0hlYWRlckZvb3RlclxuICBleHRlbmRzIExpdEVsZW1lbnRcbiAgaW1wbGVtZW50cyBIYXNzRGlhbG9nPENyZWF0ZUhlYWRlckZvb3RlckRpYWxvZ1BhcmFtcz5cbntcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBmYWxzZSB9KSBwcm90ZWN0ZWQgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHN0YXRlKCkgcHJpdmF0ZSBfcGFyYW1zPzogQ3JlYXRlSGVhZGVyRm9vdGVyRGlhbG9nUGFyYW1zO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKFxuICAgIHBhcmFtczogQ3JlYXRlSGVhZGVyRm9vdGVyRGlhbG9nUGFyYW1zXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZURpYWxvZygpOiBib29sZWFuIHtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiZGlhbG9nLWNsb3NlZFwiLCB7IGRpYWxvZzogdGhpcy5sb2NhbE5hbWUgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1kaWFsb2dcbiAgICAgICAgb3BlblxuICAgICAgICBzY3JpbUNsaWNrQWN0aW9uXG4gICAgICAgIC5oZWFkaW5nPSR7Y3JlYXRlQ2xvc2VIZWFkaW5nKFxuICAgICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5oZWFkZXItZm9vdGVyLmNob29zZV9oZWFkZXJfZm9vdGVyYCxcbiAgICAgICAgICAgIFwidHlwZVwiLFxuICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5oZWFkZXItZm9vdGVyLiR7dGhpcy5fcGFyYW1zLnR5cGV9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgICAgQGtleWRvd249JHt0aGlzLl9pZ25vcmVLZXlkb3dufVxuICAgICAgICBAY2xvc2VkPSR7dGhpcy5fY2FuY2VsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudHNcIj5cbiAgICAgICAgICAke2hlYWRlckZvb3RlckVsZW1lbnRzLm1hcChcbiAgICAgICAgICAgIChoZWFkZXJGb290ZXIsIGluZGV4KSA9PlxuICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsZWRieT0ke1wiY2FyZC1uYW1lLVwiICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgLnR5cGU9JHtoZWFkZXJGb290ZXIudHlwZX1cbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZUhlYWRlckZvb3RlclBpY2tlZH1cbiAgICAgICAgICAgICAgICAgIEBrZXlEb3duPSR7dGhpcy5faGFuZGxlSGVhZGVyRm9vdGVyUGlja2VkfVxuICAgICAgICAgICAgICAgICAgZGlhbG9nSW5pdGlhbEZvY3VzXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGhhLXN2Zy1pY29uIC5wYXRoPSR7aGVhZGVyRm9vdGVyLmljb259PjwvaGEtc3ZnLWljb24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IC5pZD0ke1wiY2FyZC1uYW1lLVwiICsgaW5kZXh9IHJvbGU9XCJub25lIHByZXNlbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgYHVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5oZWFkZXItZm9vdGVyLnR5cGVzLiR7aGVhZGVyRm9vdGVyLnR5cGV9Lm5hbWVgXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzbG90PVwicHJpbWFyeUFjdGlvblwiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2NhbmNlbH0+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uY2FuY2VsXCIpfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlSGVhZGVyRm9vdGVyUGlja2VkKGV2OiBDdXN0b21FdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChcbiAgICAgIGV2IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCAmJlxuICAgICAgZXYua2V5ICE9PSBcIkVudGVyXCIgJiZcbiAgICAgIGV2LmtleSAhPT0gXCIgXCIgJiZcbiAgICAgIGV2LmtleSAhPT0gXCJTcGFjZWJhclwiXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkudHlwZTtcbiAgICBsZXQgY29uZmlnOiBMb3ZlbGFjZUhlYWRlckZvb3RlckNvbmZpZyA9IHsgdHlwZSB9O1xuXG4gICAgaWYgKHRoaXMuaGFzcykge1xuICAgICAgY29uZmlnID0gYXdhaXQgZ2V0SGVhZGVyRm9vdGVyU3R1YkNvbmZpZyhcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0eXBlLFxuICAgICAgICB0aGlzLl9wYXJhbXM/LmVudGl0aWVzIHx8IFtdLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXJhbXMhLnBpY2tIZWFkZXJGb290ZXIoY29uZmlnKTtcbiAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gIH1cblxuICBwcml2YXRlIF9pZ25vcmVLZXlkb3duKGV2OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9jYW5jZWwoZXY/OiBFdmVudCkge1xuICAgIGlmIChldikge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEdyb3VwIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC8qIG92ZXJydWxlIHRoZSBoYS1zdHlsZS1kaWFsb2cgbWF4LWhlaWdodCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgICAgaGEtZGlhbG9nIHtcbiAgICAgICAgICAgIC0tbWRjLWRpYWxvZy1tYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XG4gICAgICAgICAgaGEtZGlhbG9nIHtcbiAgICAgICAgICAgIC0tbWRjLWRpYWxvZy1taW4td2lkdGg6IDU1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWRpYWxvZyB7XG4gICAgICAgICAgLS1tZGMtZGlhbG9nLW1heC13aWR0aDogNTUwcHg7XG4gICAgICAgICAgLS1kaWFsb2ctY29udGVudC1wYWRkaW5nOiAycHggMjRweCAyMHB4IDI0cHg7XG4gICAgICAgICAgLS1kaWFsb2ctei1pbmRleDogNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbGVtZW50cyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Bpbm5lcixcbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zdmctaWNvbiB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgICAtLW1kYy1pY29uLXNpemU6IDM4cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWRpYWxvZy1jcmVhdGUtaGVhZGVyZm9vdGVyXCI6IEh1aUNyZWF0ZURpYWxvZ0hlYWRlckZvb3RlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/editor/header-footer-editor/hui-dialog-create-headerfooter.ts\n");

/***/ }),

/***/ "./src/panels/lovelace/editor/lovelace-headerfooters.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/editor/lovelace-headerfooters.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerFooterElements\": () => (/* binding */ headerFooterElements)\n/* harmony export */ });\nconst mdiChartBellCurveCumulative = \"M4 19V20H22V22H2V2H4V17C7 17 10 15 12.1 11.4C15.1 6.4 18.4 4 22 4V6C19.2 6 16.5 8.1 13.9 12.5C11.3 16.6 7.7 19 4 19Z\";\nconst mdiGestureTapButton = \"M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z\";\nconst mdiImageArea = \"M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z\";\nconst headerFooterElements = [{\n  type: \"graph\",\n  icon: mdiChartBellCurveCumulative\n}, {\n  type: \"buttons\",\n  icon: mdiGestureTapButton\n}, {\n  type: \"picture\",\n  icon: mdiImageArea\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9sb3ZlbGFjZS1oZWFkZXJmb290ZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvbG92ZWxhY2UtaGVhZGVyZm9vdGVycy50cz9mMjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIG1kaUNoYXJ0QmVsbEN1cnZlQ3VtdWxhdGl2ZSxcbiAgbWRpR2VzdHVyZVRhcEJ1dHRvbixcbiAgbWRpSW1hZ2VBcmVhLFxufSBmcm9tIFwiQG1kaS9qc1wiO1xuaW1wb3J0IHsgSGVhZGVyRm9vdGVyIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGhlYWRlckZvb3RlckVsZW1lbnRzOiBIZWFkZXJGb290ZXJbXSA9IFtcbiAgeyB0eXBlOiBcImdyYXBoXCIsIGljb246IG1kaUNoYXJ0QmVsbEN1cnZlQ3VtdWxhdGl2ZSB9LFxuICB7IHR5cGU6IFwiYnV0dG9uc1wiLCBpY29uOiBtZGlHZXN0dXJlVGFwQnV0dG9uIH0sXG4gIHsgdHlwZTogXCJwaWN0dXJlXCIsIGljb246IG1kaUltYWdlQXJlYSB9LFxuXTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/lovelace/editor/lovelace-headerfooters.ts\n");

/***/ })

}]);