"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const Review = () => {

  const [ reviews, setReviews ] = useState([]);
  useEffect( ()=> {
    fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  // console.log(reviews);

  return (
    <div className="my-20">
      {/* <h2>Total Reviews : {reviews.length}</h2> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review => <SwiperSlide key={review.id}>
            <div>
              <p>{review.review}</p>
              <h3 className="text-2xl text-yellow-600">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Review;
