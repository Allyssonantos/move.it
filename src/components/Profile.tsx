import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/68858220?s=460&u=ef8deedb95e9ad40fdb7f027213a2f933684c88d&v=4" alt="Allysson Santos"/>
      <div>
        <strong>Allysson Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}