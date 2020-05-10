import React from 'react'
import { Form, Formik } from 'formik'
import * as _ from 'lodash'
import InputMask from 'react-input-mask'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import validateModalSchema from './validation-form'
import LinearProgress from '@material-ui/core/LinearProgress'
import makeStyles from '@material-ui/core/styles/makeStyles'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  input: {
    marginTop: '1rem',
    // width: '100%',
  },
  submit: {
    margin: '1rem 0 1rem',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1000,
    color: '#fff',
  },
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
}))

const fields = [
  {
    name: 'name',
    label: 'Имя',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
]

const ContactsModalForm = ({
  sendMessageForm,
  handleClose,
  state: { loading },
}) => {
  const classes = useStyles()
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
          groups: ['Взрослая группа'],
          coach: ['Вечеслав Лозенко'],
        }}
        enableReinitialize
        validationSchema={validateModalSchema}
        onSubmit={(values, { resetForm }) => {
          sendMessageForm(values)
          handleClose()
          resetForm()
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            {fields.map(({ name, label, type }) => {
              return (
                <FormControl fullWidth key={name}>
                  <TextField
                    error={errors[name] && touched[name]}
                    id={name}
                    name={name}
                    type={type}
                    label={label}
                    value={'' || values[name]}
                    className={classes.input}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={label}
                    aria-describedby={`${name}-helper`}
                    inputProps={{
                      'aria-label': `${name}`,
                    }}
                    variant="outlined"
                    helperText={errors[name] && touched[name] && errors[name]}
                    fullWidth
                  />
                </FormControl>
              )
            })}
            <InputMask
              mask={'+38(099)-999-99-99'}
              value={'' || values.telephone}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {() => (
                <FormControl fullWidth>
                  <TextField
                    error={errors.telephone && touched.telephone}
                    id="telephone"
                    name="telephone"
                    type="tel"
                    label="Телефон"
                    className={classes.input}
                    placeholder="+38(099)-999-99-99"
                    aria-describedby={`telephone-helper`}
                    inputProps={{
                      'aria-label': `telephone`,
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
            <FormControl variant="outlined" className={classes.input} fullWidth>
              <InputLabel id="spirit-groups-select">Группа</InputLabel>
              <Select
                labelId="spirit-groups-select"
                id="spirit-groups"
                onChange={handleChange}
                onBlur={handleBlur}
                value={'' || values.groups}
                name="groups"
                label="Группа"
              >
                <MenuItem value="Детская группа">Детская группа</MenuItem>
                <MenuItem value="Взрослая группа">Взрослая группа</MenuItem>
                <MenuItem value="Взрослая группа(новички)">
                  Взрослая группа(новички)
                </MenuItem>
                <MenuItem value="Спортсмены">Спортсмены</MenuItem>
                <MenuItem value="Индивидуальные тренировки">
                  Индивидуальные тренировки
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.input} fullWidth>
              <InputLabel id="spirit-coach-select">Тренер</InputLabel>
              <Select
                labelId="spirit-coach-select"
                id="spirit-groups"
                onChange={handleChange}
                onBlur={handleBlur}
                value={'' || values.coach}
                name="coach"
                label="Тренер"
              >
                <MenuItem value="Вечеслав Лозенко">Вечеслав Лозенко</MenuItem>
                <MenuItem value="Андрей Мезенцев">Андрей Мезенцев</MenuItem>
                <MenuItem value="Антон Калитвинцев">Антон Калитвинцев</MenuItem>
                <MenuItem value="Евгений Краминский">
                  Евгений Краминский
                </MenuItem>
                <MenuItem value="Влада Кухаренко">Влада Кухаренко</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={
                !values.name ||
                !values.telephone ||
                (_.isEmpty(values.groups) && _.isEmpty(values.groups)) ||
                (errors.name && touched.name) ||
                (errors.telephone && touched.telephone) ||
                (errors.groups && touched.groups)
              }
              className={classes.submit}
              fullWidth
            >
              Записаться
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactsModalForm
