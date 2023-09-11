

const camData = async (req,res,next) => {
    try {
        console.log(req.body);
        return res.send(req.body)  
    } catch (error) {
            console.log("error",error);
            return res.send(error)
    }
            
}

module.exports = {camData};
