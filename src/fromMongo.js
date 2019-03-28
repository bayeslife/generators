const debug = require('debug')('generator')

export default function factoryGenerator (options) {
    let buffer = []

    let controlSignal = null

    let signal = (sig) => { controlSignal = sig }

    let producer = (eventType, eventData) => {
        buffer.push({ eventType, eventData })
    }

    let generator = async function * () {
        while (true) {
            if (controlSignal === 'finish') {
                return
            }
            if (buffer.length > 0) {
                let production = buffer.pop()
                yield production
            } else {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, 2000)
                })
            }
        }
    }
    return {
        signal,
        producer,
        generator: generator()
    }
}
