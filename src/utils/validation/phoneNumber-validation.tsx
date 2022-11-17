import validator from 'validator';

export const phoneNumberValidation = (phone: string) => {
    return validator.isMobilePhone(phone)
}