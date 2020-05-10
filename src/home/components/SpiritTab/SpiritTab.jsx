import React, { useCallback, useEffect } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { spiritItem } from './spirit-item'
import SpiritTabItem from '../SpiritTabItem'
import { useMediaQuery, useTheme, makeStyles } from '@material-ui/core'
import MobileTabs from '../../../mobile/components/MobileTabs'

export function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    backgroundColor: 'rgb(35, 39, 48)',
    color: '#fff',
    display: 'flex',
    minHeight: 264,
    overflowX: 'hidden',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    '& .MuiTab-root': {
      padding: '44px 12px',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#d29d41',
    },
  },
}))

export default function SpiritTab() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [data, setData] = React.useState()
  const handleChange = useCallback((event, newValue) => setValue(newValue), [])

  useEffect(() => {
    setData(spiritItem)
  }, [])

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  if (matches) {
    return (
      <section className={classes.root} id="abonement">
        <MobileTabs />
      </section>
    )
  }
  return (
    <section className={classes.root} id="abonement">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: '#1f232c', color: '#fff' }}
        aria-label="abonements"
        className={classes.tabs}
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
      {data &&
        data.map((item, index) => (
          <SpiritTabItem
            abonement={item}
            key={item.id}
            index={index}
            value={value}
          />
        ))}
    </section>
  )
}
