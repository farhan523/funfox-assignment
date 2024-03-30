import styles from "./styles.module.css";
import Logo from "../../../assets/images/logo";
import PencilIcon from "../../../assets/images/pencilIcon";
import BagIcon from "../../../assets/images/bagIcon";
import BookIcon from "../../../assets/images/bookIcon";
import CurrentWeek from "../../components/WeekBox/Week";
import Scale from "../../../assets/images/scale";
import Book2 from "../../../assets/images/book2";
import Hat from "../../../assets/images/hat";
import SpeakIcon from "../../../assets/images/speakIcon";
import InfoIcon from "../../../assets/images/infoIcon";
import PrevIcon from "../../../assets/images/prevIcon";
import PageIcon from "../../../assets/images/pageIcon";
import NextPageIcon from "../../../assets/images/nextIcon";
import Boy from "../../../assets/images/boy";
import Cloud1 from "../../../assets/images/cloud1";
import Cloud2 from "../../../assets/images/cloud2";
import Cloud3 from "../../../assets/images/cloud3";
import Cloud4 from "../../../assets/images/cloud4";
import Cloud5 from "../../../assets/images/cloud5";
import Clock from "../../../assets/images/clock";
import HomeIcon from "../../../assets/images/homeIcon";
import InfoClockIcon from "../../../assets/images/infoClockIcon";
import InfoHomeIcon from "../../../assets/images/infoHomeIcon";
import HelpIcon from "../../../assets/images/helpIcon";

export default function Week2({nextPage,prevPage}) {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <Logo />
      </div>
      <div className={styles.leftSideBar}>
        <div className={styles.leftBarIconsDiv}>
          <PencilIcon />
          <BagIcon />
          <BookIcon />
        </div>
      </div>
      <div className={styles.centerArea}>
        <div className={styles.centerContentDiv}>
          <p className={styles.welcomeText}>
            Can you figure out the definition of setting from the following
            examples?
          </p>
          <p className={styles.adviseText}>
            {" "}
            (take a minute to think about this)
          </p>
          <div className={styles.imageDiv}>
            <div>
              <div className={styles.image1}></div>
              <p className={styles.imageDis}>Sunny day at a beach</p>
            </div>
            <div>
              <div className={styles.image2}></div>
              <p className={styles.imageDis}>
                A cold rainy night in a <br/>haunted house in October
              </p>
            </div>
          </div>
          <p className={styles.question}>So, what do you think the definition of setting is?</p>
          
          <div className={styles.guessDiv}>
            <p>Any guesses?</p>
            <div className={styles.inputDiv}>
                <input className={styles.input} type="text"/>
            </div>
            <p>Hint:</p>
            <div className={styles.helpIcon}>
            <Clock/>
            <HomeIcon/>
            </div>
          </div>
          <div className={styles.infoDiv}>
                <p>Setting is the time   <div className={styles.infoIconDiv}><InfoClockIcon/> </div>  and place  <InfoHomeIcon/>   of a story. It often answers the questions: when? and where?</p>
          </div>
          <p className={styles.details}>The time of the story could be in the past, future, day, night, summer or winter.
                A story may take place in a school, a mall, a desert, an airplane or in a variety
                of other places.</p>
          
        </div>
        <div className={styles.bottomDiv}>
          <SpeakIcon />
          <div className={styles.controlDiv}>
            <div className={styles.prevIconDiv}>
              <PrevIcon prevPage={prevPage}/>
            </div>
            <div className={styles.currentPageDiv}>2</div>
            <div className={styles.prevIconDiv}>
              <NextPageIcon nextPage={nextPage}/>
            </div>
          </div>
          <InfoIcon />
        </div>
      </div>

      <div className={styles.rightSideBar}>
        <Scale />
        <HelpIcon />
        <Hat />
        <div className={styles.rightBackground}></div>
      </div>
    </div>
  );
}
