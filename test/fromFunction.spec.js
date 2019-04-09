import test from 'ava'

import factoryGenerator from '../index'

test('A function based generator', async t => {
    let component = factoryGenerator({ type: 'Function', function: () => new Date() })
    let next = await component.generator.next()
    component.signal('finish')
    t.truthy(next.value.functionValue)
})
