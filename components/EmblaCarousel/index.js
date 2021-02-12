import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { Box, Image } from "@chakra-ui/react";
import { useEmblaCarousel } from "embla-carousel/react";
// import { SRLWrapper } from "simple-react-lightbox";
const PARALLAX_FACTOR = 1.2;

const EmblaCarousel = ({ allImages }) => {
  const [viewportRef, embla] = useEmblaCarousel();
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [parallaxValues, setParallaxValues] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

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
  }, [embla, onSelect, onScroll]);

  const options = {
    // settings: {
    //   overlayColor: "rgb(25, 136, 124)",
    //   autoplaySpeed: 1500,
    //   transitionSpeed: 900,
    // },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
    },
    // caption: {
    //   captionColor: "#a6cfa5",
    //   captionFontFamily: "nunito, sans-serif",
    //   captionFontWeight: "300",
    //   captionTextTransform: "uppercase",
    // },
  };

  return (
    <Box
      // borderWidth="1px"
      //  borderColor="brand.primary"
      // p={1}
      className="embla"
    >
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
