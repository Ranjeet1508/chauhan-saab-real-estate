import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useDisclosure,
    Alert,
    AlertIcon,
    Text,
    Link as ChakraLink
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom'

const SignupPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle the signup logic here
        onOpen(); // Show success alert on submit
    };

    return (
        <Box bg='gray.50'>
            <Box maxW="lg" mx="auto" py={8} px={4}>
                <Stack spacing={6} align="center">
                    {/* <Heading as="h1" size={useBreakpointValue({ base: 'xl', md: '2xl' })}>
          Sign Up
        </Heading> */}
                    <Box mt={10} minW={'30vw'} minH={'50vh'} p={6} borderWidth={1} borderRadius="md" boxShadow="md">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        placeholder="John Doe"
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && <Alert status="error"><AlertIcon />{errors.name.message}</Alert>}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="john.doe@example.com"
                                        {...register('email', { required: 'Email is required' })}
                                    />
                                    {errors.email && <Alert status="error"><AlertIcon />{errors.email.message}</Alert>}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Address</FormLabel>
                                    <Input
                                        placeholder="123 Main St"
                                        {...register('address', { required: 'Address is required' })}
                                    />
                                    {errors.address && <Alert status="error"><AlertIcon />{errors.address.message}</Alert>}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <Input
                                        type="tel"
                                        placeholder="123-456-7890"
                                        {...register('mobile', { required: 'Mobile number is required' })}
                                    />
                                    {errors.mobile && <Alert status="error"><AlertIcon />{errors.mobile.message}</Alert>}
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder="********"
                                        {...register('password', { required: 'Password is required' })}
                                    />
                                    {errors.password && <Alert status="error"><AlertIcon />{errors.password.message}</Alert>}
                                </FormControl>

                                <Button type="submit" colorScheme="teal">
                                    Sign Up
                                </Button>

                                <Text mt={4}>
                                    Already have an account?{' '}
                                    <ChakraLink as={RouterLink} to="/login" color="teal.500" fontWeight="bold">
                                        login here
                                    </ChakraLink>
                                </Text>
                            </Stack>
                        </form>
                    </Box>
                </Stack>

                {isOpen && (
                    <Alert status="success" mt={4}>
                        <AlertIcon />
                        Signup successful!
                    </Alert>
                )}
            </Box>
        </Box>
    );
};

export default SignupPage;
