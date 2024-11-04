const posts = require('../db')

function getPosts(req, res) {
    res.json(posts);
}

const index = (req, res)=>{
    const singlePost = posts.find(element => element.slug === req.params.slug)

    if (!singlePost) {
        return res.status(404).json({ error: `404` })
    } else {
        res.status(200).json({ data: singlePost })
    }
}

module.exports = {
    getPosts,
    index
};