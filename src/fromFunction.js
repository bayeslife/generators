const debug = require('debug')('generator')

export default function factoryGenerator (options) {
    if (!options.function) {
        throw new Error('Function required')
    }
    let frequency = options.frequency || 10000

    let controlSignal = null

    let signal = (sig) => { controlSignal = sig }

    let generator = async function * () {
        while (true) {
            if (controlSignal === 'finish') {
                return
            }
            yield { functionValue: options.function() }
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, frequency)
            })
        }
    }
    return {
        signal,
        generator: generator()
    }
}
