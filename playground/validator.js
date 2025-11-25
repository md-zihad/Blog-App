const router = require("express").Router();
const { check, validationResult } = require("express-validator");

router.get("/validator", (req, res, next) => {
  res.status(200).json("All is Well");
});

router.post("/validator", 
    [
        check("username")
        .not()
        .isEmpty()
        .withMessage(`Username can't be Empty`)
        .isLength({max:15})
        .withMessage(`Username can't be greater than 15 characters`),
        
        check('email')
        .isEmail()
        .withMessage(`Please provide a valid email`)
    
    ], 
    (req, res, next) => {
        let error = validationResult(req)

        const formatter = (error) => {
            return error.msg
        }

        // console.log(error.errors[0])
        // console.log(error.isEmpty())
        // console.log(error.array())
        // console.log(error.mapped())
        console.log(error.formatWith(formatter).mapped())
        console.log(error)
        res.status(400).json(error)
    });

router.get("/validator", (req, res, next) => {});

module.exports = router;
