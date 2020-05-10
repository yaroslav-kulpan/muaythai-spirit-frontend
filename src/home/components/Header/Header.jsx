import React from 'react'
import styles from './Header.module.scss'
import ContactsModal from '../../../contacts-modal/components/ContactsModal/index'
import HeaderBackground from './HeaderBackground'
import Logotype from './Logotype'
import Container from '@material-ui/core/Container'

const Header = () => {
  return (
    <>
      <HeaderBackground tag="header" className={styles.header}>
        <Container maxWidth="lg">
          <div className={`${styles.description} mt-3`} id="back-to-top-anchor">
            <Logotype
              className={styles.logotype__img}
              alt="muaythai spirit logotype"
              title="Myaй Тай Спирит"
            />
            <p className={styles.heading__title}>Муай Тай для всех</p>
            <p className={styles.heading__title__big}>ЗАЛ ТАЙЛАНДСКОГО БОКСА</p>

            <ContactsModal
              variant="contained"
              className={styles.btn__signUp}
              buttonText=" Записаться на пробную тренировку"
            />
          </div>
        </Container>
      </HeaderBackground>
    </>
  )
}

export default Header
