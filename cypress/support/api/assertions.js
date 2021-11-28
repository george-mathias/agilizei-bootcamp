class Assertions {

    shouldHaveStatus(response, status) {
        expect(response.status, `status is ${status}`).to.eq(status)
    }

    validateContractOf(response, schema) {
        return cy.wrap(response.body).should(
            schema
        )
    }

    shouldHaveBeNotNull(response) {
        expect(response, 'bookingid exists').to.not.be.null
    }

    shouldHaveBeLessThan(response) {
        expect(response, 'response duration').lessThan(900)
    }
}

export default new Assertions()