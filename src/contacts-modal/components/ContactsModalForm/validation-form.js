import * as Yup from 'yup'

const validateModalSchema = Yup.object().shape({
  name: Yup.string().required('Имя обязательное!'),
  email: Yup.string().email('Email не валидный!'),
  telephone: Yup.string()
    .required('Телефон обязательный!')
    .matches(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?/, {
      message: 'Введите пожалуйста валидный номер телефона!.',
      excludeEmptyString: false,
    }),
  groups: Yup.string().required('Выберите пожалуйста группу!'),
  coach: Yup.string(),
})

export default validateModalSchema
