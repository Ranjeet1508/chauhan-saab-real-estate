import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  Center
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const EditProperty = ({ isOpen, onClose, propertyData, refresh }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset form with current property data when modal opens
    if (isOpen) {
      reset(propertyData);
    }
  }, [isOpen, propertyData, reset]);

  console.log(propertyData._id);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      let token = localStorage.getItem('real-estate-token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.patch(`${API_BASE_URL}/property/${propertyData._id}`, data, config);
      console.log(response.data);
      setSuccessMessage('Property updated successfully!');
      setTimeout(() => {
        setLoading(false);
        refresh();
        onClose();
      }, 1500)
      onClose(); // Close the modal after submission
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Property</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {successMessage && (
              <Alert status="success" mb={4}>
                <AlertIcon />
                <AlertTitle mr={2}>Success!</AlertTitle>
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            {/* Spinner displayed when loading is true */}
            {loading && (
              <Center>
                <Spinner size="xl" color="teal.500" />
              </Center>
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
                    type="string"
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

export default EditProperty;
