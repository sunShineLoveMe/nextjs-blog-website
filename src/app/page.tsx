import Image from "next/image"
import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency .</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci officiis, quas, quos, quod voluptates
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contract</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" fill alt="" />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" fill alt="" />
      </div>
    </div>
  )
}

export default Home