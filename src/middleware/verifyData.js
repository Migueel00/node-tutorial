const verify = async (req, res, next) => {

    const { body } = req;

    if( !body.name || !body.mode || !body.equipment){
        
        res.status(400).send({
            status: "FAILED",
            error:  "On of the keys is missing os is empty in request body"
        });

        return;
    }

    next();
}

module.exports = { verify };