const events = require('../events');
const driver = require('./driver');
const vendor = require('./vendor');

//create order each 5 sec 
setInterval(()=>{
    console.log('helo caaps');

    vendor.newCustomerOrde()
}, 5000);


//add event listener
events.on('pickup',driver.pickUp);
events.on('inTransit',driver.delivered);
events.on('delivered',vendor.thanks)