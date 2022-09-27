const Model = require('../Models/student.model');

exports.GetAll = (req, res) => {
    Model.GetAll().then(result => {
        console.log(result);
        res.json(result);
    })
}
exports.GetOne = (req, res) => {
    let ID = req.params.id
    Model.GetOne(ID).then(result => {
        if (result==-1) {
            console.log(result);
            res.json({error:'not valid'})
        }
        else{
            console.log(result);
            res.json(result)
        }
        
    })
}
exports.Create=(req, res) => {
    let ID = req.params.id
    let data=req.body
    Model.Create(data,ID).then(result=>{
        if (result==-1) {
            console.log(result);
            res.json({error:'Not valid'})
        }
        else{
            res.json({message:'Done'})
        }
    })
}
exports.GetAllMessage=(req, res) => {
    Model.GetAllMessage().then(result=>{
        res.send(result)
    })
}
exports.GetMessage=(req,res)=>{
    let ID = req.params.id
    Model.GetMessage(ID).then(result=>{
        if(result==-1){
            res.json({error:'Not valid'})
        }
        else{
            res.send(result)
        }
    })
}
