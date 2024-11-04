const express = require('express')
const router = express.Router()

const postsController = require('../controllers/postscontroller.js')
router.get('/posts', postsController.getPosts)
router.get('/posts/:slug', postsController.index)
router.get('/tags/:tags', postsController.getPostsByTag)





module.exports = router