/// <reference types="Cypress" />

import req from '../support/api/requests'
import assertions from '../support/api/assertions'

context('Ping', () => {
    it('GET HealthCheck', () => {
        req.getPing().then(getPingResponse => {
            assertions.shouldHaveStatus(getPingResponse, 201)
        })
    });
});