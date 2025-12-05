const dashboardGetController = (req, res, next) => {

    return res.status(200).json('Welcome to your dashboard')
}

module.exports = {dashboardGetController}