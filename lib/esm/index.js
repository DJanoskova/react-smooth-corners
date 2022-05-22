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
import React, { useEffect } from 'react';
// const SmoothCornersEl = styled.div<SmoothCornersProps>`
//   @supports (mask-image: paint(smooth-corners)) {
//     border-radius: ${({ borderRadius }) => `${borderRadius}px`};
//     --smooth-corners: ${({ smoothCorners }) => `${smoothCorners}`};
//
//     & {
//       border-radius: 0;
//       mask-image: paint(smooth-corners);
//     }
//   }
// `;
var SmoothCorners = function (_a) {
    var borderRadius = _a.borderRadius, smoothCorners = _a.smoothCorners, props = __rest(_a, ["borderRadius", "smoothCorners"]);
    useEffect(function () {
        if (CSS.paintWorklet) {
            var node = document.createElement("script");
            var textnode = document.createTextNode("CSS.paintWorklet.addModule('/static/paint.js')");
            node.appendChild(textnode);
            document.body.appendChild(node);
        }
    }, []);
    var style = {
        borderRadius: "".concat(borderRadius, "px"),
        '--smooth-corners': "".concat(smoothCorners),
    };
    return (React.createElement("div", __assign({}, props, { style: style }), "Hello"));
};
export default SmoothCorners;
