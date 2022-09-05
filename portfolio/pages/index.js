import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/picture1.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Emily Vickery</h1>
      <div>
      <h2>Full Stack Junior Software Developer</h2>
      <Image src={profilePic} height="200vh" width="200vw" alt="Profile Picture"/>
      </div>
    </div>
  )
}
