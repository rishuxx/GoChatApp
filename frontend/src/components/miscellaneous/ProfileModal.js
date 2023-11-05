import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          colorScheme=""
          d={{ base: "flex" }}
          icon={<ViewIcon color={"white"} />}
          onClick={onOpen}
        />
      )}
      <Modal size="xl" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent
          h="400px"
          w={{ base: "", md: "" }}
          position="relative"
          left={{ base: "", md: "250px" }}
          className="mbox"
          borderRadius={"20px"}
          borderWidth={"1px"}
          bg={""}
          color="white"
          backdropFilter="blur(20px)"
        >
          <ModalHeader
            fontSize="30px"
            fontFamily="Poppins"
            d="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              position={"relative"}
              top={"30px"}
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text fontSize={{ base: "15px", md: "30px" }} fontFamily="Poppins">
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
