import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, FormErrorMessage, Heading, Text } from '@chakra-ui/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xrbzzdzn");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (state.succeeded) {
    return (
      <Box textAlign="center" mt="5rem">
        <Text color="green.500" fontWeight="semibold">Thanks for reaching out! We will get back to you soon.</Text>
      </Box>
    );
  }

  return (
    <Box maxW="lg" mx="auto" p={6} bg="white" borderRadius="lg" shadow="md" mt="10">
      <Heading as="h1" size="xl" textAlign="center" mb="6" color="red.800">CONTACT US!</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="4">
          <FormLabel htmlFor="name" color="gray.700">Name:</FormLabel>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            bg="gray.100"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </FormControl>

        <FormControl isRequired mb="4">
          <FormLabel htmlFor="email" color="gray.700">Email:</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            bg="gray.100"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </FormControl>

        <FormControl isRequired mb="4">
          <FormLabel htmlFor="phone" color="gray.700">Phone Number:</FormLabel>
          <Box display="flex" alignItems="center">
            <Box as="span" px={3} py={2} border="1px" borderColor="gray.300" borderRadius="md" bg="gray.100" color="gray.600" fontSize="sm">
              +91
            </Box>
            <Input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              bg="gray.100"
              ml={-1}
              borderLeftRadius={0}
              borderRightRadius="md"
            />
          </Box>
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </FormControl>

        <FormControl isRequired mb="4">
          <FormLabel htmlFor="message" color="gray.700">Message:</FormLabel>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            bg="gray.100"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </FormControl>

        <Button 
          type="submit" 
          isDisabled={state.submitting} 
          colorScheme="blue" 
          width="full" 
          mt="4"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
