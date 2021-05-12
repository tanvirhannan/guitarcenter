import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { useStaticQuery, graphql } from 'gatsby'

export default function Navigation() {
  const data = useStaticQuery(graphql`
    {
      allContentfulPromo {
        totalCount
        edges {
          node {
            promo
          }
        }
      }
    }
  `)

  const { promo } = data.allContentfulPromo.edges[0].node
  return (
    <p className={styles.promo}>{promo}</p>
  )
}