exports.getPosts = (req, res, next) => {
    res.status(200).json({posts: [{
        title: 'first tite',
        content: 'this is first'
    }]
})
}

exports.createPost = (req, res, next) => {
    const {title, content} = req.body;
    // Create post in db
    res.status(201).json({
        mesaage: ' Post created Successfully',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    })
}