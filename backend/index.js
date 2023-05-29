const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const model = require('./models/models');



const Extra = model.Extra;
const Msg = model.Msg;


app.use(cors());
app.use(express.json());

const PORT = 3500;
const options = {
    useUnifiedTopology : true,
    useNewUrlParser : true
}
mongoose.connect('mongodb://127.0.0.1/tests',options).then(()=>{
    console.log('db connected!!');
}).catch((err)=>{
    console.log(err);
})

// var data = new Extra({
//     name:["Dark Blue Cort"],
//     price:70000,
//     pic:"https://fashion-basics.com/wp-content/uploads/2018/10/6-27.jpg"
// })

// data.save();

app.get('/data',async(req,res)=>{
   const datas = await Extra.find({});
   
   try{
      res.send(datas)
     console.log(datas);
   }catch(err){
     res.status(500).send(err);
   }
})

app.post('/additem',async(req,res)=>{
    const item =  new Extra(req.body);
    
    try{
      await item.save();
      res.send(item);
    }catch(err){
        res.status(500).send(err);
    }
})

app.post('/send/msg',async(req,res)=>{
    const msg = new Msg(req.body);

    try{
        await msg.save();
        res.send(msg);

    }catch(err){
       res.status(500).send(err);
    }
})

app.get('/get/msg',async(req,res)=>{
    const msg = await Msg.find({});
    try{
        res.send(msg);

    }catch(err){

    }
})

app.listen(PORT,()=>{
    console.log("ポート番号:"+PORT,"接続完了!!");
})