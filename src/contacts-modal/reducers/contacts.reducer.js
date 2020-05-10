import {
  CLEAR_MESSAGE,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from '../contacts-modal.constants'

const updateContacts = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      loading: false,
      message: null,
      error: null,
    }
  }

  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return {
        ...state.form,
        loading: true,
        message: null,
        error: null,
      }
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state.form,
        loading: false,
        message:
          'Спасибо, за ваше сообщение в скором времени мы с вами свяжемся!',
      }
    case SEND_MESSAGE_FAILURE:
      return {
        ...state.form,
        loading: false,
        message: null,
        error: action.payload,
      }
    case CLEAR_MESSAGE:
      return {
        ...state.form,
        message: null,
      }
    default:
      return state.form
  }
}

export default updateContacts
