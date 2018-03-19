module.exports = {

    login: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { username, password, id } = req.body
        
        dbInstance.login([username, password])
        .then( result => {
            if(result.length === 0) {
                res.status(500).send()
            } else {
                res.status(200).send() 
            }
            
        })
        .catch( () => res.status(500).send() );
    },

    register: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body
        console.log('req.body', req.body)
        
        dbInstance.create_user([username, password])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }

} 
