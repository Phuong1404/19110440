const myGroup = [
    { mssv: '19110440', ten: 'Trịnh Xuân Phương' }
]

async function GetAll() {
    return myGroup
}
async function GetOne(id) {
    let data = myGroup.find(val => val.mssv == id)
    if (data) {
        return data
    }
    return -1
}
async function Create(req, id) {
    let data = myGroup.find(val => val.mssv == id)
    if (!data) {
        myGroup.push({ mssv: req.mssv, ten: req.ten })
        return 1
    }
    return -1
}
async function GetAllMessage() {
    let data=`<html><body><ul>${myGroup.map((val)=>{return `<li>${val.ten}</li>`})}</ul></body></html>`
    console.log(data)
    return data
}
async function GetMessage(id) {
    let data = myGroup.find(val => val.mssv == id)
    if (data) {
        return `<html><body><ul><li>${data.ten}</li></ul></body></html>`
    }
    return -1
}

module.exports={
    GetAll,
    GetOne,
    Create,
    GetAllMessage,
    GetMessage
}
