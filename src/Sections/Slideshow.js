import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import ModalInfo from './Components/ModalInfo'
import house1 from '../Images/house1.jpg'
import house2 from '../Images/house2.jpg'
import house4 from '../Images/house4.jpg'


export default function Slideshow() {
  return (
    <Container fluid id='slideshow-container'>
        <Carousel id='listings' className='slideshow'>
            <Carousel.Item className='slideshow-item'>
                <img
                className="w-100 h-100"
                src={house1}
                alt="First slide"
                height='auto'
                />

                <Carousel.Caption className='slideshow-caption'>
                <h3>Featured Listing</h3>
                <h1>123 Main Dr.</h1>
                <p>$811,712 | 4 Bed | 3 Bath | 3900sqft</p>
                <ModalInfo title={'123 Main Dr.'} body={"The Sherman Residence designed by famed architect Peter Tolkin sits on 3.26 acres south of Ventura BLVD. The house is made up of a series of board-formed concrete, wood and glass pavilions connected by gallery spaces that together define a central courtyard. The indigenous trees and working plants consisting of Sycamores, orange, avocado, palm trees and succulents can be seen from every room. Multiple structures including the main residence, guest house, gym and offices intentionally placed in this enchanting setting for privacy and views. An over sized north south tennis court with viewing deck is tucked atop the property. Once in a lifetime opportunity to own this exceptional estate."} />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slideshow-item'>
                <img
                className="w-100 h-100"
                src={house2}
                alt="Second slide"
                height='auto'
                />

                <Carousel.Caption>
                <h3>Featured Listing</h3>
                <h1>29123 Coachella Dr.</h1>
                <p>$511,712 | 4 Bed | 3 Bath | 3730sqft</p>
                <ModalInfo 
                    title={'29123 Coachella Dr.'} 
                    body={"Tucked into the hills of Beverly Hills PO and set behind gates is this Mid-Century modern masterpiece that has been remodeled to perfection while restoring original detail. Walls of glass in every room allow for natural light to flood each and every space and provide views of the serene outdoor gardens that wrap the property. Large primary suite with sliding glass doors that lead out to the pool and spa, two generous secondary bedrooms, spacious cook's kitchen with over-sized center island, dining room and gorgeous living spaces make this the perfect place to call home."} />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slideshow-item'>
                <img
                className="w-100 h-100"
                src={house4}
                alt="Third slide"
                height='auto'
                />

                <Carousel.Caption>
                <h3>Featured Listing</h3>
                <h1>90453 Zellion Dr.</h1>
                <p>$911,712 | 5 Bed | 3 Bath | 4300sqft</p>
                <ModalInfo title={'90453 Zellion Dr.'} body={"Private gated compound located in prime Lower Bel Air on the fifteenth fairway of the Bel Air Country Club. Newly renovated and in move-in condition, the 6,200 sq.ft. main residence offers the best of Southern California indoor/outdoor living and a contemporary open floor plan with great space for entertaining, all at an unbeatable price in a world class location. The main house features 4 bedrooms and 6.5 bathrooms, including a sophisticated, oversized primary suite complete with dual bathrooms and bright sunny office. The large cook's kitchen features Subzero, Viking and Bosch appliances, breakfast room, wine refrigerator, indoor brick barbecue, and views of the impossibly green grounds. Additional features of this gracious compound include a separate pool house/gym with bath, a cozy library/reading room, and a large upstairs deck overlooking an over-sized pool, a pool pavilion with fireplace, lush mature landscaping, and a sprawling lawn."} />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>
  )
}
