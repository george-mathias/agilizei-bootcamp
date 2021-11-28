import spok from 'cy-spok'

class Schemas {

    getBookingSchema() {
        return spok({
            firstname: spok.string,
            lastname: spok.string,
            totalprice: spok.number,
            totalprice: spok.ge(100), // Specififies that a number is greater or equal the given criteria.
            depositpaid: spok.type('boolean'),
            bookingdates: {
                checkin: spok.string,
                checkout: spok.string
            },
            additionalneeds: spok.string
        })
    }

}

export default new Schemas()