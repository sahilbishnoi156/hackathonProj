import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoEllipsisVertical } from "react-icons/io5";
import Image from "next/image";

const Reviews = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="h-full border rounded-xl flex flex-col bg-white p-4">
                <div className="rounded-xl h-full w-full flex items-center  gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      alt="notfound"
                      src={"/avatarDummy.avif"}
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span>Daniel Josh</span>
                    <span className="text-xs flex items-center justify-center rounded cursor-pointer w-fit text-neutral-600">
                      since: 3/5/24
                    </span>
                  </div>
                  <div className="">
                    <IoEllipsisVertical />
                  </div>
                </div>
                <div className="h-96 overflow-y-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                  rerum, aut nulla nemo minus perspiciatis neque quos esse
                  cumque molestiae voluptate maxime quia eum cum assumenda
                  reiciendis accusantium veniam iste!
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
