import React from 'react';
import { makeStyles, Theme,ThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
import DayofWeek from './DayofWeek'
import {AppBox} from  "./customt";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  classes:any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index,classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className={classes}
    >
      {value === index && (
        <Box p={3} width="auto">
         {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 424,
    marginTop:theme.spacing(5)
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  panels: {
    width: '400px'
  }
  
}));

export default function ReservedProduct() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [dayall, setDayall] = React.useState([{'rowdata':[]}]);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  

  return (
 
    <AppBox className={classes.root}>
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        
        className={classes.tabs}
      >
        <Tab label="วันจันทร์" {...a11yProps(0)} />
        <Tab label="วันอังคาร" {...a11yProps(1)} />
        <Tab label="วันพุธ" {...a11yProps(2)} />
        <Tab label="วันพฤหัสบดี" {...a11yProps(3)} />
        <Tab label="วันศุกร์" {...a11yProps(4)} />
        <Tab label="วันเสาร์" {...a11yProps(5)} />
        <Tab label="วันอาทิตย์" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0} classes={classes.panels}>
       { <DayofWeek rowdata={dayall}/> }
      </TabPanel>
      <TabPanel value={value} index={1} classes={classes.panels}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} classes={classes.panels}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} classes={classes.panels}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4} classes={classes.panels}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5} classes={classes.panels}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6} classes={classes.panels}>
        Item Seven
      </TabPanel>
       
    </AppBox>
 
  );
}