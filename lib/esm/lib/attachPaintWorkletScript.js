import getSmoothCornersScript from './getSmoothCornersScript';
var SCRIPT_ID_NAME = 'smooth-corners-script';
var attachPaintWorkletScript = function () {
    // Attach only once in body
    var paintWorkletScript = document.getElementById(SCRIPT_ID_NAME);
    if (paintWorkletScript) {
        return;
    }
    // Not every browser supports paintWorklet
    var paintWorklet = CSS.paintWorklet;
    if (!paintWorklet) {
        console.warn('Paint worklet not supported');
        return;
    }
    // Generate local file path
    var content = "CSS.paintWorklet.addModule(\"".concat(getSmoothCornersScript(), "\")");
    var textnode = document.createTextNode(content);
    var node = document.createElement("script");
    node.appendChild(textnode);
    var scriptWrapper = document.createElement('div');
    scriptWrapper.setAttribute('id', SCRIPT_ID_NAME);
    scriptWrapper.appendChild(node);
    document.body.appendChild(scriptWrapper);
};
export default attachPaintWorkletScript;
