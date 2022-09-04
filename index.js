const Yup = require("yup");
const formSchema = Yup.object({
  username: Yup.string()
    .required("Username is required!")
    .min(6, "Username is short!")
    .max(30, "Username is too long!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password is short than 8 symbols! ")
    .max(30, "Password is too long than 30 symbols!"),
});

module.exports = { formSchema };
