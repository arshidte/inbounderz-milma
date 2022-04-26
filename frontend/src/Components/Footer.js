import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer d-flex align-items-center justify-content-between'>
        <Container>
            <Row className='d-flex align-items-center justify-content-between'>
                <Col sm={6} className=''>
                    <img className='footerLogo' src='images/milmaLogoFooter.png' alt='logoFooter'></img>
                </Col>
                <Col>
                <Row className='d-flex justify-content-end align-items-center'>
                    <span className='d-flex justify-content-end copyright'>Follow us</span>
                    <img className='socialIcon' src='images/fb.png' alt='fb'></img>
                    <img className='socialIcon' src='images/yt.png' alt='fb'></img>
                    <img className='socialIcon' src='images/in.png' alt='fb'></img>
                    <img className='socialIcon' src='images/insta.png' alt='fb'></img>
                </Row>
                <Row className='d-flex justify-content-end copyright'>© Milmaicecream. All rights Reserved.</Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer