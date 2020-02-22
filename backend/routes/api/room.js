var express = require('express');
var router = express.Router();

const createRoom = (req,res,next) => {
    res.send(`[createRoom]`);
}
const getRoom = (req,res,next) => {
    res.send(`[getRoom] ${req.params.id}`);
}
const editRoom = (req,res,next) => {
    res.send(`[editRoom] ${req.params.id}`);
}
const removeRoom = (req,res,next) => {
    res.send(`[removeRoom] ${req.params.id}`);
}
const addRoomMember = (req,res,next) => {
    res.send(`[addRoomMember] ${req.params.id} / ${req.params.userid}`);
}
const removeRoomMember = (req,res,next) => {
    res.send(`[removeRoomMember] ${req.params.id} / ${req.params.userid}`);
}

router.post('/', createRoom);
router.get('/:id', getRoom);
router.post('/:id', editRoom);
router.delete('/:id', removeRoom);
router.post('/:id/member/:userid', addRoomMember);
router.delete('/:id/member/:userid', removeRoomMember);

module.exports = router;
