// import React, { useState } from 'react';
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Stack,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
//   Box
// } from '@chakra-ui/react';
// import { useForm } from 'react-hook-form';

// const AddProperty = ({isOpen, onClose}) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm();
//   const [file, setFile] = useState(null);

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle the form submission logic here
//     onClose(); // Close the modal after submission
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <Box>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Add Property</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <Stack spacing={4}>
//                 <FormControl isRequired>
//                   <FormLabel>Image1</FormLabel>
//                   <Input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                   />
//                 </FormControl>

//                 <FormControl isRequired>
//                   <FormLabel>Image2</FormLabel>
//                   <Input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                   />
//                 </FormControl>

//                 <FormControl isRequired>
//                   <FormLabel>Address</FormLabel>
//                   <Input
//                     placeholder="1234 Main St"
//                     {...register('address', { required: 'Address is required' })}
//                   />
//                 </FormControl>

//                 <FormControl isRequired>
//                   <FormLabel>Mobile Number</FormLabel>
//                   <Input
//                     type="tel"
//                     placeholder="123-456-7890"
//                     {...register('mobile', { required: 'Mobile number is required' })}
//                   />
//                 </FormControl>

//                 <FormControl isRequired>
//                   <FormLabel>For Sale or Rent</FormLabel>
//                   <Select
//                     placeholder="Select option"
//                     {...register('listingType', { required: 'Please select an option' })}
//                   >
//                     <option value="sale">Sale</option>
//                     <option value="rent">Rent</option>
//                   </Select>
//                 </FormControl>

//                 <FormControl isRequired>
//                   <FormLabel>Price</FormLabel>
//                   <Input
//                     type="number"
//                     placeholder="Enter price"
//                     {...register('price', { required: 'Price is required' })}
//                   />
//                 </FormControl>

//                 <Button type="submit" colorScheme="teal">
//                   Submit
//                 </Button>
//               </Stack>
//             </form>
//           </ModalBody>
//           <ModalFooter>
//             <Button variant="ghost" onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default AddProperty;




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
  Text
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const AddProperty = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const onSubmit = (data) => {
    console.log({ ...data, file1, file2 });
    // Handle the form submission logic here
    onClose(); // Close the modal after submission
  };

  const handleFileChange1 = (e) => {
    setFile1(e.target.files[0]);
  };

  const handleFileChange2 = (e) => {
    setFile2(e.target.files[0]);
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Property</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                {/* Image 1 File Input */}
                <FormControl isRequired>
                  <FormLabel>Image 1</FormLabel>
                  <Box display="flex" alignItems="center">
                    <Button
                      as="label"
                      htmlFor="image1-upload"
                      cursor="pointer"
                      colorScheme='teal'
                      // color="white"
                      mr={4}
                    >
                      {file1 ? "Change File" : "Choose File"}
                    </Button>
                    <Input
                      id="image1-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange1}
                      style={{ display: "none" }}
                    />
                    {file1 && (
                      <Text fontSize="sm" color="gray.500">
                        {file1.name}
                      </Text>
                    )}
                  </Box>
                </FormControl>

                {/* Image 2 File Input */}
                <FormControl isRequired>
                  <FormLabel>Image 2</FormLabel>
                  <Box display="flex" alignItems="center">
                    <Button
                      as="label"
                      htmlFor="image2-upload"
                      cursor="pointer"
                      colorScheme='teal'
                      // color="white"
                      mr={4}
                    >
                      {file2 ? "Change File" : "Choose File"}
                    </Button>
                    <Input
                      id="image2-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange2}
                      style={{ display: "none" }}
                    />
                    {file2 && (
                      <Text fontSize="sm" color="gray.500">
                        {file2.name}
                      </Text>
                    )}
                  </Box>
                </FormControl>

                {/* Address Input */}
                <FormControl isRequired>
                  <FormLabel>Address</FormLabel>
                  <Input
                    placeholder="1234 Main St"
                    {...register('address', { required: 'Address is required' })}
                  />
                  {errors.address && (
                    <Text color="red.500" fontSize="sm">
                      {errors.address.message}
                    </Text>
                  )}
                </FormControl>

                {/* Mobile Number Input */}
                <FormControl isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="tel"
                    placeholder="123-456-7890"
                    {...register('mobile', { required: 'Mobile number is required' })}
                  />
                  {errors.mobile && (
                    <Text color="red.500" fontSize="sm">
                      {errors.mobile.message}
                    </Text>
                  )}
                </FormControl>

                {/* Sale or Rent Selection */}
                <FormControl isRequired>
                  <FormLabel>For Sale or Rent</FormLabel>
                  <Select
                    placeholder="Select option"
                    {...register('listingType', { required: 'Please select an option' })}
                  >
                    <option value="sale">Sale</option>
                    <option value="rent">Rent</option>
                  </Select>
                  {errors.listingType && (
                    <Text color="red.500" fontSize="sm">
                      {errors.listingType.message}
                    </Text>
                  )}
                </FormControl>

                {/* Price Input */}
                <FormControl isRequired>
                  <FormLabel>Price</FormLabel>
                  <Input
                    type="number"
                    placeholder="Enter price"
                    {...register('price', { required: 'Price is required' })}
                  />
                  {errors.price && (
                    <Text color="red.500" fontSize="sm">
                      {errors.price.message}
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
