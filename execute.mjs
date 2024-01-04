import * as io from './methods/io.mjs';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable


main()

async function main() {
    console.log('Reading file on folder')
	console.log()
	
	        if (io.mkDir('files/')) {
            console.log('Directory /files/ created')
        } else {
            console.log('Directory founded')
        }
		console.log()
    let totfile = io.getAllFromDir('files/')
	if(!totfile == []){
        totfile.forEach(file => {
		
		console.log(file.replace(/\.[^/.]+$/, "")+' was eated!')

		io.mkFile('./files/'+file,'{}')
		
        })
		console.log()
        console.log("THE END, GO AWAY!")
		}else{
			console.log('Nothing inside')
		}
		
}
