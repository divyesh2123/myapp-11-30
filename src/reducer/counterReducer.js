

export default (state = 0, { type, payload }) => {
  switch (type) {

  case 'INCREMENT':
    return state+1;

 case 'DEC':

  default:
    return state
  }
}
