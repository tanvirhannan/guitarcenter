import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { useStaticQuery, graphql } from 'gatsby'

export default function Products() {
  const data = useStaticQuery(graphql`
  {
    allContentfulLessons {
        nodes {
          lessonName
          lessonDesc
          lessonImage {
            file {
              url
            }
          }
          
        }
      }
  }
`)

  return (
    <>
        <div className={styles.productsWrapper}>
            <h1 className={styles.heading}>New Lessons</h1>
            <div className={styles.products}>
                {data.allContentfulLessons.nodes.map((lesson) => (
                    <div className={styles.lessonWrap}>
                        <div className={styles.lesson}>
                            <img className={styles.prodImg} src={lesson.lessonImage.file.url}/>
                        </div>
                        <div className={styles.lesson}>
                             <div className={styles.product}>{lesson.lessonName}</div>
                        </div>
                        <div className={styles.lesson}>
                         <div className={styles.lessonDesc}>{lesson.lessonDesc}</div>
                       </div>
                    </div>

                ))}
            </div>
        </div>
    </>
  )
}