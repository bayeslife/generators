import test from 'ava'

import  factoryGenerator  from '../index'

test('A simple generator', async t => {
    let component = factoryGenerator({})
    component.producer(null,'./test/xlsx/simple.xlsx')
    let first = await component.generator.next()
    component.producer('finish',null)
    t.is(first.value.Column1, 'a1' );
});

