import { Box, Text } from "@chakra-ui/react";
import * as React from "react";

import EmblaTestimonial from "./EmblaTestimonial";

const Testimonial = () => {
  const allTestimonials = [
    {
      imageUrl:
        "https://res.cloudinary.com/folasewa/image/upload/v1613122255/testimonials/WhatsApp_Image_2021-02-12_at_9.34.39_AM_g9hl6u.jpg",
      description:
        "We had a family shoot with fola and it was wonderful, everybody at the studio was welcoming and fola had a way of coercing my parents to make them comfortable and ignore their schedule cause of the shoot . When I saw the preview of our photos I gave him the nickname “Fola Extraordinaire “ he actually knew the perfect angles and gave us pictures made in heaven 🙌",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/folasewa/image/upload/v1613122259/testimonials/WhatsApp_Image_2021-02-12_at_9.35.10_AM_topqkr.jpg",
      description:
        "Folasewa made me feel comfortable through the shoot as it was my first time having a photoshoot. He was also patient through the process of editing as I had a lot of comments on the photos. I love my photos!",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/folasewa/image/upload/v1613122257/testimonials/WhatsApp_Image_2021-02-12_at_9.35.31_AM_texj94.jpg",
      description:
        "I loved the whole time I used with Folasewa in his studio. The pictures are part of the best I’ve had in recent years. The creativity and ambience gave me the best vibes, and I enjoy the after task relationship till date",
    },
  ];

  return (
    <Box as="section" mb={20} id="testimonials">
      <Text
        fontWeight={800}
        fontSize={{ base: "2xl" }}
        as="h2"
        textAlign="center"
      >
        Testimonials
      </Text>

      <EmblaTestimonial allImages={allTestimonials} />
    </Box>
  );
};

/**
 *
 */
export default Testimonial;
