const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// db.orders.count()

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    name: {
        type: String,

    },
    gender: {
        type: String,

    },
    dob: {
        type: String,

    },
    email: {
        type: String,

    },
    reg_no: {
        type: String,
    },
    block: {
        type: String,

    },
    room: {
        type: String,

    },
    phone: {
        type: Number,

    },
    type: {
        // admin, staff, student
        type: String,

    },
    access: {
        // admin, student, head_mess_staff, head_security_staff, head_carpainter_staff, head_service_staff, head_electrician_staff, staff
        type: String,

    },
    pwd: {
        type: String,

    },
    cpwd: {
        type: String,

    },
    complaints: [
        {
            complain_id:
            {
                type: String,
        
            },
            title:
            {
                type: String,
        
            },
            type:
            {
                type: String,
        
            },
            Dis:
            {
                type: String,
        
            },
        }
    ],
    tokens: [
        {
            token:
            {
                type: String,
        
            }
        }
    ]
})



// userSchema.methods.generateAuthtoken = async function() {
//     try{
//         let token_out = jwt.sign({_id: this._id}, process.env.SECRET_KEY )
//         this.tokens = this.token.concat({token: token_out});
//         await this.save();
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// Works as middleware( getting user password and saving it on db)
userSchema.pre('save', async function(req, res, next) {
    if(this.isModified('pwd','cpwd')){
        this.pwd = await bcrypt.hash(this.pwd, 12);
        this.cpwd = await bcrypt.hash(this.cpwd, 12);
    }
})


const users = mongoose.model('users', userSchema)
module.exports = users;
