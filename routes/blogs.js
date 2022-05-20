var express = require("express");
var router = express.Router();

var blogsImport = require("../public/sampleBlogs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json("Blogs Index Route");
});

router.get("/all", function (req, res, next) {
    const sortOrder = req.query.sort;
    blogsImport.blogPosts.sort((a, b) => {
        const aCreatedAt = a.createdAt
        const bCreatedAt = b.createdAt
        
        /* Compare by date object for extra utility
        const aCreatedAt = new Date(a.createdAt)
        const bCreatedAt = new Date(b.createdAt) */

        if (sortOrder === "asc") {
            if (aCreatedAt < bCreatedAt) {
              return -1;
            }
            if (aCreatedAt > bCreatedAt) {
              return 1;
            }
        }
        if (sortOrder === "desc") {
            if (aCreatedAt > bCreatedAt) {
              return -1;
            }
            if (aCreatedAt < bCreatedAt) {
              return 1;
            }
        }
        return 0;
      })

  res.json(blogsImport.blogPosts);
});

router.get("/singleblog/:blogId", function (req, res, next) {
  const blogId = req.params.blogId;
  res.json(findBlogId(blogId));
});
const findBlogId = (blogId) => {
  const foundBlog = blogsImport.blogPosts.find(element => element.id === blogId);
  return foundBlog;
};
router.get("/postblog", function (req, res, next) {
  res.render('postBlog');
})

router.get("/displayblogs", function (req, res, next) {
  res.render('displayBlogs');
})

router.get("/displaysingleblog", function (req, res, next) {
  res.render('displaySingleBlog');
})

// router.put()
// router.delete()

module.exports = router;