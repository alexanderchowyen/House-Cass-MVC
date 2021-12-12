const Message = require('../models/index')

module.exports = {
    getIndex: async (req,res)=>{
        try{
            const messages = await Message.find()
            res.render('index.ejs', {message: messages, thumbsUp: 0})
        }catch(err){
            console.log(err)
        }
    },
    createMessage: async (req, res)=>{
        console.log(req.body)
        try{
            await Message.create({message: req.body.message, name: req.body.name, thumbsUp: 0})
            console.log('Message has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },
    likeMessage: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.messageIdFromJSFile},{
                completed: +1
            })
            console.log('UpVoted')
            res.json('UpVoted')
        }catch(err){
            console.log(err)
        }
    },
 
    deleteMessage: async (req, res)=>{
        console.log(req.body.messageIdFromJSFile)
        try{
            await Message.findOneAndDelete({_id:req.body.messageIdFromJSFile})
            console.log('Deleted message')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    