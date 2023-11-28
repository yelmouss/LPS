import React from 'react'
import { Carousel } from 'react-bootstrap'

function Mycarousel() {
    return (
        <Carousel data-bs-theme="dark" className="sticky">
            <Carousel.Item>
                <img
                    className="d-block w-100 sliderimg"
                    src="https://actinutrition.fr/wp-content/uploads/2020/01/legume-hiver-1000.jpg"
                    alt="First slide" />
                <Carousel.Caption className="bg-dark bg-opacity-50" >
                    <h5>Fruits & légumes</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 sliderimg"
                    src="./fondation.jpg"
                    alt="Second slide" />
                <Carousel.Caption className="bg-dark bg-opacity-50">
                    <h5>Produits Alimentaires</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 sliderimg"
                    src="https://www.menage-services-perigueux.com/wp-content/uploads/menage-jardinage2-1.jpg"
                    alt="Third slide" />
                <Carousel.Caption className="bg-dark bg-opacity-50">
                    <h5>Bricolage et jardinage</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Mycarousel