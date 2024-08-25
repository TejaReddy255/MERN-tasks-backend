const errorhandle=(err,req,res,next) =>{
    const statuscode=res.StatusCode?res.StatusCode:500;
    res.status(statuscode)
    res.json({message:err.message})
    

}

module.exports={ errorhandle }