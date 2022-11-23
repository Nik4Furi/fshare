const DeleteDoc24Hour = async(Modal)=>{
    const today = new Date(Date.now());
    today.setHours(0,0,0,0);
    
    await Modal.deleteMany({createdAt : {$lt:today}});
}

module.exports =  DeleteDoc24Hour