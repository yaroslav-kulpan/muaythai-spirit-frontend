import React, { useContext } from 'react'
import { Context } from '../../../app/context/spirit.context'
import { useDispatch, useSelector } from 'react-redux'
import ContactsModalForm from '../../components/ContactsModalForm'
import { sendMessage } from '../../actions/contacts.action'

const ContactsModalFormContainer = props => {
  const spiritServices = useContext(Context)
  const dispatch = useDispatch()
  const state = useSelector(({ form: { loading, message } }) => ({
    loading,
    message,
  }))

  const sendMessageForm = sendMessage(spiritServices, dispatch)

  return (
    <ContactsModalForm
      state={state}
      sendMessageForm={sendMessageForm}
      {...props}
    />
  )
}

export default ContactsModalFormContainer
