module.exports = {

    create_company: (req,res,next) => {
        let {company_name, company_email, company_date, company_industry, company_url, company_phone, company_code} = req.body;
        
        req.app.get('db').company.add_company(company_name, company_email, company_date, company_industry, company_url, company_phone, company_code)
        .then( () => res.status(200).send() );
    },

    getCompanyUsers: (req, res, next) => {
        req.app.get('db').company.company_users().then(response => res.status(200).send(response))
    },


    getCompanyCode: (req, res, next) => {
        console.log(req.params.id)
        req.app.get('db').company.get_company_code(req.params.id).then(response => res.status(200).send(response))
    },
    getCompanyNotifications: (req, res, next) => {
        console.log(req.params.id)
        req.app.get('db').company.get_company_notifications(req.params.id).then(response => res.status(200).send(response))
    },



    getCompany: (req, res, next) => {
        req.app.get('db').company.get_company(req.params.id).then(response => res.status(200).send(response))
    },

    getCompanyUsersById: (req, res, next) => {
        req.app.get('db').company.company_users(req.params.id).then(response => res.status(200).send(response))
    },
    create_notification: (req,res,next) => {
        let {notification, notification_company, notification_date, notification_user_name, notification_user} = req.body;
        
        req.app.get('db').company.add_notification(notification, notification_company, notification_date, notification_user_name, notification_user)
        .then( () => res.status(200).send() );
    }
}