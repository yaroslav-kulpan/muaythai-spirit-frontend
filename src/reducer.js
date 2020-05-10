import updateFaq from './home/reducers/faq.reducer'
import updateContacts from './contacts-modal/reducers/contacts.reducer'

const reducer = (state, action) => ({
  faq: updateFaq(state, action),
  form: updateContacts(state, action),
})

export default reducer
