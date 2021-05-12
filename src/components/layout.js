import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import styles from './navigation.module.css'
import Products from './products.js'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        <img className={styles.gcLogo} src={require('./images/header.png')} />
        <img className={styles.gcLogo2} src={require('./images/promo3.jpg')} />

        <img className={styles.gcLogo} src={require('./images/products.png')} />

        <Products />
        {children}

      </Container>
    )
  }
}

export default Template
