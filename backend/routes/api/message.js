var express = require('express');
var router = express.Router();
var localData = require('../utils/testLocalData');

const sendMessage = (req,res,next) => {
    if(!localData.messageData[req.params.roomid])  localData.messageData[req.params.roomid] = [];
    localData.messageData[req.params.roomid].push({
        userid: req.params.id, 
        id: `${req.params.id}-${localData.messageData[req.params.roomid].length}`, 
        message: req.body.message
    });
    if(localData.roomData[req.params.roomid]){
        localData.roomData[req.params.roomid].last_msgid++;
    }
    res.send(`success`);
}
const getAllMessage = (req,res,next) => {
    console.log('localData', localData)
    res.json({messageList:localData.messageData[req.params.roomid]});
}
const getLatestMessage = (req,res,next) => {
    let msg = localData.messageData[req.params.roomid] || [];
    let lastcount = Number(req.params.lastcount) || 0;
    if(lastcount + 1 >= msg.length)  res.json({messageList:[]});
    else res.json({messageList:msg.slice(lastcount+1, msg.length)});
}

router.post('/:roomid/:id', sendMessage);
router.get('/:roomid', getAllMessage);
router.get('/:roomid/:lastcount', getLatestMessage);

module.exports = router;
