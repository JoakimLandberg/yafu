import _concat from './_concat'
import composeBinary from './compose-binary'
import uniq from './uniq'

const union = composeBinary(uniq, _concat)

export default union
