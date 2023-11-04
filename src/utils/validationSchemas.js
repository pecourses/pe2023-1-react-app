import * as yup from 'yup';

export const USER_VALIDATION_SCHEMA = yup.object({
  userName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
});

export const USER_CONTACTS_VALIDATION_SCHEMA = yup.object({
  userName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z][a-z]*$/)
    .required(),
  phoneNumber: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/)
    .required(),
  email: yup.string().email().required(),
  birthday: yup.date().max(new Date()),
});
