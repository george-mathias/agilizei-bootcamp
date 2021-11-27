class Requests {

    getPing() {
        return cy.request({
            method: 'GET',
            url: 'ping'
        })
    }

    getBooking() {
        return cy.request({
            url: "booking/2",
            method: "GET"
        })
    }

}

export default new Requests()