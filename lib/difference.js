import curry from './curry'
import _arrayToSet from './_arrayToSet'
import _setToArray from './_setToArray'

export default curry(_difference)

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
