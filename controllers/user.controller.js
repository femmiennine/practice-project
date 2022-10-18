const loadRegister = (req, res) => {
    try {
        // render only when using ejs else use method save
        res.status(200).render('registration');
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

const registerUser = (req, res) => {
    try {
        // render only when using ejs else use method save
        res.send(req.body);
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

module.exports = { loadRegister, registerUser };
