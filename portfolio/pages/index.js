import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/picture.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Emily Vickery</h1>
      <h2>Full Stack Junior Software Developer</h2>
      <img src={profilePic} alt="Profile Picture"/>
    </div>
  )
}
