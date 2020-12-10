/**
 * This is a simple stopWatch application using the OOP implementation 
 */



function Stopwatch() {

    let start ;
    let stop;
    let duration = 0;
    let reset;
    let running;


    this.start = ()=>{
        if(running){
            throw new Error(`stopWatch already running `);
        }
        start = new Date();
    }


    this.stop =()=>{
        if(!running){
            throw new Error(`watch is not running`);
        }
        stop = new Date();
        duration = ((start.getTime() - stop.getTime()) / 1000);
    }
   
    this.reset = ()=>{
        start = null;
        stop = null;
        duration = 0;
        running = false;
    }


    Object.defineProperty(this, 'duration', {
        get:() => {return duration}
    })
}

const sw = new Stopwatch();
console.log(sw.start());
console.log(sw.stop());
console.log(sw.reset());
