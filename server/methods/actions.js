var email   = require("emailjs/email");

var functions = {
    sendMail: function(req, res) {
        
        var server  = email.server.connect({
           user:    "email here", 
           password:"password here", 
           host:    "smtp.gmail.com", 
           ssl:     true
        });

        console.log(req.body);

        // send the message and get a callback with an error or details of the message that was sent
        server.send({
           text:    'Hello' + req.body.Name + '' + req.body.Message, 
           from:    "email here", 
           to:      req.body.EmailAddress,
           subject: "Welcome mail"
        }, function(err) { 
            if(err)
            console.log(err);
            else
            return res.json({success: true, msg: 'sent'});
        });
    }
    
}

module.exports = functions;