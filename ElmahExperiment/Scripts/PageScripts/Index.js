$(function() {

    window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
        // Send object with all data to server side log, using severity fatal, 
        // from logger "onerrorLogger"
        JL("onerrorLogger").fatalException({
            "msg": "Unhandled Exception!",
            "errorMsg": errorMsg, "url": url,
            "line number": lineNumber, "column": column
        }, errorObj);

        // Tell browser to run its own error handler as well   
        return false;
    }

    $('#throwExplicitError').click(function(e) {
        JL().fatal("Triggered by click");
    });

    //$('#throwUnhandledException').click(function(e) {
    //    var ex = {
    //        name: 'Very sad error',
    //        message: 'deep sadness'
    //    };
        
    //    ex.stack = (new Error()).stack;    
    //    throw ex;
    //});

    $('#throwUnhandledException').click(function (e) {
        try {
            xyz;
        } catch (e) {
            JL().fatalException("Handled", e);
            throw e;
        } 
    });

});