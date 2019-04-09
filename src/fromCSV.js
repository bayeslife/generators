const debug = require('debug')('generator')

const csv=require('csvtojson')

function onError(err){
    console.log(err)
}

function onComplete(){
    console.log('done')
}

export default async function factoryGenerator (options) {
    if (!options.path) {
        throw new Error('File path required')
    }

    let buffer = []
    csv()
        .fromFile(options.path)
        .subscribe((json)=>{
            return new Promise((resolve)=>{
                buffer.push(json)
                resolve()
            })
        },onError, onComplete)

    let controlSignal = null

    let signal = (sig) => { controlSignal = sig }

    let generator = async function * () {
        while (true) {
            if (controlSignal === 'finish') {
                return
            }
            if (buffer.length > 0) {
                yield buffer.pop()
            } else {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, 1000)
                })
            }
        }
    }
    return {
        signal,
        generator: generator()
    }
}
