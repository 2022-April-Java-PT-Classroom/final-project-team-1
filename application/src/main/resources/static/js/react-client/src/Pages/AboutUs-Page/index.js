import React from "react";
import style from "./style.module.scss";
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
          <h1 className={style.rekindleH1}>rekindle.</h1>
            <div className={style.missionWrapper}>
                 <h2 className={style.missionTitle}>mission.</h2>
                 <p className={style.mission}>
                    Helping couples reKindle their love by providing impactful and engaging resources to build strong relationships.
                 </p>   
            </div>               
            <div className={style.aboutWrapper}>
                <h2 className={style.aboutTitle}/>
                <p className={style.about}>
                   There is an abundance of sites dedicated to Helping you fing that 'spark'. 
                  ReKindle was created to nurture that spark into a flame; to help couples stay connected or reconnect. 
                       No fire will keep burning without fuel and attention.
                         Allow us to help you achieve your relationship goals; 
                         We will help you focus your efforts and by providing daily insights and 
                         conversation starters as well as weekly date night ideas.
                          Don't let you flames of your love be extinguished by negect, rekindle those flames and have a relationhip that others will envy. 
                          We have even included instructions for how to use this site.
                </p> 
            </div>
            <div className={style.Tabs} >
        <Paper className={style.tabLabel} >
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
        <div className={style.panels}>
        <TabPanel value={value} index={0}>
        The prompt page is meant to be used for you personal reflection. Use this page to compose your thoughts and feelings as directed by the prompt. This page is for you; be honest with yourself as you write.
        [ possible screenshot?]
      </TabPanel>
      <TabPanel value={value} index={1}>
       This is a fun page where datenight inspiration is offered to help keep your quality time fun. These ideas are generated based on your interests and answers to the questionaire. After your date you can write about the experience, what you liked about it and how it helped you connect as a couple.
       [ possible screenshot?]
      </TabPanel>
      <TabPanel value={value} index={2}>
       This page is for you to use as a couple. The questions are meant to spark a dialougue that will lead you deeper into the heart and mind of your partner. 
       [ possible screenshot?]
      </TabPanel>
      <TabPanel value={value} index={3}>
      You are encouraged to keep a daily journal of your thoughts and feelings about your relationship. It can be a very useful tool to reflect on later to remind you of where you came from and where you want to go.
      [ possible screenshot?]
      </TabPanel>
      </div>
      </Paper>
    </div>

    </div>
    );
}
export default AboutUsPage;