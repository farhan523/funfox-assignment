import styles from "./styles.module.css"


function CurrentWeek({currentWeek}) {
  return (
    <div className={styles.weekBox}><p className={styles.text}>{currentWeek}</p></div>
  )
}

export default CurrentWeek