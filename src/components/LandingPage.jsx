import { Link, useNavigate } from 'react-router';
import styles from '../css/LandingPage.module.css';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.h1}>GRASS!</h1>
        <h2 className={styles.h2}>WHERE PROPERTIES GROW!</h2>
        <p className={styles.p}>Agents Are Businesses</p>
        <p className={styles.p}>We Are The Operating System To Run Yours</p>
        <p className={styles.highlight}>Fast, Smart & Beautiful.</p>
        <button onClick={() => navigate('/profile')} className={styles.button}>LET'S GROW!</button>
      </div>
    </div>
  );
};

export default LandingPage;