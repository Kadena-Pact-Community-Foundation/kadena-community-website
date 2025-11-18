import React from 'react';
import Community from '@/components/community/Community';
import styles from '@/styles/community.module.css';

const CommunityPage = () => {
  return (
    <div className={styles.container}>
      <Community />
    </div>
  );
};

export default CommunityPage;
