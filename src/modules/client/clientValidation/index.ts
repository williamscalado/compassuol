const yup = require("yup")

export const clientDataValidation = yup.object().shape({
    name: yup.string().required().min(3),
    lastName: yup.string().required().min(3),
    gender: yup.string().required(),
    birthdayDate: yup.string().required().matches(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g, 'Birthday date is not valid'),
    email: yup.string().email().required(),
    password: yup.string().required(),
    age: yup.string(),
    idCity: yup.string().required()
})