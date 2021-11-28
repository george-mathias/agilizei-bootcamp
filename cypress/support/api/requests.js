class Requests {

    getPing() {
        return cy.request({
            method: 'GET',
            url: 'ping'
        })
    }

    getBooking() {
        return cy.request({
            url: "booking/25",
            method: "GET"
        })
    }

    postBooking() {
        return cy.request({
            url: 'booking',
            method: 'POST',
            body: {
                "firstname": "John",
                "lastname": "Travouta",
                "totalprice": 192,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2021-11-01",
                    "checkout": "2021-11-30"
                },
                "additionalneeds": "all incluse"
            }
        })
    }

}

export default new Requests()