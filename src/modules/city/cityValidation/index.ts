const yup = require("yup")

export const cityValidationData = yup.object().shape({
    name: yup.string().required().min(3),
    stateId: yup.string().required(),
    active: yup.boolean().required(),
    createAt: yup.number().required()
})