import Image from 'next/image';
import React from 'react'
import styles from './page.module.css'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, eaque.
            </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Accusamus minima aperiam eveniet iure sed repellat magnam nostrum omnis, 
            dolore nulla.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/9060352/pexels-photo-9060352.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/9060352/pexels-photo-9060352.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Expedita, id quod voluptate dolorum porro maiores eligendi distinctio vitae consectetur harum. 
          Animi temporibus veritatis possimus minima, tenetur error iste assumenda enim eaque labore dicta, 
          cupiditate eligendi eius deleniti saepe vitae sequi. Illo rerum illum ipsum pariatur quae. 
          Quaerat odio laudantium distinctio!
        </p>
      </div>
    </div>
  );
};

export default BlogPost