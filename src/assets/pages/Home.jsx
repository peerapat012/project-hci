import React from 'react'
import ReactDom from 'react-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import KuOne  from '../img/ku1.jpg'
import KuTwo from '../img/ku2.jpg'

function Home() {
    return (
        <div>
            <Carousel className='mt-4 p-5'>
                <div>
                    <img src={KuOne} />
                    <p className="legend">ทางเข้าพอพักใน</p>
                </div>
                <div>
                    <img src={KuTwo} />
                    <p className="legend">หอพักใน</p>
                </div>
                <div>
                    <img src={KuOne} />
                    <p className="legend">ทางเข้าพอพักใน</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Home
