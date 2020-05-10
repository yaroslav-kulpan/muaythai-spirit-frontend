import React, { useCallback, useContext } from 'react'
import FooterForm from '../../components/FooterForm'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../../../contacts-modal/actions/contacts.action'
import { Context } from '../../../app/context/spirit.context'

const FooterFormContainer = () => {
  const state = useSelector(({ form: { loading, message } }) => ({
    loading,
    message,
  }))
  const spiritService = useContext(Context)
  const dispatch = useDispatch()

  const sendMessageForm = useCallback(
    values => sendMessage(spiritService, dispatch)(values),
    [spiritService, dispatch]
  )
  return <FooterForm state={state} sendMessageForm={sendMessageForm} />
}

export default FooterFormContainer
