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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components';
var SmoothCornersWrapperEl = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-size: 100%;\n  background-image: paint(smooth-corners);\n  width: fit-content;\n  height: fit-content;\n  border-radius: ", ";\n  filter: ", ";\n\n  @supports (mask-image: paint(smooth-corners)) {\n    border-radius: 0;\n    --smooth-corners: ", ";\n"], ["\n  background-size: 100%;\n  background-image: paint(smooth-corners);\n  width: fit-content;\n  height: fit-content;\n  border-radius: ", ";\n  filter: ", ";\n\n  @supports (mask-image: paint(smooth-corners)) {\n    border-radius: 0;\n    --smooth-corners: ", ";\n"])), function (_a) {
    var _b = _a.borderRadius, borderRadius = _b === void 0 ? '0px' : _b;
    return borderRadius;
}, function (_a) {
    var shadow = _a.shadow;
    return shadow ? 'drop-shadow(' + shadow + ')' : undefined;
}, function (_a) {
    var _b = _a.corners, corners = _b === void 0 ? 4 : _b;
    return "".concat(corners);
});
var SmoothCornersWrapper = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    if (!props.shadow)
        return children;
    return (React.createElement(SmoothCornersWrapperEl, __assign({}, props), children));
};
export default SmoothCornersWrapper;
var templateObject_1;
