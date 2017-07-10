function isObject(instance) {
  return ( instance && typeof instance === 'object' && ! Array.isArray(instance) );
}


function extend(target, ...sources) {
  if ( ! sources.length ) {
    return target;
  }

  var source = sources.shift();

  if ( isObject(target) && isObject(source) ) {
    for ( var key in source ) {
      if ( isObject(source[key]) ) {
        if ( ! ( target[key] ) ) {
          Object.assign(target, { [key]: {} });
        }

        extend(target[key], source[key]);
      }
      else {
        Object.assing(target, { [key]: source[key] });
      }
    }
  }

  return extend(target, ...sources);
}

export { isObject, extend };
