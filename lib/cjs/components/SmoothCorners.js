"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var attachPaintWorkletScript_1 = __importDefault(require("../lib/attachPaintWorkletScript"));
var SmoothCornersEl = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: ", ";\n\n  @supports (mask-image: paint(smooth-corners)) {\n    border-radius: 0;\n    --smooth-corners: ", ";\n    mask-image: paint(smooth-corners);\n  }\n"], ["\n  border-radius: ", ";\n\n  @supports (mask-image: paint(smooth-corners)) {\n    border-radius: 0;\n    --smooth-corners: ", ";\n    mask-image: paint(smooth-corners);\n  }\n"])), function (_a) {
    var _b = _a.borderRadius, borderRadius = _b === void 0 ? 0 : _b;
    return "".concat(borderRadius, "px");
}, function (_a) {
    var _b = _a.corners, corners = _b === void 0 ? 4 : _b;
    return "".concat(corners);
});
var SmoothCorners = function (props) {
    (0, react_1.useEffect)(function () {
        (0, attachPaintWorkletScript_1.default)();
    }, []);
    return (react_1.default.createElement(SmoothCornersEl, __assign({}, props)));
};
exports.default = SmoothCorners;
var templateObject_1;
