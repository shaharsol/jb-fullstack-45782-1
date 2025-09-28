const pagerDuty = (err, request, response, next) => {
    console.log('sending page to Ido')
    next(err)
}

module.exports = pagerDuty