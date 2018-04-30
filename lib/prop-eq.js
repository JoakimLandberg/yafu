import curry from './curry'

export default curry(_propEq)

function _propEq(prop, val, obj) {
  return obj[prop] === val
}
