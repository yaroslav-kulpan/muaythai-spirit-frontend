import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const RenderList = ({ list = [], }) => {
  return (
    <>
      {list.map(({item, id}) => (
        <List key={id}>
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
        </List>
      ))}
    </>
  )
}

export default RenderList
