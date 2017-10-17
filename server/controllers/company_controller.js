module.exports = {

    create_company: (req,res,next) => {
        let {company_name, company_email, company_date, company_industry, company_url, company_phone} = req.body;
        
        req.app.get('db').company.add_company(company_name, company_email, company_date, company_industry, company_url, company_phone)
        .then( () => res.status(200).send() );
    }
}