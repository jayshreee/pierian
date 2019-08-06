get crWt() {
    return this.weight
}

set crWt(wt  : number) {
    this.weight = wt
}

whoCreated(): number {
    return this.make;
}

static myStatic() {

}
}

function anyFn() {
console.log(this)
}

let cr = new Car(56)
cr.crWt = 45

let cr1 = new Car()

@@ -39,5 +56,13 @@ export abstract class Os {
}

export class IoTDevice implements SensorListener {

onDataChanged(dt: number): void {
    console.log(dt)
}
}

let sl: SensorListener = {
onDataChanged(dt: number) {

}
}