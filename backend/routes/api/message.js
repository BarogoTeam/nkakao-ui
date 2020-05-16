var express = require('express');
var router = express.Router();

let messageData = {};

const sendMessage = (req,res,next) => {
    if(!messageData[req.params.roomid])  messageData[req.params.roomid] = [];
    messageData[req.params.roomid].push({
        userid: req.params.id, 
        id: `${req.params.id}-${messageData[req.params.roomid].length}`, 
        message: req.body.message
    });
    res.send(`success`);
}
const getAllMessage = (req,res,next) => {
        console.log('getAllMessage')
    console.log(messageData)
    res.json({messageList:messageData[req.params.roomid]});
}
const getLatestMessage = (req,res,next) => {
    let msg = messageData[req.params.roomid] || [];
    let lastcount = Number(req.params.lastcount) || 0;
    if(lastcount + 1 >= msg.length)  res.json({messageList:[]});
    else res.json({messageList:msg.slice(lastcount+1, msg.length)});
}

router.post('/:roomid/:id', sendMessage);
router.get('/:roomid', getAllMessage);
router.get('/:roomid/:lastcount', getLatestMessage);

module.exports = router;
