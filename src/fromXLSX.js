const XLSX = require('xlsx')
const fs = require('fs')

const debug=require('debug')('generator')

export default function factoryGenerator(options){
    let buffer = []

    let event = null 

    let producer = (eventType, filename) => {
        buffer.push({eventType,filename})
        event = eventType
    } 
    
    if(options.dir){
        let dir = options.dir
        fs.watch(dir,producer)
    }
    
    let generator =  async function* (){
        while(true){
            if(event==='finish'){
                return;
            }
            if(buffer.length>0){
                let file = buffer.pop().filename

                if(options.extension && !file.endsWith(options.extension)){
                    continue
                }

                let fqpath = `${options.dir ? (options.dir+'/') : ''}${file}`
                debug(`Reading from: ${fqpath}`)
                var xlsx = XLSX.readFile(fqpath, {})
                for(let sheetIndex=0;sheetIndex<xlsx.SheetNames.length;sheetIndex++){
                    let sheetname = xlsx.SheetNames[sheetIndex] 
                    let sheet = xlsx.Sheets[sheetname]
                    let rows = XLSX.utils.sheet_to_json(sheet)
                    for(let rowIndex=0;rowIndex<rows.length;rowIndex++){
                        let row = rows[rowIndex]
                        let r = Object.assign(row,{SheetName: sheetname}) 
                        yield new Promise((resolve)=>resolve(r))
                    }
                }
            }else {
                await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve()
                    },2000)
                })
            }
            
        }
    }
    return {
        producer: producer,
        generator: generator()
    }
}

