import * as yup from 'yup';

// 1 Визначення схеми
const USER_SCHEMA = yup.object({
  login: yup.string().email('It is a not valid email').required(),
  password: yup
    .string()
    .trim()
    .min(8)
    .max(64)
    .matches(/(?=.*[A-Z].*).*/, 'Passw must contain at least 1 A-Z')
    .matches(/(?=.*[a-z].*).*/, 'Passw must contain at least 1 a-z')
    .required(),
});

const loginData = {
  login: 'fdsgfd@gsd',
  password: 'AAAAAAAaAAAAAA',
};

// 2 Перевірка об'єкта за схемою
USER_SCHEMA.validate(loginData)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//  Реалізувати схему для об'єкта, що містить інфо про авто у вгляді:
// {
//   model, productionYear, km, number (AA0000AA)
// }
// Здійснити валідацію об'єкта за схемою

const CAR_SCHEMA = yup.object({
  model: yup.string().matches(/(?=.*[A-Z].*).*/),
  // productionYear:yup.date().min('1900-01-01').max(new Date()),
  productionYear: yup.number().min(1900).max(new Date().getFullYear()),
  km: yup.number().min(1).max(99999),
  number: yup.string().matches(/^[A-Z]{2}\d{4}[A-Z]{2}$/),
});

CAR_SCHEMA.validate({
  model: 'Audi',
  productionYear: 2005,
  km: 777,
  number: 'KR7377EK',
})
  .then(data => console.log(data))
  .catch(e => console.log(e));
