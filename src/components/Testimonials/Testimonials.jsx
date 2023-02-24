import React from 'react'
import './Testimonials.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

const Testimonials = () => {

    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit amet magni error molestias cumque totam facilis unde fugit voluptates laboriosam veniam nihil in dolores ipsa maiores, exercitationem tempore nostrum odit."
        },
        {
            img: profilePic2,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit amet magni error molestias cumque totam facilis unde fugit voluptates laboriosam veniam nihil in dolores ipsa maiores, exercitationem tempore nostrum odit."
        },
        {
            img: profilePic3,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit amet magni error molestias cumque totam facilis unde fugit voluptates laboriosam veniam nihil in dolores ipsa maiores, exercitationem tempore nostrum odit."
        },
        {
            img: profilePic4,
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit amet magni error molestias cumque totam facilis unde fugit voluptates laboriosam veniam nihil in dolores ipsa maiores, exercitationem tempore nostrum odit."
        }
    ]


  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clinents always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background:"var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>
        {/* ---------------------slider-------------- */}
        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonials" id='Testimonials'>
                            <img src={client.img} />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials 