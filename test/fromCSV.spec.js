import test from 'ava'

import factoryGenerator from '../index'

test('A csv based generator', async t => {
    let component = await factoryGenerator({ type: 'CSV', path: './test/csv/test.csv' })
    let next = await component.generator.next()
    component.signal('finish')
    //console.log(next.value)
    t.truthy(next.value)
})
