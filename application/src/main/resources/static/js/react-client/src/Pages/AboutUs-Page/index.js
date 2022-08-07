import React from "react";
import style from "./style.module.scss";
import rekindle from "../../assests/logo.png";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";


const AboutUsPage =()=>{
const [value, setValue] = React.useState(4);
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}


    return(
        <div className={style.container}>
            <img className={style.logo} src={rekindle} alt="logo"/>
            <div className={style.missionWrapper}>
                 <h1 className={style.missionTitle}>Our Mission</h1>
                 <p className={style.mission}>
                    Helping couples reKindle their love by providing impactful and engaging resources to build strong relationships.
                 </p>   
            </div>               
            <div className={style.aboutWrapper}>
                <h2 className={style.aboutTitle}/>
                <p className={style.about}>
                    Dating sites abound, but what do you do <em>after</em> you have found that spark? that is where reKindle comes in. If your goal is to have a vibrant healthy relationship that will endure (you have found the right [place]). ReKindle was created to help couples stay connected or reconnect. The resources and tools are all designed to spark conversation or offer inspiration for creative date nights. No fire will keep burning without fuel and attention. Allow us to help you achieve your relationship goals; we will help you focus your efforts and by providing daily insights and conversation starters as well as weekly date night ideas. Don't let you flames of love be extinguished by negect, rekindle those flames and have a relationhip that others will envy. 
                </p> 
            </div>
            <div className={style.Tabs} style={{
        marginLeft: "20%", width:"800px"
      }}>
        <Paper >
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Prompt" />
          <Tab label="Date" />
          <Tab label="Discuss"  />
          <Tab label="Journal" />
        </Tabs>

        {/* <h3>TAB NO: {value} clicked!</h3> */}
        <TabPanel value={value} index={0}>
        prompt explanation
      </TabPanel>
      <TabPanel value={value} index={1}>
        date instructions
      </TabPanel>
      <TabPanel value={value} index={2}>
       dicuss how to's
      </TabPanel>
      <TabPanel value={value} index={3}>
       penny for your thoughts
      </TabPanel>
      </Paper>
    </div>

    </div>
    );
}
export default AboutUsPage;