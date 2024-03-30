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

export default function Week1({nextPage}) {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <Logo />
        <CurrentWeek currentWeek={"Week 1"} />
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
          <div className={styles.chapterHeading}>
            <p>Elements of Story Writing</p>
          </div>
          <p className={styles.welcomeText}>
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey?
            <br /> Over the next week, we will be practicing the different
            elements of story writing.
            <br /> Our aim is to make stories more interesting and exciting
          </p>
          <div className={styles.explanationBox}>
            <div className={styles.explanationTextBox}>
              <p>
                There are elements which make the foundation for story
                <br /> writing. An element is an essential part of something and{" "}
                <br />
                every fiction story has the same key elements
              </p>
            </div>
            <Boy />
          </div>
          <div className={styles.cloudDiv}>
              <Cloud1 />
              <Cloud2/>
              <Cloud3/>
              <Cloud4/>
              <Cloud5/>
          </div>
          <p className={styles.guideLinesText}>
          You must be familiar with some of these. If not, do not worry! we will<br/> cover all these elements as we go along.
          </p>
          <div className={styles.lessonSummary}>
              <div className={styles.summaryDiv}>
                <p>
                  For today’s lesson, we will try to understand and practice writing<br/> the setting for our stories.<br/>
                  The setting is an important element of every fiction story.
                </p>
              </div>
          </div>
        </div>
        <div className={styles.bottomDiv}>
          <SpeakIcon />
          <div className={styles.controlDiv}>
            <div className={styles.prevIconDiv}>
              <PrevIcon />
            </div>
            <div className={styles.currentPageDiv}>1</div>
            <div className={styles.prevIconDiv}>
              <NextPageIcon nextPage={nextPage}/>
            </div>
          </div>
          <InfoIcon />
        </div>
      </div>

      <div className={styles.rightSideBar}>
        <Scale />
        <Book2 />
        <Hat />
        <div className={styles.rightBackground}></div>
      </div>
    </div>
  );
}
