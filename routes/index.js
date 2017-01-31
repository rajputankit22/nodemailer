var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');











/* GET home page. */
router.get('/', function(req, res) {
  res.render('hello', { title: 'Enter the hello text' });
});


router.post('/',function(req,res){
       var oldurl = req.body.emailbody;
      //  var messege = req.body.text;
      //  console.log(oldurl);
      //res.send();
      // console.log(messege);
      var transporter = nodemailer.createTransport({

              host : 'smtp-pulse.com',
              port : 465,
              secure :true,
              auth : {
                user : 'rajputankit22@gmail.com',
                pass : 'mEr4ECDjkrosHA5'
              }
      });

    // var smtpConfig = {
    //
    //        host: 'smtp-pulse.com',
    //        port: 465,          // 2525 if SSL is false
    //      secure: true, // use SSL  ,,, if
    //        auth: {
    //        user: 'skmishra.nitdgp@gmail.com',
    //        pass: 'CBgGDtsNYa6oq'
    //        }
    //  };

//     transporter.verify(function(error, success) {
//    if (error) {
//         console.log(error);
//    } else {
//         console.log('Server is ready to take our messages');
//    }
// });

      var mailOption = {
          from : 'rajputankit22@gmail.com',
            to : oldurl,
        subject: 'nodemailer mail',
           text: "ankit"
      };

    transporter.sendMail(mailOption, function(err,data){
               if(err){
                 //console.log(err);
                 res.send('Error in sending messege');
               }
               else {
                 //console.log('Email Sent');
                 res.send('succcessfully sent');
               }

      });







      transporter.verify(function(error, success){
        if(error){
          console.log(error);
        } else{
          console.log('Server is ready to take our messeges');
        }
      });

});

module.exports = router;
