'use strict'

const { createElement } = require('react')
const Cmp2 = ({children}) => {
  return createElement('p', null, children)
}

const Cmp1 = (props) => {
  return createElement(
    'div', 
    {a: props.a}, 
    createElement(Cmp2, null, createElement('div', null, props.text))
  )
}

const value = 'hia'

module.exports = () => createElement(Cmp1, {a: value, text: 'hi'})