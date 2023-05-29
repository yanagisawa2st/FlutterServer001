const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Extra = new Schema({
    name:{
        type:[ String ],
        required:true,
        index:true,
    },
    price:{
      type:Number,
      required:true,
      
    },
    pic:{
        type:[ String ],
        required:true,
        index: true,
    }
    // name:String,
    // price:Number,
    // pic:String
})

const Msg = new Schema({
    // message:{
    //     type:String,
    //     required:true,
    // },

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    
})

exports.Extra = mongoose.model('extra',Extra);
exports.Msg = mongoose.model('message',Msg);