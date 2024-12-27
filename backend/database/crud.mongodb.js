use("CrudDb")
// console.log(db)


//CRUD operations in MongoDB

//Create
// db.createCollection("courses")
// db.courses.insertOne({
//     name: "Raunak's web dev learning",
//     price: 100,
//     assignments: 15,
//     projects: 40
// })

// db.courses.insertMany(
//     [
//     {
//         "name": "Raunak's web dev learning",
//         "price": 100,
//         "assignments": 15,
//         "projects": 40
//     },
//     {
//         "name": "Raunak's AIML Bootcamp",
//         "price": 120,
//         "assignments": 20,
//         "projects": 35
//     },
//     {
//         "name": "Full Stack Developer Course",
//         "price": 150,
//         "assignments": 25,
//         "projects": 50
//     },
//     {
//         "name": "Frontend Development Essentials",
//         "price": 80,
//         "assignments": 12,
//         "projects": 30
//     },
//     {
//         "name": "Backend Development Mastery",
//         "price": 130,
//         "assignments": 18,
//         "projects": 40
//     },
//     {
//         "name": "Data Structures & Algorithms",
//         "price": 90,
//         "assignments": 22,
//         "projects": 25
//     },
//     {
//         "name": "Mobile App Development Basics",
//         "price": 110,
//         "assignments": 10,
//         "projects": 20
//     },
//     {
//         "name": "Cybersecurity Fundamentals",
//         "price": 140,
//         "assignments": 30,
//         "projects": 45
//     },
//     {
//         "name": "Cloud Computing with AWS",
//         "price": 170,
//         "assignments": 15,
//         "projects": 38
//     },
//     {
//         "name": "DevOps Crash Course",
//         "price": 95,
//         "assignments": 14,
//         "projects": 28
//     }
//     ]
// )


//Read
// let a = db.courses.find({price: 130})//findOne function return only the first document matching the find criteria
// console.log(a)

// let b = db.courses.find()
// console.log(b.count())


//Update
//db.courses.updateOne({price: 130}, {$set: {price: 133}})//updateMany function updates all the documents matching the criteria


//Delete
db.courses.deleteMany({price: 170})//deleteOne function deletes only the first document matching the criteria