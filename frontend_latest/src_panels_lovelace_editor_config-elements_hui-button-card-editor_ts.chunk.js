"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_lovelace_editor_config-elements_hui-button-card-editor_ts"],{

/***/ "./src/panels/lovelace/editor/config-elements/hui-button-card-editor.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-button-card-editor.ts ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HuiButtonCardEditor\": () => (/* binding */ HuiButtonCardEditor)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"./node_modules/lit/index.js\");\n/* harmony import */ var lit_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators */ \"./node_modules/lit/decorators.js\");\n/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! memoize-one */ \"./node_modules/memoize-one/dist/memoize-one.esm.js\");\n/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! superstruct */ \"./node_modules/superstruct/lib/index.es.js\");\n/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ \"./src/common/dom/fire_event.ts\");\n/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ \"./src/common/entity/compute_domain.ts\");\n/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/entity/domain_icon */ \"./src/common/entity/domain_icon.ts\");\n/* harmony import */ var _components_ha_form_ha_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-form/ha-form */ \"./src/components/ha-form/ha-form.ts\");\n/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hui-action-editor */ \"./src/panels/lovelace/components/hui-action-editor.ts\");\n/* harmony import */ var _structs_action_struct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../structs/action-struct */ \"./src/panels/lovelace/editor/structs/action-struct.ts\");\n/* harmony import */ var _structs_base_card_struct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../structs/base-card-struct */ \"./src/panels/lovelace/editor/structs/base-card-struct.ts\");\n/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-elements-style */ \"./src/panels/lovelace/editor/config-elements/config-elements-style.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hui_action_editor__WEBPACK_IMPORTED_MODULE_6__]);\n_components_hui_action_editor__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\nfunction _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }\n\nfunction _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [[\"method\"], [\"field\"]], initializeInstanceElements: function (O, elements) { [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === \"own\") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; [\"method\", \"field\"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === \"static\" || placement === \"prototype\")) { var receiver = placement === \"static\" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === \"field\") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError(\"Duplicated element (\" + element.key + \")\"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError(\"Duplicated element (\" + elements[j].key + \")\"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === \"field\") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, \"finisher\", \"An element descriptor\"); this.disallowProperty(elementObject, \"extras\", \"An element descriptor\"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== \"method\" && kind !== \"field\") { throw new TypeError('An element descriptor\\'s .kind property must be either \"method\" or' + ' \"field\", but a decorator created an element descriptor with' + ' .kind \"' + kind + '\"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== \"static\" && placement !== \"prototype\" && placement !== \"own\") { throw new TypeError('An element descriptor\\'s .placement property must be one of \"static\",' + ' \"prototype\" or \"own\", but a decorator created an element descriptor' + ' with .placement \"' + placement + '\"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, \"elements\", \"An element descriptor\"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== \"field\") { this.disallowProperty(elementObject, \"initializer\", \"A method descriptor\"); } else { this.disallowProperty(descriptor, \"get\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"set\", \"The property descriptor of a field descriptor\"); this.disallowProperty(descriptor, \"value\", \"The property descriptor of a field descriptor\"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, \"finisher\"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: \"class\", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: \"Descriptor\", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== \"class\") { throw new TypeError('A class descriptor\\'s .kind property must be \"class\", but a decorator' + ' created a class descriptor with .kind \"' + kind + '\"'); } this.disallowProperty(obj, \"key\", \"A class descriptor\"); this.disallowProperty(obj, \"placement\", \"A class descriptor\"); this.disallowProperty(obj, \"descriptor\", \"A class descriptor\"); this.disallowProperty(obj, \"initializer\", \"A class descriptor\"); this.disallowProperty(obj, \"extras\", \"A class descriptor\"); var finisher = _optionalCallableProperty(obj, \"finisher\"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== \"function\") { throw new TypeError(\"Finishers must return a constructor.\"); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + \" can't have a .\" + name + \" property.\"); } } }; return api; }\n\nfunction _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === \"method\") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === \"get\") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"set\") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === \"field\") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === \"field\" ? \"field\" : \"method\", key: key, placement: def.static ? \"static\" : def.kind === \"field\" ? \"own\" : \"prototype\", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === \"field\") element.initializer = def.value; return element; }\n\nfunction _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }\n\nfunction _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === \"method\" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === \"method\" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError(\"Duplicated methods (\" + element.key + \") can't be decorated.\"); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError(\"Decorators can't be placed on different accessors with for \" + \"the same property (\" + element.key + \").\"); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }\n\nfunction _hasDecorators(element) { return element.decorators && element.decorators.length; }\n\nfunction _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }\n\nfunction _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== \"function\") { throw new TypeError(\"Expected '\" + name + \"' to be a function\"); } return value; }\n\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\n\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst cardConfigStruct = (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.assign)(_structs_base_card_struct__WEBPACK_IMPORTED_MODULE_8__.baseLovelaceCardConfig, (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.object)({\n  entity: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_10__.string)()),\n  name: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_10__.string)()),\n  show_name: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_10__.boolean)()),\n  icon: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_10__.string)()),\n  show_icon: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_10__.boolean)()),\n  icon_height: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_10__.string)()),\n  tap_action: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)(_structs_action_struct__WEBPACK_IMPORTED_MODULE_7__.actionConfigStruct),\n  hold_action: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)(_structs_action_struct__WEBPACK_IMPORTED_MODULE_7__.actionConfigStruct),\n  theme: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_10__.string)()),\n  show_state: (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_10__.boolean)())\n}));\nconst actions = [\"more-info\", \"toggle\", \"navigate\", \"url\", \"call-service\", \"none\"];\nlet HuiButtonCardEditor = _decorate([(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.customElement)(\"hui-button-card-editor\")], function (_initialize, _LitElement) {\n  class HuiButtonCardEditor extends _LitElement {\n    constructor(...args) {\n      super(...args);\n\n      _initialize(this);\n    }\n\n  }\n\n  return {\n    F: HuiButtonCardEditor,\n    d: [{\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.property)({\n        attribute: false\n      })],\n      key: \"hass\",\n      value: void 0\n    }, {\n      kind: \"field\",\n      decorators: [(0,lit_decorators__WEBPACK_IMPORTED_MODULE_1__.state)()],\n      key: \"_config\",\n      value: void 0\n    }, {\n      kind: \"method\",\n      key: \"setConfig\",\n      value: function setConfig(config) {\n        (0,superstruct__WEBPACK_IMPORTED_MODULE_10__.assert)(config, cardConfigStruct);\n        this._config = config;\n      }\n    }, {\n      kind: \"field\",\n      key: \"_schema\",\n\n      value() {\n        return (0,memoize_one__WEBPACK_IMPORTED_MODULE_11__[\"default\"])((entity, icon, entityState) => [{\n          name: \"entity\",\n          selector: {\n            entity: {}\n          }\n        }, {\n          name: \"\",\n          type: \"grid\",\n          schema: [{\n            name: \"name\",\n            selector: {\n              text: {}\n            }\n          }, {\n            name: \"icon\",\n            selector: {\n              icon: {\n                placeholder: icon || (entityState === null || entityState === void 0 ? void 0 : entityState.attributes.icon),\n                fallbackPath: !icon && !(entityState !== null && entityState !== void 0 && entityState.attributes.icon) && entityState && entity ? (0,_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_4__.domainIcon)((0,_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_3__.computeDomain)(entity), entityState) : undefined\n              }\n            }\n          }]\n        }, {\n          name: \"\",\n          type: \"grid\",\n          column_min_width: \"100px\",\n          schema: [{\n            name: \"show_name\",\n            selector: {\n              boolean: {}\n            }\n          }, {\n            name: \"show_state\",\n            selector: {\n              boolean: {}\n            }\n          }, {\n            name: \"show_icon\",\n            selector: {\n              boolean: {}\n            }\n          }]\n        }, {\n          name: \"\",\n          type: \"grid\",\n          schema: [{\n            name: \"icon_height\",\n            selector: {\n              text: {\n                suffix: \"px\"\n              }\n            }\n          }, {\n            name: \"theme\",\n            selector: {\n              theme: {}\n            }\n          }]\n        }]);\n      }\n\n    }, {\n      kind: \"get\",\n      key: \"_tap_action\",\n      value: function _tap_action() {\n        return this._config.tap_action;\n      }\n    }, {\n      kind: \"get\",\n      key: \"_hold_action\",\n      value: function _hold_action() {\n        return this._config.hold_action || {\n          action: \"more-info\"\n        };\n      }\n    }, {\n      kind: \"method\",\n      key: \"render\",\n      value: function render() {\n        var _data$icon_height;\n\n        if (!this.hass || !this._config) {\n          return lit__WEBPACK_IMPORTED_MODULE_0__.html``;\n        }\n\n        const entityState = this._config.entity ? this.hass.states[this._config.entity] : undefined;\n\n        const schema = this._schema(this._config.entity, this._config.icon, entityState);\n\n        const data = {\n          show_name: true,\n          show_icon: true,\n          ...this._config\n        };\n\n        if ((_data$icon_height = data.icon_height) !== null && _data$icon_height !== void 0 && _data$icon_height.includes(\"px\")) {\n          data.icon_height = String(parseFloat(data.icon_height));\n        }\n\n        return lit__WEBPACK_IMPORTED_MODULE_0__.html`\n      <ha-form\n        .hass=${this.hass}\n        .data=${data}\n        .schema=${schema}\n        .computeLabel=${this._computeLabelCallback}\n        @value-changed=${this._valueChanged}\n      ></ha-form>\n      <div class=\"card-config\">\n        <hui-action-editor\n          .label=\"${this.hass.localize(\"ui.panel.lovelace.editor.card.generic.tap_action\")} (${this.hass.localize(\"ui.panel.lovelace.editor.card.config.optional\")})\"\n          .hass=${this.hass}\n          .config=${this._tap_action}\n          .actions=${actions}\n          .configValue=${\"tap_action\"}\n          .tooltipText=${this.hass.localize(\"ui.panel.lovelace.editor.card.button.default_action_help\")}\n          @value-changed=${this._actionChanged}\n        ></hui-action-editor>\n        <hui-action-editor\n          .label=\"${this.hass.localize(\"ui.panel.lovelace.editor.card.generic.hold_action\")} (${this.hass.localize(\"ui.panel.lovelace.editor.card.config.optional\")})\"\n          .hass=${this.hass}\n          .config=${this._hold_action}\n          .actions=${actions}\n          .configValue=${\"hold_action\"}\n          .tooltipText=${this.hass.localize(\"ui.panel.lovelace.editor.card.button.default_action_help\")}\n          @value-changed=${this._actionChanged}\n        ></hui-action-editor>\n      </div>\n    `;\n      }\n    }, {\n      kind: \"method\",\n      key: \"_valueChanged\",\n      value: function _valueChanged(ev) {\n        const config = ev.detail.value;\n\n        if (config.icon_height && !config.icon_height.endsWith(\"px\")) {\n          config.icon_height += \"px\";\n        }\n\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__.fireEvent)(this, \"config-changed\", {\n          config\n        });\n      }\n    }, {\n      kind: \"field\",\n      key: \"_computeLabelCallback\",\n\n      value() {\n        return schema => {\n          if (schema.name === \"entity\") {\n            return `${this.hass.localize(\"ui.panel.lovelace.editor.card.generic.entity\")}`;\n          }\n\n          if (schema.name === \"theme\") {\n            return `${this.hass.localize(\"ui.panel.lovelace.editor.card.generic.theme\")} (${this.hass.localize(\"ui.panel.lovelace.editor.card.config.optional\")})`;\n          }\n\n          return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${schema.name}`);\n        };\n      }\n\n    }, {\n      kind: \"method\",\n      key: \"_actionChanged\",\n      value: function _actionChanged(ev) {\n        if (!this._config || !this.hass) {\n          return;\n        }\n\n        const target = ev.target;\n        const value = ev.detail.value;\n\n        if (this[`_${target.configValue}`] === value) {\n          return;\n        }\n\n        let newConfig;\n\n        if (target.configValue) {\n          if (value !== false && !value) {\n            newConfig = { ...this._config\n            };\n            delete newConfig[target.configValue];\n          } else {\n            newConfig = { ...this._config,\n              [target.configValue]: value\n            };\n          }\n        }\n\n        (0,_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__.fireEvent)(this, \"config-changed\", {\n          config: newConfig\n        });\n      }\n    }, {\n      kind: \"get\",\n      static: true,\n      key: \"styles\",\n      value: function styles() {\n        return _config_elements_style__WEBPACK_IMPORTED_MODULE_9__.configElementStyle;\n      }\n    }]\n  };\n}, lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLWJ1dHRvbi1jYXJkLWVkaXRvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFjQTtBQVVBO0FBREE7QUFJQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBWEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUZBO0FBTEE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBcERBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0VBO0FBQ0E7QUFqRUE7QUFBQTtBQUFBO0FBQUE7QUFvRUE7QUFBQTtBQUFBO0FBQ0E7QUFyRUE7QUFBQTtBQUFBO0FBQUE7QUF1RUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUlBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpJQTtBQUFBO0FBQUE7QUFBQTtBQTRJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFuSkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFzSkE7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFLQTs7QUFFQTtBQUdBO0FBdktBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEtBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBaE1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtTUE7QUFDQTtBQXBNQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktYnV0dG9uLWNhcmQtZWRpdG9yLnRzP2MxZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgQ1NTUmVzdWx0R3JvdXAsIGh0bWwsIExpdEVsZW1lbnQsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIHN0YXRlIH0gZnJvbSBcImxpdC9kZWNvcmF0b3JzXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCB7IGFzc2VydCwgYXNzaWduLCBib29sZWFuLCBvYmplY3QsIG9wdGlvbmFsLCBzdHJpbmcgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWZvcm0vaGEtZm9ybVwiO1xuaW1wb3J0IHR5cGUgeyBIYUZvcm1TY2hlbWEgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtL3R5cGVzXCI7XG5pbXBvcnQgeyBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHR5cGUgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEJ1dHRvbkNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY2FyZHMvdHlwZXNcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLWFjdGlvbi1lZGl0b3JcIjtcbmltcG9ydCB0eXBlIHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBhY3Rpb25Db25maWdTdHJ1Y3QgfSBmcm9tIFwiLi4vc3RydWN0cy9hY3Rpb24tc3RydWN0XCI7XG5pbXBvcnQgeyBiYXNlTG92ZWxhY2VDYXJkQ29uZmlnIH0gZnJvbSBcIi4uL3N0cnVjdHMvYmFzZS1jYXJkLXN0cnVjdFwiO1xuaW1wb3J0IHR5cGUgeyBFZGl0b3JUYXJnZXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gYXNzaWduKFxuICBiYXNlTG92ZWxhY2VDYXJkQ29uZmlnLFxuICBvYmplY3Qoe1xuICAgIGVudGl0eTogb3B0aW9uYWwoc3RyaW5nKCkpLFxuICAgIG5hbWU6IG9wdGlvbmFsKHN0cmluZygpKSxcbiAgICBzaG93X25hbWU6IG9wdGlvbmFsKGJvb2xlYW4oKSksXG4gICAgaWNvbjogb3B0aW9uYWwoc3RyaW5nKCkpLFxuICAgIHNob3dfaWNvbjogb3B0aW9uYWwoYm9vbGVhbigpKSxcbiAgICBpY29uX2hlaWdodDogb3B0aW9uYWwoc3RyaW5nKCkpLFxuICAgIHRhcF9hY3Rpb246IG9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gICAgaG9sZF9hY3Rpb246IG9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gICAgdGhlbWU6IG9wdGlvbmFsKHN0cmluZygpKSxcbiAgICBzaG93X3N0YXRlOiBvcHRpb25hbChib29sZWFuKCkpLFxuICB9KVxuKTtcblxuY29uc3QgYWN0aW9ucyA9IFtcbiAgXCJtb3JlLWluZm9cIixcbiAgXCJ0b2dnbGVcIixcbiAgXCJuYXZpZ2F0ZVwiLFxuICBcInVybFwiLFxuICBcImNhbGwtc2VydmljZVwiLFxuICBcIm5vbmVcIixcbl07XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWJ1dHRvbi1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUJ1dHRvbkNhcmRFZGl0b3JcbiAgZXh0ZW5kcyBMaXRFbGVtZW50XG4gIGltcGxlbWVudHMgTG92ZWxhY2VDYXJkRWRpdG9yXG57XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBzdGF0ZSgpIHByaXZhdGUgX2NvbmZpZz86IEJ1dHRvbkNhcmRDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IEJ1dHRvbkNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBhc3NlcnQoY29uZmlnLCBjYXJkQ29uZmlnU3RydWN0KTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIF9zY2hlbWEgPSBtZW1vaXplT25lKFxuICAgIChcbiAgICAgIGVudGl0eT86IHN0cmluZyxcbiAgICAgIGljb24/OiBzdHJpbmcsXG4gICAgICBlbnRpdHlTdGF0ZT86IEhhc3NFbnRpdHlcbiAgICApOiBIYUZvcm1TY2hlbWFbXSA9PiBbXG4gICAgICB7IG5hbWU6IFwiZW50aXR5XCIsIHNlbGVjdG9yOiB7IGVudGl0eToge30gfSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImdyaWRcIixcbiAgICAgICAgc2NoZW1hOiBbXG4gICAgICAgICAgeyBuYW1lOiBcIm5hbWVcIiwgc2VsZWN0b3I6IHsgdGV4dDoge30gfSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiaWNvblwiLFxuICAgICAgICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBpY29uIHx8IGVudGl0eVN0YXRlPy5hdHRyaWJ1dGVzLmljb24sXG4gICAgICAgICAgICAgICAgZmFsbGJhY2tQYXRoOlxuICAgICAgICAgICAgICAgICAgIWljb24gJiZcbiAgICAgICAgICAgICAgICAgICFlbnRpdHlTdGF0ZT8uYXR0cmlidXRlcy5pY29uICYmXG4gICAgICAgICAgICAgICAgICBlbnRpdHlTdGF0ZSAmJlxuICAgICAgICAgICAgICAgICAgZW50aXR5XG4gICAgICAgICAgICAgICAgICAgID8gZG9tYWluSWNvbihjb21wdXRlRG9tYWluKGVudGl0eSksIGVudGl0eVN0YXRlKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiZ3JpZFwiLFxuICAgICAgICBjb2x1bW5fbWluX3dpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgIHNjaGVtYTogW1xuICAgICAgICAgIHsgbmFtZTogXCJzaG93X25hbWVcIiwgc2VsZWN0b3I6IHsgYm9vbGVhbjoge30gfSB9LFxuICAgICAgICAgIHsgbmFtZTogXCJzaG93X3N0YXRlXCIsIHNlbGVjdG9yOiB7IGJvb2xlYW46IHt9IH0gfSxcbiAgICAgICAgICB7IG5hbWU6IFwic2hvd19pY29uXCIsIHNlbGVjdG9yOiB7IGJvb2xlYW46IHt9IH0gfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHR5cGU6IFwiZ3JpZFwiLFxuICAgICAgICBzY2hlbWE6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiaWNvbl9oZWlnaHRcIiwgc2VsZWN0b3I6IHsgdGV4dDogeyBzdWZmaXg6IFwicHhcIiB9IH0gfSxcbiAgICAgICAgICB7IG5hbWU6IFwidGhlbWVcIiwgc2VsZWN0b3I6IHsgdGhlbWU6IHt9IH0gfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXVxuICApO1xuXG4gIGdldCBfdGFwX2FjdGlvbigpOiBBY3Rpb25Db25maWcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRhcF9hY3Rpb247XG4gIH1cblxuICBnZXQgX2hvbGRfYWN0aW9uKCk6IEFjdGlvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24gfHwgeyBhY3Rpb246IFwibW9yZS1pbmZvXCIgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgZW50aXR5U3RhdGUgPSB0aGlzLl9jb25maWcuZW50aXR5XG4gICAgICA/IHRoaXMuaGFzcy5zdGF0ZXNbdGhpcy5fY29uZmlnLmVudGl0eV1cbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5fc2NoZW1hKFxuICAgICAgdGhpcy5fY29uZmlnLmVudGl0eSxcbiAgICAgIHRoaXMuX2NvbmZpZy5pY29uLFxuICAgICAgZW50aXR5U3RhdGVcbiAgICApO1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHNob3dfbmFtZTogdHJ1ZSxcbiAgICAgIHNob3dfaWNvbjogdHJ1ZSxcbiAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICB9O1xuXG4gICAgaWYgKGRhdGEuaWNvbl9oZWlnaHQ/LmluY2x1ZGVzKFwicHhcIikpIHtcbiAgICAgIGRhdGEuaWNvbl9oZWlnaHQgPSBTdHJpbmcocGFyc2VGbG9hdChkYXRhLmljb25faGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtZm9ybVxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgLmRhdGE9JHtkYXRhfVxuICAgICAgICAuc2NoZW1hPSR7c2NoZW1hfVxuICAgICAgICAuY29tcHV0ZUxhYmVsPSR7dGhpcy5fY29tcHV0ZUxhYmVsQ2FsbGJhY2t9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgPjwvaGEtZm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy50YXBfYWN0aW9uXCJcbiAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAuY29uZmlnPSR7dGhpcy5fdGFwX2FjdGlvbn1cbiAgICAgICAgICAuYWN0aW9ucz0ke2FjdGlvbnN9XG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJ0YXBfYWN0aW9uXCJ9XG4gICAgICAgICAgLnRvb2x0aXBUZXh0PSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5idXR0b24uZGVmYXVsdF9hY3Rpb25faGVscFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2FjdGlvbkNoYW5nZWR9XG4gICAgICAgID48L2h1aS1hY3Rpb24tZWRpdG9yPlxuICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5ob2xkX2FjdGlvblwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgLmNvbmZpZz0ke3RoaXMuX2hvbGRfYWN0aW9ufVxuICAgICAgICAgIC5hY3Rpb25zPSR7YWN0aW9uc31cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImhvbGRfYWN0aW9uXCJ9XG4gICAgICAgICAgLnRvb2x0aXBUZXh0PSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5idXR0b24uZGVmYXVsdF9hY3Rpb25faGVscFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2FjdGlvbkNoYW5nZWR9XG4gICAgICAgID48L2h1aS1hY3Rpb24tZWRpdG9yPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWcgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoY29uZmlnLmljb25faGVpZ2h0ICYmICFjb25maWcuaWNvbl9oZWlnaHQuZW5kc1dpdGgoXCJweFwiKSkge1xuICAgICAgY29uZmlnLmljb25faGVpZ2h0ICs9IFwicHhcIjtcbiAgICB9XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVMYWJlbENhbGxiYWNrID0gKHNjaGVtYTogSGFGb3JtU2NoZW1hKSA9PiB7XG4gICAgaWYgKHNjaGVtYS5uYW1lID09PSBcImVudGl0eVwiKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmVudGl0eVwiXG4gICAgICApfWA7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS5uYW1lID09PSBcInRoZW1lXCIpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMudGhlbWVcIlxuICAgICAgKX0gKCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgKX0pYDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgIGB1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLiR7c2NoZW1hLm5hbWV9YFxuICAgICk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfYWN0aW9uQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG5ld0NvbmZpZztcbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgIT09IGZhbHNlICYmICF2YWx1ZSkge1xuICAgICAgICBuZXdDb25maWcgPSB7IC4uLnRoaXMuX2NvbmZpZyB9O1xuICAgICAgICBkZWxldGUgbmV3Q29uZmlnW3RhcmdldC5jb25maWdWYWx1ZSFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q29uZmlnID0ge1xuICAgICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgICBbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV06IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogbmV3Q29uZmlnIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0R3JvdXAge1xuICAgIHJldHVybiBjb25maWdFbGVtZW50U3R5bGU7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1idXR0b24tY2FyZC1lZGl0b3JcIjogSHVpQnV0dG9uQ2FyZEVkaXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/panels/lovelace/editor/config-elements/hui-button-card-editor.ts\n");

/***/ })

}]);