const express = require('express');
const router = express.Router();
const {
  httpPostGet,
  httpGetPostById,
  httpCreatePost,
  httpDeletePost,
  httpUpdatePost,
} = require('../controllers/post.controller.js');

router.get('/', httpPostGet);
router.get('/:id', httpGetPostById);
router.post('/', httpCreatePost);
router.delete('/:id', httpDeleteUser);
router.post('/update-user/:id', httpUpdatePost);

module.exports = router;
