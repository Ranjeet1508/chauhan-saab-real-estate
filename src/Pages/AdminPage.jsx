// import React, { useState } from "react";
// import { Box, Grid, Button, Center } from "@chakra-ui/react";
// import AdminPropertyCard from "../Components/AdminPropertyCard";

// // Sample properties array for demonstration
// const initialProperties = [
//   {
//     id: 1,
//     location: "Unnao",
//     priceRange: "₹5 Lakh - ₹10 Lakh",
//     brokerContact: "+91 9876543210",
//     description:
//       "Residential plot available at an affordable price in Unnao. Contact the broker for more details.",
//   },
//   {
//     id: 2,
//     location: "Lucknow",
//     priceRange: "₹25 Lakh - ₹40 Lakh",
//     brokerContact: "+91 8765432109",
//     description: "Luxury apartment in the heart of the city with modern amenities.",
//   },
//   {
//     id: 3,
//     location: "Unnao",
//     priceRange: "₹5 Lakh - ₹10 Lakh",
//     brokerContact: "+91 9876543210",
//     description:
//       "Residential plot available at an affordable price in Unnao. Contact the broker for more details.",
//   },
//   {
//     id: 4,
//     location: "Lucknow",
//     priceRange: "₹25 Lakh - ₹40 Lakh",
//     brokerContact: "+91 8765432109",
//     description: "Luxury apartment in the heart of the city with modern amenities.",
//   },
//   // Add more properties here...
// ];

// const AdminPage = () => {
//   const [properties, setProperties] = useState(initialProperties);

//   // Function to handle editing a property
//   const handleEdit = (id) => {
//     // Here, you would typically show a modal or redirect to an edit form.
//     console.log("Edit property with ID:", id);
//     // For now, we will just log the id
//   };

//   // Function to handle deleting a property
//   const handleDelete = (id) => {
//     setProperties(properties.filter((property) => property.id !== id));
//   };

//   return (
//     <Box p={6} bg="gray.50" minH="100vh">
//       <Center mb={8}>
//         <Button colorScheme="teal" size="md">
//           Add Property
//         </Button>
//       </Center>

//       <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
//         {properties.map((property) => (
//           <AdminPropertyCard
//             key={property.id}
//             location={property.location}
//             priceRange={property.priceRange}
//             brokerContact={property.brokerContact}
//             description={property.description}
//             onEdit={() => handleEdit(property.id)} // Pass the edit handler
//             onDelete={() => handleDelete(property.id)} // Pass the delete handler
//           />
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default AdminPage;

import React, { useState } from "react";
import { Box, Grid, Button, Center } from "@chakra-ui/react";
import AdminPropertyCard from "../Components/AdminPropertyCard";
import EditProperty from "../Components/EditProperty"; // Import the EditProperty component
import { useDisclosure } from '@chakra-ui/react';

// Sample properties array for demonstration
const initialProperties = [
  {
    id: 1,
    location: "Unnao",
    priceRange: "₹5 Lakh - ₹10 Lakh",
    brokerContact: "+91 9876543210",
    description:
      "Residential plot available at an affordable price in Unnao. Contact the broker for more details.",
  },
  {
    id: 2,
    location: "Lucknow",
    priceRange: "₹25 Lakh - ₹40 Lakh",
    brokerContact: "+91 8765432109",
    description: "Luxury apartment in the heart of the city with modern amenities.",
  },
  {
    id: 3,
    location: "Unnao",
    priceRange: "₹5 Lakh - ₹10 Lakh",
    brokerContact: "+91 9876543210",
    description:
      "Residential plot available at an affordable price in Unnao. Contact the broker for more details.",
  },
  {
    id: 4,
    location: "Lucknow",
    priceRange: "₹25 Lakh - ₹40 Lakh",
    brokerContact: "+91 8765432109",
    description: "Luxury apartment in the heart of the city with modern amenities.",
  },
  // Add more properties here...
];

const AdminPage = () => {
  const [properties, setProperties] = useState(initialProperties);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingProperty, setEditingProperty] = useState(null); // State to hold the property being edited

  // Function to handle editing a property
  const handleEdit = (property) => {
    setEditingProperty(property); // Set the property to be edited
    onOpen(); // Open the modal
  };

  // Function to handle editing submission
  const handleEditSubmit = (editedProperty) => {
    setProperties(properties.map(property => 
      property.id === editedProperty.id ? editedProperty : property
    ));
    onClose(); // Close the modal after editing
  };

  // Function to handle deleting a property
  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <Box p={6} bg="gray.50" minH="100vh">
      <Center mb={8}>
        <Button colorScheme="teal" size="md">
          Add Property
        </Button>
      </Center>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {properties.map((property) => (
          <AdminPropertyCard
            key={property.id}
            property={property} // Pass the entire property object
            onEdit={() => handleEdit(property)} // Pass the edit handler
            onDelete={() => handleDelete(property.id)} // Pass the delete handler
          />
        ))}
      </Grid>

      {/* Edit Property Modal */}
      <EditProperty
        isOpen={isOpen}
        onClose={onClose}
        propertyData={editingProperty} // Pass the property data to the EditProperty component
        onEdit={handleEditSubmit} // Pass the handleEditSubmit function
      />
    </Box>
  );
};

export default AdminPage;
