var express = require('express');
var router = express.Router();

const sendMessage = (req,res,next) => {
    res.send(`roomid=${req.params.roomid}] id=${req.params.id} message=${req.params.message}`);
}
const getAllMessage = (req,res,next) => {
    res.send(`[모든메세지받기] roomid=${req.params.roomid}`);
}
const getLatestMessage = (req,res,next) => {
    res.send(`[최근메세지받기] roomid=${req.params.roomid} lastcount=${req.params.lastcount}`);
}


router.post('/:roomid/:id/:message', sendMessage);
router.get('/:roomid', getAllMessage);
router.get('/:roomid/:lastcount', getLatestMessage);

module.exports = router;
