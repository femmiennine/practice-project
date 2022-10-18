const express = require('express');
const morgan = require('morgan');
const { loadRegister, registerUser } = require('../controllers/user.controller');
const { upload } = require('../middlewares/fileUpload');

const userRouter = express();

userRouter.use(morgan('dev'));
userRouter.use(express.json());
userRouter.use(express.urlencoded({ extended: true }));

userRoute.get('/register', loadRegister);
userRoute.post('/', upload.single('image'), registerUser);

module.exports = userRouter;
