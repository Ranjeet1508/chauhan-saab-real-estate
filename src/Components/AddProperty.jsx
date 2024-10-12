import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const AddProperty = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data); // Handle the form submission logic here
    setSuccessMessage('Property added successfully!');
    onClose(); // Close the modal after submission
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Property</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {successMessage && (
              <Alert status="success" mb={4}>
                <AlertIcon />
                <AlertTitle mr={2}>Success!</AlertTitle>
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                {/* Location Input */}
                <FormControl isRequired>
                  <FormLabel>Location</FormLabel>
                  <Input
                    placeholder="e.g., 1234 Main St"
                    {...register('location', { required: 'Location is required' })}
                  />
                  {errors.location && (
                    <Text color="red.500" fontSize="sm">
                      {errors.location.message}
                    </Text>
                  )}
                </FormControl>

                {/* Description Input */}
                <FormControl isRequired>
                  <FormLabel>Description</FormLabel>
                  <Input
                    placeholder="Property description"
                    {...register('description', { required: 'Description is required' })}
                  />
                  {errors.description && (
                    <Text color="red.500" fontSize="sm">
                      {errors.description.message}
                    </Text>
                  )}
                </FormControl>

                {/* Price Range Input */}
                <FormControl isRequired>
                  <FormLabel>Price Range</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter price range"
                    {...register('priceRange', { required: 'Price range is required' })}
                  />
                  {errors.priceRange && (
                    <Text color="red.500" fontSize="sm">
                      {errors.priceRange.message}
                    </Text>
                  )}
                </FormControl>

                {/* Broker Contact Input */}
                <FormControl isRequired>
                  <FormLabel>Broker Contact</FormLabel>
                  <Input
                    type="tel"
                    placeholder="Broker's contact number"
                    {...register('brokerContact', { 
                      required: 'Broker contact is required',
                      pattern: {
                        value: /^[0-9]{10}$/, // Ensure 10 digits for the contact number
                        message: 'Contact number must be 10 digits',
                      },
                    })}
                  />
                  {errors.brokerContact && (
                    <Text color="red.500" fontSize="sm">
                      {errors.brokerContact.message}
                    </Text>
                  )}
                </FormControl>

                <Button type="submit" colorScheme="teal">
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddProperty;
