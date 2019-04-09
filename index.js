
import factoryGeneratorXLSX from './src/fromXLSX'
import factoryGeneratorMongo from './src/fromMongo'
import factoryGeneratorFunction from './src/fromFunction'
import factoryGeneratorCSV from './src/fromCSV'

function factoryGenerator (options) {
    switch (options.type) {
        case 'CSV':
            return factoryGeneratorCSV(options)
        case 'XLSX':
            return factoryGeneratorXLSX(options)
        case 'Mongo':
            return factoryGeneratorMongo(options)
        case 'Function':
            return factoryGeneratorFunction(options)
        default:
            throw new Error('Unsupport generation type')
    }
}

export default factoryGenerator
