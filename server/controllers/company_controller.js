module.exports = {

    create_company: (req,res,next) => {
        let {company_name, company_phone, company_email, company_logo, company_date, company_industry} = req.body;
        
        req.app.get('db').company.add_company(company_name, company_phone, company_email, company_logo, company_date, company_industry)
        .then(prop => res.status(200).send(prop))
    }
}