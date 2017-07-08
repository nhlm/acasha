function ensureNodeList(resource) {
  if ( ! ( resource instanceof NodeList ) ) {
    throw 'Acasha Error: Acasha can only operate on NodeList objects here.';
  }

  return resource;
}

function ensureElement(resource) {
  if ( ! ( resource instanceof HTMLElement ) ) {
    throw 'Acasha Error: Acasha can only operate on HTMLElement objects here.';
  }

  return resource;
}

export { ensureNodeList, ensureElement };
