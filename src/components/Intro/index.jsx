import Image from 'next/image'
import styles from './styles.module.css'

const Index = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.backgroundImage}>
        <Image
          src={'/images/abstract.jpg'}
          fill={true}
          alt="Abstract"
        />
      </div>

      <div className={styles.introContainer}>
        <div data-scroll data-scroll-speed='0.3' className={styles.introImage}>
          <Image
            src={'/images/horizon.jpg'}
            fill={true}
            alt="background image"
          />
        </div>
        <h1 data-scroll data-scroll-speed='0.7'>Smooth Scroll</h1>
      </div>
    </div>
  )
}

export default Index
