import React from 'react';
import MissionVisionContent from '@/components/mission-vision/MissionVisionContent';
import styles from '@/styles/mission-vision.module.css';

const MissionVisionPage = () => {
  return (
    <div className={styles.container}>
      <MissionVisionContent />
    </div>
  );
};

export default MissionVisionPage;
