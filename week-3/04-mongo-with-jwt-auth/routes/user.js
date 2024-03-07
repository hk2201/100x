const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Success"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            msg: "Somethings Wrong"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        courses : allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;
    

    User.updateOne({
        username : username,
        "$push":{
            purchasedCourses : courseId
        }
    })
    .catch((e)=>{
        console.log(e);
    })
    .then(()=>{
        res.json({
            msg : "Success"
        })
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.username
    });
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        purchasedCourses : courses
    })

});

module.exports = router