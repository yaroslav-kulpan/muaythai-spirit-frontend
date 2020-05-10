import { GET_FAQ_ITEM } from '../home.constants'

const updateFaq = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      loading: false,
      faqs: [],
    }
  }

  switch (action.type) {
    case GET_FAQ_ITEM:
      return {
        ...state.faq,
        faqs: [],
      }
    default:
      return state.faq
  }
}

export default updateFaq
