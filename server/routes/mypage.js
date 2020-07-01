const express = require('express');
const router = express.Router();

const { mypageController } = require('../controller');

// * POST /mypage
router.post('/', mypageController.root.post);

// * POST /mypage/goal
router.post('/goal', mypageController.goal.post);

// * POST /mypage/todobox
router.post('/todobox', mypageController.todobox.post);

// * POST /mypage/selectvideo
router.post('/selectvideo', mypageController.selectvideo.post);

// * POST /mypage/todaycomplete
router.post('/todaycomplete', mypageController.todaycomplete.post);

module.exports = router;
