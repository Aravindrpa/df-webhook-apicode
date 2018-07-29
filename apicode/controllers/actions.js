module.exports = {

    call:function(functionName,req,res,next) //for a bit of readability, from where function is called
    {
        try{

            this[functionName](req,res,next);  //any function from this module is executed by name
        }
        catch(error) //handling if action is not defined within api
        {
            res.json({fulfillmentText: "Error calling action : "+functionName+""});
        }
    },


    actiontest:function(req,res,next){

        return res.json({fulfillmentText: "This is the default message from hooktest for action actiontest"});
    },

    actiontest2:function(req,res,next){

        return res.json({fulfillmentText: "This is the default message from hooktest for action actiontest2"});
    }

}