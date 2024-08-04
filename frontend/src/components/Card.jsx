import React from 'react';
import { Box, Heading, Text, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaGamepad, FaDumbbell, FaChartLine, FaRobot } from 'react-icons/fa';

const icons = {
  Games: FaGamepad,
  "Virtual Gym": FaDumbbell,
  "Fitness Tracker": FaChartLine,
  "AI Bot": FaRobot,
};

const Card = ({ title, text }) => {
  const IconComponent = icons[title] || FaGamepad;

  return (
    <Box
      bgGradient='linear(to-r, gray.800, gray.900)'
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="lg"
      p={6}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      transition="transform 0.3s, box-shadow 0.3s"
      minHeight={'245px'}
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: 'lg',
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="blue.500"
        color="white"
        borderRadius="full"
        h="16"
        w="16"
        mb={4}
      >
        <Icon as={IconComponent} boxSize={8} />
      </Flex>
      <Heading as="h3" size="lg" mb={2} color="blue.300">
        {title}
      </Heading>
      <Text color="gray.400" fontSize="md">
        {text}
      </Text>
    </Box>
  );
};

export default Card;
