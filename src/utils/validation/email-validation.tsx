import validator from "validator"



export const emailValidation = (email: string): boolean => {

    return validator.isEmail(email)
}