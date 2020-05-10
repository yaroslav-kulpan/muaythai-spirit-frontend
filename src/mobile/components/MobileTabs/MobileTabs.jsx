import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SpiritTabItem from '../../../home/components/SpiritTabItem'
import { spiritItem } from '../../../home/components/SpiritTab/spirit-item'
import makeStyles from '@material-ui/core/styles/makeStyles'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  }
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    '& .MuiTabs-scrollButtonsDesktop': {
      display: 'flex',
    },
  },
  navbarTab: {
    backgroundColor: 'rgb(35, 39, 48)',
    color: '#fff',

    '& .MuiTab-textColorPrimary': {
      color: '#fff',
    },
    '& .MuiTab-textColorPrimary.Mui-selected': {
      color: '#d29d41',
    },
    '& .PrivateTabIndicator-colorPrimary-443': {
      backgroundColor: '#d29d41',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#d29d41',
    },
  },
})

export default function MobileTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [data, setData] = React.useState()
  const handleChange = useCallback((event, newValue) => setValue(newValue), [])

  useEffect(() => {
    setData(spiritItem)
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.navbarTab}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {data &&
            data.map((item, index) => (
              <Tab
                label={item.title}
                {...a11yProps(index)}
                key={item.id + index}
              />
            ))}
        </Tabs>
      </AppBar>
      {data &&
        data.map((item, index) => (
          <SpiritTabItem
            abonement={item}
            key={item.id}
            index={index}
            value={value}
          />
        ))}
    </div>
  )
}
