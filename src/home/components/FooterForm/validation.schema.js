import * as Yup from 'yup'

const FormValidation = Yup.object().shape({
  name: Yup.string().required('Поле обязательное!'),
  email: Yup.string()
    .email('Введите пожалуйста валидный номер email!')
    .required('Поле обязательное!'),
  telephone: Yup.string()
    .required('Поле обязательное!')
    .matches(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?/, {
      message: 'Введите пожалуйста валидный номер телефона!',
      excludeEmptyString: false,
    }),
})

export default FormValidation
