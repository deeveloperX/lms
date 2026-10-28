const db = require("./connection");
const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const UserModel = require("./Models/UserModel");
const SubmitAssignmentModel = require("./Models/SubmitAssignmentModel");
const CourseModel = require("./Models/CourseModel");
const AssignmentModel = require("./Models/AssignmentModel");

const app = express();
app.use(bodyparser.json());
app.use(cors());
db;

app.get("/", (req, res) => {
  res.send("API Fetched Successfully👍 ");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const saltRound = 10;
    const newPassword = await bcrypt.hash(password, saltRound);
    const data = await new UserModel({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      password: newPassword,
      role: req.body.role,
    });
    await data.save();
    res.send("User Register Successfully");
  } catch (err) {
    res.send(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const e = req.body.email;
    const p = req.body.password;
    const userFound = await UserModel.findOne({ email: e });
    if (userFound) {
      const passMatch = await bcrypt.compare(p, userFound.password);
      if (passMath) {
        var token = jwt.sign({ foo: "bar" }, userFound.contact, {
          expiresIn: "10sec",
        });
        res.send({
          message: "User Login",
          token: token,
          role: userFound.role,
        });
      } else {
        res.send("Incorrect Password");
      }
    } else {
      res.send("User not found");
    }
  } catch (err) {
    res.send(err);
  }
});

app.post("/add_course", async (req, res) => {
  try {
    data = await new CourseModel({
      name: req.body.name,
      code: req.body.code,
      description: req.body.description,
    });
    data.save();
    res.send("Course Add Successfully");
  } catch (err) {
    res.send(err);
  }
});

app.get("/view_course", async (req, res) => {
  try {
    data = await CourseModel.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

app.post("/add_assignment", async (req, res) => {
  try {
    data = await new AssignmentModel(req.body);
    data.save();
    (res, send("Assignment Added Successfully"));
  } catch (err) {
    res.send(err);
  }
});

app.get("/view_assignment", async (req, res) => {
  try {
    data = await AssignmentModel.find();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

app.put("/enroll_course/:id", async (req, res) => {
  try {
    course_id = req.params.id;
    user_id = req.body.user_id;
    course = await CourseModel.findOne({ _id: course_id });
    a = course.user_id.includes(user_id);
    if (a) {
      res.send("Already Enrolled");
    } else {
      course.user.push(user_id);
      await course.save();
      res.send("Course Enrolled Successfully");
    }
  } catch (err) {
    res.send(err);
  }
});

app.get("/my_assignments/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const courses = await CourseModel.find({
        user_id: user_id
    });
    const course_ids = courses.map(course => course._id);
    const assignments = await AssignmentModel.find({
        course_id: { $in: course_ids }
    });
    res.send(assignments);
  } catch (err) {
    res.send(err);
  }
});

app.post('/submit_assignment/:id', async (req, res) => {
    try{
        assignment_id = await req.params.id;
        data = new SubmitAssignmentModel({
            answer: req.body.answer,
            assignment_id: assignment_id,
            user_id: req.body.id
        })
        data.save()
    }
    catch(err){
        res.send(err)
    }
})

app.put('/grade_assignment/:id', async (req, res) => {
    try{
        assignment_id = req.params.id
        data = SubmitAssignmentModel.findByIdAndUpdate(assignment_id, req.body)
        data.save()
    }
    catch(err){
        res.send(err)
    }
})

app.get('/mySubmitted_assignment/:id', async (req, res) => {
    try{
        user_id = await req.params.id
        data = SubmitAssignmentModel.find({user_id : user_id})
        res.send(data)
    }
    catch(err){
        res.send(err)
    }
})

app.listen(6005);   