import curry from './curry'
import _concat from './_concat'
import uniqBy from './uniq-by'

export default curry(_unionBy)

/**
 * Returns a list of unique values composed of elements from each input list.
 * Uniqueness is determined by the supplied function which is invoked for each element of each list.
 * {@link http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero SameValueZero} is used for equality comparisons
 *
 * @function unionBy
 * @arg {Function} fn A function to produce the value used to determine uniqueness
 * @arg {Array} list The first list
 * @arg {Array} list The second list
 * @return {Array} A new list of unique combined elements
 */
function _unionBy (fn, list1, list2) {
  return uniqBy(fn, _concat(list1, list2))
}
