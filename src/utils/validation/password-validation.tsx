import validator from 'validator';
export const passwordValidation = ( password: string): boolean => {
    return validator.isStrongPassword(password)

}
export const passwordEqual = (password: string, passwordConfirmation: string): boolean => {
    return validator.equals(password, passwordConfirmation)
}