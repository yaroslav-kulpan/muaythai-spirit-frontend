import React from 'react'
import { Form, Formik } from 'formik'
import FormValidation from './validation.schema'
import classes from '../Footer/Footer.module.scss'
import InputMask from 'react-input-mask'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

const formFields = [
  {
    name: 'name',
    label: 'Имя',
  },
  {
    name: 'email',
    label: 'Email',
  },
]

const FooterForm = ({ state: { loading }, sendMessageForm }) => {
  return (
    <>
      {loading && (
        <div className={classes.root}>
          <LinearProgress />
        </div>
      )}
      <Formik
        initialValues={{
          name: '',
          email: '',
          telephone: '',
        }}
        validationSchema={FormValidation}
        onSubmit={(values, { resetForm }) => {
          sendMessageForm(values)
          resetForm({})
        }}
      >
        {({ handleChange, handleBlur, errors, touched, values }) => (
          <Form
            // className={classes.form}
            autoComplete="off"
          >
            {formFields.map(({ name, label }) => (
              <FormControl className={classes.inputMargin} key={name} fullWidth>
                <TextField
                  error={errors[name] && !!touched[name]}
                  id={name}
                  name={name}
                  label={label}
                  value={'' || values[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={label}
                  className={classes.input}
                  aria-describedby={`${name}-helper`}
                  inputProps={{
                    'aria-label': `${name}-login`,
                  }}
                  variant="outlined"
                  helperText={errors[name] && touched[name] && errors[name]}
                  fullWidth
                />
              </FormControl>
            ))}
            <InputMask
              mask={'+38(099)-999-99-99'}
              value={'' || values.telephone}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {() => (
                <FormControl className={classes.inputMargin} fullWidth>
                  <TextField
                    error={errors.telephone && !!touched.telephone}
                    id="telephone-footer"
                    name="telephone"
                    label="Телефон"
                    placeholder="Телефон"
                    className={classes.input}
                    aria-describedby={`telephone-helper-text`}
                    inputProps={{
                      'aria-label': `telephone-aria`,
                    }}
                    variant="outlined"
                    helperText={
                      errors.telephone && touched.telephone && errors.telephone
                    }
                    fullWidth
                  />
                </FormControl>
              )}
            </InputMask>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={
                !values.name ||
                !values.email ||
                !values.telephone ||
                !!errors.name ||
                !!errors.email ||
                !!errors.telephone
              }
              fullWidth
            >
              Записаться на пробную тренировку
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default FooterForm
