exports.resData = (statusCode,status,...data)=>{
    res.status(statusCode).json({
        status: status,
        data:{
            data
        }
    })
}