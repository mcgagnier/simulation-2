module.exports = {

    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { name, description, address, city, state, zip, image_url, loan_amt, mortgage_pmt, desired_rent, user_id } = req.body
        console.log('req.body', req.body)
        
        dbInstance.new_prop([name, description, address, city, state, zip, image_url, loan_amt, mortgage_pmt, desired_rent, user_id])
        .then( () => res.status(201).send() )
        .catch( (err) =>{
            console.log(err);
            res.status(500).send() ;
        })
    }

} 
