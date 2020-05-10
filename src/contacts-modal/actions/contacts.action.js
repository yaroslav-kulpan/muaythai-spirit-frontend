import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE, CLEAR_MESSAGE
} from '../contacts-modal.constants'

const sendMessageRequested = () => ({
  type: SEND_MESSAGE_REQUEST,
})

const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS,
})

const sendMessageError = error => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
})

const clearThankYouMessage = () => ({
  type: CLEAR_MESSAGE
})

const sendMessage = (spiritService, dispatch) => data => {
  dispatch(sendMessageRequested())
  spiritService
    .postMessage(data)
    .then(() => dispatch(sendMessageSuccess()))
    .catch(error => dispatch(sendMessageError(error)))
}

export { sendMessage, clearThankYouMessage }
