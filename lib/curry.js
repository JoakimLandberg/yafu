import _apply from './_apply'
import _concat from './_concat'
import _slice from './_slice'

export default curry

/**
 * Curries a function according to the following rules:
 *
 * Given that `f` is a function that takes `n` arguments, if the curried `f` is called with:
 *   * **fewer than n agruments**: return a curried function that accepts the remaining arguments
 *   * **exactly n arguments**: apply the function to the arguments and return the result,
 *     if the result is a function, apply curry to it
 *   * **more than n arguments**: apply the function to the first n arguments,
 *     assume the result is a function, curry it and apply it to the remaining arguments. If the result
 *     of applying f to the first n arguments is not a function, it is considered an error.
 *
 * @function curry
 * @arg f {function} The function to curry
 *
 */
function curry (f) {
  const length = f.length
  return length === 0 ? f : curryOfLength(length, f)
}

function curry1 (fn) {
  return function f1(a) {
    if(arguments.length === 0) {
      return f1
    } else {
      //return fn(a)
      const res = fn(a);
      return isFunction(res) ? curryOfLength(res) : res
    }
  }
}

function cpwrapper(a) {
  return curry1(function(_b) { return fn(a, _b)})
}

function curry2 (fn) {
  return function f2(a, b) {
    if(arguments.length === 2) {
      return fn(a,b)
    } else {
      const tmp = function(_b) { return fn(a, _b)}
      return curry1(tmp)
      //return cpwrapper(a)
    }
      //const res = fn(a, b);
      //return isFunction(res) ? curryOfLength(res) : res
    // } else if(arguments.length === 1) {
    //   return curry1(function(_b) { return fn(a, _b)})
    // } else {
    //   return f2;
    // }
    // switch (arguments.length) {
    //   case 0:
    //     return f2;
    //   case 1:
    //     return curry1(function(_b) { return fn(a, _b)})
    //   default:
    //     //return fn(a, b);
    //     const res = fn(a, b);
    //     return isFunction(res) ? curryOfLength(res) : res
    // }
  };
}

function curry3 (fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2: 
        return curry1(function(_c) { return fn(a, b, _c); });
      default:
        const res = fn(a, b, c);
        return isFunction(res) ? curryOfLength(res) : res
    }
  };
}

function curryOfLength (length, f) {

  if(length === 3) {
    return curry3(f)
  }

  const name = f.name || 'anonymous'
  function curried (...args) {
    const diff = length - args.length
    if (args.length === 0) {
      return curried
    } else if (diff === 0) {
      let result = _apply(f, args)
      return isFunction(result) ? curry(result) : result
    } else if (diff > 0) {
      const newFn = function (...innerArgs) {
        const fullArgs = _concat(args, innerArgs)
        return _apply(f, fullArgs)
      }
      Object.defineProperty(newFn, 'name', { value: f.name })
      Object.defineProperty(newFn, 'toString', { value: () => f.toString() })
      return curryOfLength(diff, newFn)
    } else {
      const neededArgs = _slice(0, length, args)
      const remainingArgs = _slice(length, args.length, args)
      const result = _apply(f, neededArgs)
      return _apply(curry(result), remainingArgs)
    }
  }
  Object.defineProperty(curried, 'length', { value: length })
  Object.defineProperty(curried, 'name', { value: `${name} (curried)` })
  Object.defineProperty(curried, 'toString', { value: () => f.toString() })
  return curried
}

function isFunction (v) {
  return typeof v === 'function'
}
