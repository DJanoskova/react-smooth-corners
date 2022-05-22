import getSmoothCornersScript from './getSmoothCornersScript';

const SCRIPT_ID_NAME = 'smooth-corners-script';

const attachPaintWorkletScript = () => {
  // Attach only once in body
  const paintWorkletScript = document.getElementById(SCRIPT_ID_NAME);
  if (paintWorkletScript) {
    return;
  }

  // Not every browser supports paintWorklet
  const paintWorklet = (CSS as any).paintWorklet;
  if (!paintWorklet) {
    console.warn('Paint worklet not supported');
    return;
  }

  // Generate local file path
  const content = `CSS.paintWorklet.addModule("${getSmoothCornersScript()}")`;
  const textnode = document.createTextNode(content);

  const node = document.createElement("script");
  node.appendChild(textnode);

  const scriptWrapper = document.createElement('div');
  scriptWrapper.setAttribute('id', SCRIPT_ID_NAME);
  scriptWrapper.appendChild(node);

  document.body.appendChild(scriptWrapper);
}

export default attachPaintWorkletScript;
