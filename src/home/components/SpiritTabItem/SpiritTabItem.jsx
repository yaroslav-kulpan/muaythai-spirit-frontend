import React from 'react'
import { TabPanel } from '../SpiritTab/SpiritTab'
import './SpiritTabItem.scss'
import ContactsModal from '../../../contacts-modal/components/ContactsModal/ContactsModal'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  button__submit: {
    backgroundColor: '#dfa700',
    '&:hover': {
      backgroundColor: '#cc9a06',
    }
  }
})

const SpiritTabItem = ({ abonement, value, index }) => {
  const classes = useStyles()
  const {
    forWhom,
    when,
    description,
    cost,
    coach,
    data,
    acceptet,
  } = abonement

  return (
    <>
      <TabPanel value={value} index={index}>
        <Typography
          variant="h5"
          component="h5"
          className="pricing-plan__abonement__title"
        >
          {forWhom}
        </Typography>
        <div className="abonement__wrapper">
          <div className="abonement__time__wrapper mr-5">
            <h5 className="abonement__text--title">{when.title}</h5>
            <div className="d-flex flex-xs-column">
              <div className="abonement__time__start">
                {when.start}
                <span className="abonement__time__start--part-too">
                  {when.starPart}
                </span>
              </div>
              <div className="abonement__time__end">
                {when.end}
                <span className="abonement__time__end--part-too">
                  {when.endPart}
                </span>
              </div>
            </div>
            <p className="abonement__description">{description}</p>
          </div>
          <div className="abonement__price__wrapper">
            <h5 className="abonement__text--title text-white">{cost.title}</h5>
            <div className="abonement__price text-white">
              {cost.value}
              <span className="abonement__price--part-too">
                {cost.currency}
              </span>
            </div>
            <strong className="abonement__traning-quantity text-white">
              {cost.count}
            </strong>
          </div>
        </div>
        <h5 className="abonement__text--title mt-3">{coach.title}</h5>
        <div className="d-flex">
          {data &&
            data.map(({ name, image, id }) => (
              <div className="avatar__wrapper text-center" key={id}>
                {image}
                <h4 className="coach__name">{name}</h4>
              </div>
            ))}
        </div>
        <p className="acceptet__year">{acceptet}</p>
        <ContactsModal
          className={classes.button__submit}
          variant="contained"
          color="primary"
          buttonText=" Записаться"
        />
      </TabPanel>
    </>
  )
}

export default SpiritTabItem
