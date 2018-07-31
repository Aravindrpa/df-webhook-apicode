/*This is where to put the code for custom responses -- interacting with DB or any other extenal sources are to be initiated from here*/

module.exports = {

    call:function(functionName,req,res,next) //for a bit of readability and handling exception while calling
    {
        try
        {

            this[functionName](req,res,next);  //any function from this module is executed by functionName
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