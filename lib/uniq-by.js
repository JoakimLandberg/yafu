import curry from './curry'

export default curry(_uniqBy)

function _uniqBy(fn, list) {
  const set = new Set()
  const out = []
  let val
  let listItem
  for (let i = 0; i < list.length; i++) {
    listItem = list[i]
    val = fn(listItem)
    if (!set.has(val)) {
      out.push(listItem)
      set.add(val)
    }
  }
  return out
}
