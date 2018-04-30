import curry from './curry'
import _arrayToSet from './_arrayToSet'
import _setToArray from './_setToArray'

export default curry(_intersection)

function _intersection(list1, list2) {
  let toIterateList
  let lookupSet
  if(list1.length >= list2.length) {
    toIterateList = list2
    lookupSet = _arrayToSet(list1)
  } else {
    toIterateList = list1
    lookupSet = _arrayToSet(list2)
  }

  const out = new Set()
  toIterateList.forEach(item => {
    if(lookupSet.has(item)) {
      out.add(item)
    }
  })

  return _setToArray(out)
}
