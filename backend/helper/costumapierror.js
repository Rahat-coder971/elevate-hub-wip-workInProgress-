// used to gerate costum api error with statuscode and mesage eg throw new ApiError(statuscode,message)
class ApiError extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode=statusCode;
    }
}

module.exports=ApiError;