var express = require('express');
var axios = require('axios');
var router = express.Router();
var localData = require('../utils/testLocalData');
let apiUrl = 'http://localhost:8081';

const sendMessage = (req,res,next) => {
    console.log('response', req.body)

    axios.post(apiUrl+'/message', req.body).then(response => {
        console.log('response', response.data)
        res.send(`success`);
    })

}
const getAllMessage = (req,res,next) => {
    axios.get(apiUrl+'/message/'+req.params.roomid).then(response => {
        console.log('response', response.data)
        let messageList = response.data;
        res.json({messageList:messageList});
    })

}
const getLatestMessage = (req,res,next) => {
    let msg = localData.messageData[req.params.roomid] || [];
    let lastcount = Number(req.params.lastcount) || 0;
    if(lastcount + 1 >= msg.length)  res.json({messageList:[]});
    else res.json({messageList:msg.slice(lastcount+1, msg.length)});
}

router.post('/send', sendMessage);
router.get('/:roomid', getAllMessage);
router.get('/:roomid/:lastcount', getLatestMessage);

module.exports = router;
