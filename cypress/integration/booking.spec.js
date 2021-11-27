/// <reference types="Cypress" />

import req from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

context('Booking', () => {
    it('validar o contrato do GET booking', () => {
        req.getBooking().then(getBookingResponse => {
            assertions.validateContractOf(getBookingResponse, schemas.getBookingSchema())
        })
    });
});

// {
//     "firstname": "Sally",
//     "lastname":"Smith",
//     "totalprice":176,
//     "depositpaid":true,
//     "bookingdates": {
//         "checkin":"2016 - 11 - 07",
//         "checkout":"2017 - 10 - 10"
//     }
// }