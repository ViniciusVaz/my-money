const express = require('express')

module.exports = server => {
    const router = express.Router()
    server.use('/api', router)

    //Routes to BillingCycle
    const BillingCycle = require('./billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}