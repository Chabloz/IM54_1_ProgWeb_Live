export function getNode(selector, dom = document) {
  return dom.querySelector(selector);
}

export function getNodes(selector, dom = document) {
  return dom.querySelectorAll(selector);
}

export function forEach(selector, callback, dom = document) {
  for (const node of getNodes(selector, dom)) callback(node);
}

export function on(selector, event, callback, options, dom = document) {
  forEach(selector, node => node.addEventListener(event, evt => callback(node, evt), options), dom);
}

export function delegateOn(selector, childSelector, event, callback, options, dom = document) {
  forEach(selector, node => node.addEventListener(event, evt => {
    const closest = evt.target.closest(childSelector);
    if (!closest || !node.contains(closest)) return;
    callback(closest, evt.currentTarget, evt);
  }, options), dom);
}

export function swapNodes(el1, el2) {
  const placeholder = document.createComment('swap');

  el1.replaceWith(placeholder);
  el2.replaceWith(el1);
  placeholder.replaceWith(el2);
}
