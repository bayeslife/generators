
import factoryGeneratorXLSX from './src/fromXLSX'
import factoryGeneratorMongo from './src/fromMongo'

function factoryGenerator(options){
    switch(options.type){
        case 'XLSX':
            return factoryGeneratorXLSX(options)
        case 'Mongo':
            return factoryGeneratorMongo(options)
        default:
            throw 'Unsupport generation type'
    }       
}

export default factoryGenerator
