const bcrypt = require('bcrypt')
const saltRounds = 12

module.exports = {
    //handles all functionality for a person wanting to register an account with the site
    async register(req, res){
        //receives all user information from the body
        let {name_first, name_last, phone_number, password, address, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer} = req.body
        //accesses database object that was created from massive
        const db = req.app.get('db')

        //checks to see if email(or basically user) already exists in the database
        let [existingUser] = await db.get_user_by_email(email)
        //response if email(or user) already exists
        if (existingUser) return res.status(400).send('Email already exists')
        let salt = await bcrypt.genSalt(saltRounds)
        //encrypts password for safekeeping in database
        let hash = await bcrypt.hash(password, salt)
        let [user] = await db.create_user([name_first, name_last, phone_number, hash, address, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer])
        req.session.user = {user: user.first_name, id: user.id, loggedIn: true}
        //sending user object back
        res.send(req.session.user)
    }
}