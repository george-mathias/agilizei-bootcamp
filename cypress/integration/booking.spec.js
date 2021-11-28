/// <reference types="Cypress" />

import req from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

context('Booking', () => {
    it('validar o contrato do GET booking', () => {
        let bookingid = null
        req.getBooking().then(getBookingResponse => {
            assertions.validateContractOf(getBookingResponse, schemas.getBookingSchema())
        })
    });

    it('criar uma reserva com sucesso', () => {
        
        req.postBooking().then(postBookingResponse => {
            assertions.shouldHaveStatus(postBookingResponse, 200)
            assertions.shouldHaveBeNotNull(postBookingResponse.body.bookingid)
            assertions.shouldHaveBeLessThan(postBookingResponse.duration)
        }) 
    });
});