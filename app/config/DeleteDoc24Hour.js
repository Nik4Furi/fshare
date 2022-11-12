const DeleteDoc24Hour = async(Modal)=>{
    const today = new Date(Date.now());
    today.setHours(0,0,0,0);
    
    const deleteDoc = await Modal.deleteMany({createdAt : {$lt:today}});
    // console.log(deleteDoc);
}

module.exports =  DeleteDoc24Hour