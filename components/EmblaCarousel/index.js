import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import { Box, Image } from "@chakra-ui/react";
import { useEmblaCarousel } from "embla-carousel/react";
// import { SRLWrapper } from "simple-react-lightbox";
const PARALLAX_FACTOR = 1.2;

const EmblaCarousel = ({ allImages }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [parallaxValues, setParallaxValues] = useState([]);

  const AUTOPLAY_INTERVAL = 4000;
  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const styles = embla.scrollSnapList().map((scrollSnap) => {
      const diffToTarget = scrollSnap - embla.scrollProgress();
      return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
    });
    setParallaxValues(styles);
  }, [embla, setParallaxValues]);

  useEffect(() => {
    if (!embla) return;
    onScroll();
    onSelect();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, onScroll]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <Box className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {allImages?.map((image, index) => {
            return (
              <div className="embla__slide" key={image?.public_id}>
                <Box h="87vh" className="embla__slide__inner">
                  <div
                    className="embla__slide__parallax"
                    style={{
                      transform: `translateX(${parallaxValues[index]}%)`,
                    }}
                  >
                    <Image
                      className="embla__slide__img"
                      src={`https://res.cloudinary.com/folasewa/image/upload/${image.public_id}`}
                      // alt="Folasewa photography"
                      objectFit="cover"
                    />
                  </div>
                </Box>
              </div>
            );
          })}
        </div>
      </div>

      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Box>
  );
};

export default EmblaCarousel;
