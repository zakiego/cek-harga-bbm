import { Heading, Highlight, HStack, Icon, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";

const Navbar = () => {
  return (
    <HStack
      py={{ base: "8px", md: "14px" }}
      borderBottom="2px"
      borderBottomColor="gray.300"
    >
      <Link href="/">
        <Heading
          fontSize={{ base: "18px", md: "24px" }}
          color="gray.700"
          cursor="pointer"
        >
          <Highlight
            query="BBM"
            styles={{
              color: "blue.500",
            }}
          >
            Cek Harga BBM
          </Highlight>
        </Heading>
      </Link>
      <Spacer />
      <a href="http://github.com/zakiego" target="_blank" rel="noreferrer">
        <Icon as={GoMarkGithub} w={6} h={6} color="gray.600" />
      </a>
    </HStack>
  );
};

export default Navbar;
