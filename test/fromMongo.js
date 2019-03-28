import test from 'ava'

import factoryGenerator from '../index'

test('A mongo generator', async t => {
    let component = factoryGenerator({ type: 'Mongo' })
    component.producer('data', 123)
    let next = await component.generator.next()
    component.signal('finish')
    t.is(next.value.eventData, 123)
})
