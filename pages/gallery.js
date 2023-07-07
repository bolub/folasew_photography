import React from 'react';
import { useRouter } from 'next/router';
import { Center, Text, Box, Image, SimpleGrid } from '@chakra-ui/react';
import { SRLWrapper } from 'simple-react-lightbox';
import Layout from '../components/Layout';
import { BeatLoader } from 'react-spinners';
import { EmptyV2 } from '../components/UI/Icons/Empty';
import { getItem } from '../helpers/localStorage';

const Home = () => {
  const [allImages, setAllImages] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const { category } = router.query;

  const getSingleImage = (category) => {
    setLoading(true);
    setAllImages([]);
    fetch(`https://res.cloudinary.com/folasewa/image/list/${category}.json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAllImages(data?.resources);
      })
      .catch((e) => {
        setLoading(false);
        return null;
      });
  };

  React.useEffect(() => {
    getSingleImage(category || getItem('category'));
  }, []);

  //

  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showThumbnailsButton: false,
    },
  };

  return (
    <div>
      <Layout withHeader title='Home' getSingleImage={getSingleImage}>
        <SRLWrapper options={options}>
          {loading && (
            <Center minH='60vh' w='100%'>
              <BeatLoader color='#A47828' />
            </Center>
          )}
          {!loading && allImages?.length === 0 && (
            <Center flexDir='column' textAlign='center' minH='60vh' w='100%'>
              <Box mx='auto' w={{ md: '400px' }} height='290px'>
                <EmptyV2 />
              </Box>
              <Text mt={6}>Something's cooking...</Text>
            </Center>
          )}

          {!loading && allImages?.length > 0 && (
            <SimpleGrid
              mt={2}
              mb={12}
              w='100%'
              columns={{ base: 2, md: 2, lg: 3 }}
              spacing={{ base: 1, md: 4 }}
            >
              {allImages?.map((image) => {
                const category = image.public_id
                  .replace('folashewa_photography/', '')
                  .split('/')[0];

                return (
                  <Box key={image.public_id} bg='primary.100' cursor='pointer'>
                    <Image
                      src={`https://res.cloudinary.com/folasewa/image/upload/${image.public_id}`}
                      h={{ base: '170px', md: '426px' }}
                      objectFit='cover'
                      w='100%'
                    />
                  </Box>
                );
              })}
            </SimpleGrid>
          )}
        </SRLWrapper>
      </Layout>
    </div>
  );
};

export default Home;
