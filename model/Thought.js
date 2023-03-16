const {model, Schema} = require("mongoose");


const reactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: new Schema.Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        maxlength: 280
    },
    userName:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date(),
        get: (createdAtDate) => createdAtDate.toDateString()

    }

});


const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        minLength:1,
        maxLength:280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (date) => date.toDateString(),
    },
    userName:{
        type: String,
        required: true
    },
    reactions:[reactionSchema]
},{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

thoughtSchema.virtual("reactionsCount").get(function(){
    return this.reactions.length;
});

const thought = model("Thought", thoughtSchema);

module.exports = Thought;