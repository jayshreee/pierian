function cb(dt: any) {
    console.log(`Speed is ${dt['speed']}`)
    console.log(`Speed is ${dt}`)
    dt['speed'] = 40
    dt()
}

function cbProper(cr : Car) {
function cbProper(cr: Car) {
    console.log(`Name is ${cr.crWt}`)
}


cb(undefined)
cb(40)
cb(() => console.log('hi'))
cb(true)
cb({
    speed: 50
})