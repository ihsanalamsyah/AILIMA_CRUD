// authController.js

// import model user
const { User } = require('../models')

// export module
module.exports = {

    // findAll dari table User lalu masukkan ke var. users dan buat status 200 dan render user/home
    findAll: (req, res)=> {
        User.findAll()
        .then(users =>{
            res.status(200).render('user/home', {
                users
            })
        })
    },

    // controller dengan method get buat create user
    new: (req, res)=> {
        res.status(200).render('user/create')
    },

    // controller dengan method post buat create user
    create: (req, res) =>{

        const username = req.body.username;
        const password = req.body.password;
        User.create({ username, password})
        .then(users =>{
            res.status(200).redirect('/home/users')
        })
        .catch(err =>{
            res.status(400).message(`Gagal membuat user, karena ${JSON.stringify(err.message, null, 2)}`)
        })
    },

    // controller untuk findOne data user
    show: (req, res)=>{
        User.findOne({
            where: { id: req.params.id}
        })
        .then(users =>{
            res.status(200).render('user/show', {
                username: users.username,
                password: users.password
            })
        })
        .catch(err =>{
            res.status(404).message(`Tidak dapat menemukan user`)
        })
    },

    // controller untuk delete data user
    delete: (req, res) =>{
        User.destroy({
            where: {id: req.params.id}
        })
        .then(() =>{
            res.status(200).redirect('/home/users')
        })
    },

    // controller method get untuk update data user
    update: (req, res) =>{
        User.findOne({ where: { id: req.params.id }})
        .then((users) =>{
            res.status(200).render('user/update', { users })
        })
    },

    // controller method post untuk update data user
    change: (req, res) =>{
        User.update({
            username: req.body.username,
            password: req.body.password
        },
        { where: { id: req.params.id }}
        )
        .then(() =>{
            res.status(200).redirect('/home/users')
        })
    }
}