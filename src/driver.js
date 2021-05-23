const events = require('../events');

function pickUp(payload){
console.log('EVENT',payload);
console.log(`DRIVER :picked up ${payload.payload.orderId}`);
setTimeout(()=>{
    events.emit('inTransit',payload)
},1000)
}
function delivered(payload){
    payload.event='inTransit';
    payload.time= new Date().toDateString()
    console.log('EVENR',payload);
    setTimeout(()=>{
        console.log(`DRIVER: delivered up ${payload.payload.orderId}`);
        events.emit('delivered',payload)
    },2000)
    }

module.exports={
    pickUp:pickUp,
    delivered:delivered
}