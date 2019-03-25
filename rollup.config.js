const input = 'index.js'
const sourcemap = true

export default [{
    input,
    output: {
        file: 'dist/generator.mjs',
        format: 'es',
        sourcemap
    }
}, {
    input,
    output: {
        file: 'dist/generator.js',
        format: 'cjs',
        sourcemap
    }
},
{
    input,
    output: {
        file: 'dist/generator.umd.js',
        format: 'umd',
        name: 'generator',
        sourcemap
    }
}]
