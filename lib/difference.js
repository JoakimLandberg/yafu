import curry from './curry'
import _arrayToSet from './_arrayToSet'
import _setToArray from './_setToArray'

export default curry(_difference)

/**
 * Creates a new list of unique values that are included in the first list but not in the second list
 *
 * @function intersection
 * @arg {Array} list1  The first list
 * @arg {Array} list2  The second list
 * @return {Array} A list of unique elements in list1 that are not in list2
 *
 */
function _difference(list1, list2) {
  let toIterateList
  let lookupSet = _arrayToSet(list2)

  const out = new Set()
  list1.forEach(item => {
    if(!lookupSet.has(item)) {
      out.add(item)
    }
  })

  return _setToArray(out)
}
