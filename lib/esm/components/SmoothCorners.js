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
import React, { useEffect } from 'react';
import styled from 'styled-components';
import getSmoothCornersScript from '../lib/getSmoothCornersScript';
var SmoothCornersEl = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @supports (mask-image: paint(smooth-corners)) {\n    border-radius: ", ";\n    --smooth-corners: ", ";\n\n    & {\n      border-radius: 0;\n      mask-image: paint(smooth-corners);\n    }\n  }\n"], ["\n  @supports (mask-image: paint(smooth-corners)) {\n    border-radius: ", ";\n    --smooth-corners: ", ";\n\n    & {\n      border-radius: 0;\n      mask-image: paint(smooth-corners);\n    }\n  }\n"])), function (_a) {
    var _b = _a.borderRadius, borderRadius = _b === void 0 ? 0 : _b;
    return "".concat(borderRadius, "px");
}, function (_a) {
    var _b = _a.smoothCorners, smoothCorners = _b === void 0 ? 0 : _b;
    return "".concat(smoothCorners);
});
var SmoothCorners = function (props) {
    console.log('render');
    useEffect(function () {
        console.log('mount');
        if (CSS.paintWorklet) {
            var node = document.createElement("script");
            var content = "CSS.paintWorklet.addModule(\"".concat(getSmoothCornersScript(), "\")");
            console.log('con', getSmoothCornersScript());
            var textnode = document.createTextNode(content);
            node.appendChild(textnode);
            document.body.appendChild(node);
        }
        return function () {
            console.log('unmount');
        };
    }, []);
    return (React.createElement(SmoothCornersEl, __assign({}, props)));
};
export default SmoothCorners;
var templateObject_1;
