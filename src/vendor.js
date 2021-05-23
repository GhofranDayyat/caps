require('dotenv').config();
const fake = require('faker');
const store = process.env.store||'Delivery';
const events = require('../events');

let order = {
    storeName:store,
    orderId:fake.datatype.uuid(),
    customerName:fake.name.findName(),
    address:`${fake.address.city()},${fake.address.stateAbbr()}`
}
function newCustomerOrde(){
    
    console.log('new order to deliver');
    events.emit('pickup',{
        event:'pickup',
        time: new Date().toDateString(),
        payload:order
    })
}
function thanks(payload){
    payload.event='delivered';
    payload.time = new Date().toDateString();
    console.log(`Thank you for delivering ${payload.payload.orderId}`);
    console.log('EVENT',payload );
}

module.exports={
    newCustomerOrde:newCustomerOrde,
    thanks:thanks
}