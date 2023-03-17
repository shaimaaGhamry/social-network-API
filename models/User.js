const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
        userName:{
            type: String,
            required:true,
            unique:true,
            trimm:true
        },
        email:{
            type: String,
            required: true,
            unique:true,
            match:[
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                "Please Enter a valid Email Address"
            ] 
        },
        thoughts:[{
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],
        friends:[{
            type:Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

userSchema.virtual("freindCount").get(function(){
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;