import React, { useState, useEffect } from 'react';
import { chakra, Text, HStack } from '@chakra-ui/react';
import { setItem, getItem } from '../../helpers/localStorage';

const Header = ({ getSingleImage }) => {
  const categories = [
    {
      label: 'Weddings',
      value: 'weddings',
    },

    {
      label: 'Portraits',
      value: 'portraits',
    },

    {
      label: 'Editorial/Beauty',
      value: 'editorial',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ];

  const [CurrentCategory, setCurrentCategory] = useState();

  useEffect(() => {
    setCurrentCategory(getItem('category'));
  }, [setItem]);

  return (
    <chakra.header
      display='flex'
      pt={8}
      pb={{ base: 4, md: 6 }}
      w='100%'
      overflowX='auto'
      px={{ base: 4, md: 32 }}
    >
      <HStack my='auto' mx='auto' spacing={3}>
        {categories?.map((category, index) => {
          return (
            <Text
              px={4}
              fontSize={{ base: '14px', sm: '16px' }}
              textTransform='uppercase'
              py={2}
              cursor='pointer'
              _hover={{
                bg: '#F2F2F2',
                color: '#000000',
              }}
              bg={CurrentCategory === category.value && '#F2F2F2'}
              color={CurrentCategory === category.value && '#000000'}
              onClick={() => {
                setItem('category', category.value);
                setCurrentCategory(category.value);
                getSingleImage(category.value);
              }}
              fontWeight={
                CurrentCategory === category.value ? 'bold' : 'semibold'
              }
              key={index}
              transition='all .2s'
            >
              {category.label}
            </Text>
          );
        })}
      </HStack>
    </chakra.header>
  );
};

export default Header;
