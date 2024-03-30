import React, { useState } from "react";
import styles from "./styles.module.css";
import CloseIcon from "../../../assets/images/closeIcon";
import Clock from "../../../assets/images/clock";
import HomeIcon from "../../../assets/images/homeIcon";



export default function Model({isModalOpen,setIsModal}) {
    console.log(setIsModal)
    const [guess,setGuess] = useState("> So,what do you think the definition of a story.")
  return isModalOpen && (
    <div className={styles.modelContainer}>
      <div className={styles.childDiv}>
        <div className={styles.closeIconDiv}>
          <CloseIcon setIsModelOpen={setIsModal}/>
        </div>
        <p className={styles.heading}>Guide Sheet</p>
        <div className={styles.content}>
          <p className={styles.question}>So, what do you think the definition of setting is?</p>
          <div className={styles.guessDiv}>
            <p>Any guesses?</p>
            <div className={styles.inputDiv}>
              <input value={guess} className={styles.input} type="text" />
            </div>
            <p >Hint:</p>
            <div className={styles.helpIcon}>
              <Clock />
              <HomeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
