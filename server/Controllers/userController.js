const bcrypt = require('bcrypt')
const saltRounds = 12

module.exports = {
    //handles all functionality for a person wanting to register an account with the site
    async register(req, res){
        //receives all user information from the body
        let {name_first, name_last, phone_number, password, street_address, city, us_state, zipcode, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer} = req.body
        //accesses database object that was created from massive
        const db = req.app.get('db')

        //checks to see if email(or basically user) already exists in the database
        let [existingUser] = await db.get_user_by_email(email)
        //response if email(or user) already exists
        if (existingUser) return res.status(400).send('Email already exists')
        let salt = await bcrypt.genSalt(saltRounds)
        //encrypts password for safekeeping in database
        let hash = await bcrypt.hash(password, salt)
        let [user] = await db.create_user([name_first, name_last, phone_number, hash, street_address, city, us_state, zipcode, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer])
        req.session.user = {user: user.first_name, id: user.id, loggedIn: true}
        //sending user object back
        res.send(req.session.user)
    },
    //functionality for user login
    async login (req, res){
        //receives login information from the body
        let {email, password} = req.body
        const db = req.app.get('db')
        //check to see if correct password and email are entered
        let [existingUser] = await db.get_user_by_email(email)
        if(!existinUser) return res.status(401).send('Email not found')

        let result = await bcrypt.compare(password, existingUser.password)
        if (result){
            let person = await db.get_user_by_email(email)
            req.session.user = {
                name_first: existingUser.name_first,
                name_last: existingUser.name_last,
                phone_number: existingUser.phone_number,
                street_address: existingUser.street_address,
                city: existingUser.city,
                us_state: existingUser.us_state,
                zipcode: existingUser.zipcode,
                email: existingUser.email,
                profile_pic: existingUser.profile_pic,
                date_of_birth: existingUser.date_of_birth,
                first_security_answer: existingUser.first_security_answer,
                second_security_answer: existingUser.second_security_answer,
                third_security_answer: existingUser.third_security_answer,
                id: existingUser.id,
                person: person, //potential shortcut instead of sending each property separately
                loggedIn: true
            }
            res.send(req.session.user)
        }
        else res.status(401).send('Email or password incorrect')

    },
    //functionality to allow user to update first name, last name, and dob
    async editUserPersonal(req, res){
        let {id} = req.params
        let {name_first, name_last, date_of_birth} = req.body
        const db = req.app.get('db')
        let result = await db.edit_user_personal_info([+id, name_first, name_last, date_of_birth])
        res.send(result)
    },
    //functionality to allow user to update profile pic
    async editUserProfilePic(req, res){
        let {id} = req.params
        let {profile_pic} = req.body
        const db = req.app.get('db')
        let result = await db.edit_user_profile_pic([+id, profile_pic])
        res.send(result)
    },
    //functionality to allow user to update contact info
    async editUserContactInfo(req, res){
        let {id} = req.params
        let {phone_number, email} = req.body
        const db = req.app.get('db')
        let result = await db.edit_user_contact_info([+id, phone_number, email])
        res.send(result)
    },
    //functionality to allow user to update physical address
    async editUserAddress(req, res){
        let {id} = req.params
        let {street_address, city, us_state, zipcode} = req.body
        const db = req.app.get('db')
        let result = await db.edit_user_physical_address([+id, street_address, city, us_state, zipcode])
        res.send(result)
    },
    //functionality to allow user to update security info
    async editUserSecurity(req, res){
        let {id} = req.params
        let {password, first_security_answer, second_security_answer, third_security_answer} = req.body
        const db = req.app.get('db')
        let result = await db.edit_user_security_info([+id, password, first_security_answer, second_security_answer, third_security_answer])
        res.send(result)
    },
    //functionality to allow user to logout
    logout(req, res){
        req.session.destroy()
        res.sendStatus(200)
    }
}