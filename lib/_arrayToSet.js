function _arrayToSet (list) {
  const set = new Set()
  list.forEach((item) => set.add(item))
  return set
}

export default _arrayToSet
