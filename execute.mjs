import * as io from './methods/io.mjs';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
//await delay(1000) /// waiting 1 second.	///only if async enable


main()

async function main() {
    console.log('Reading file on folder')
    let totfile = io.getAllFromDir('./files/')

        totfile.forEach(file => {
		io.mkFile('./files/'+file,'{}')

        })
        console.log("THE END, GO AWAY!")
}
