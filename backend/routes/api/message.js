var express = require('express');
var router = express.Router();

let messageData = {};

const pushMessage = (key, message) => {
    
}

const sendMessage = (req,res,next) => {
    if(!messageData[req.params.roomid])  messageData[req.params.roomid] = [];
    messageData[req.params.roomid].push({
        userid: req.params.id, 
        id: `${req.params.id}-${messageData[req.params.roomid].length}`, 
        message: req.params.message
    });
    res.send(`success`);
}
const getAllMessage = (req,res,next) => {
    console.log('getAllMessage')
    console.log(messageData)
    res.send(messageData[req.params.roomid]);
}
const getLatestMessage = (req,res,next) => {
    let msg = messageData[req.params.roomid] || [];
    let lastcount = Number(req.params.lastcount) || 0;
    if(lastcount + 1 >= msg.length)  res.send([]);
    else res.send(msg.slice(lastcount+1, msg.length));
}


router.post('/:roomid/:id/:message', sendMessage);
router.get('/:roomid', getAllMessage);
router.get('/:roomid/:lastcount', getLatestMessage);

module.exports = router;
