'use strict';
require('dotenv').config();
const deriver = require('../src/driver');
const vendor = require('../src/vendor');
const fake = require('faker');
const driver = require('../src/driver');


describe('Test Event Connectivity',()=>{

    let order = {
        storeName:process.env.store||'delivery store',
        orderId:fake.datatype.uuid(),
        customerName:fake.name.findName(),
        address:`${fake.address.city()},${fake.address.stateAbbr()}`
    }
    let payload = {
        event:'pickup',
        time :new Date().toDateString(),
        payload:order
    }

    jest.useFakeTimers();
    let consoleSpy;

    beforeAll(()=>{
        consoleSpy=jest.spyOn(console,'log').mockImplementation();
    })
    afterAll(()=>{
        consoleSpy.mokRestore();
    })

    it('newCustomerOrde()' , ()=>{
        vendor.newCustomerOrde()
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('pickUp() after 1 sec',()=>{
        driver.pickUp(payload);
        expect(consoleSpy).toHaveBeenCalled();
    })
})