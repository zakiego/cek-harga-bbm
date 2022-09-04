import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";

import { Data, History } from "~/pages/[location]";
import { dateToIndonesiaLocalString } from "~/utils/formatDate";

interface Props {
  image: string;
  data: Data;
}

const FuelCard = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box shadow="0px 16px 40px rgba(112, 144, 176, 0.2)" h="min-content">
      <Stack spacing="12px">
        <Box px="40px" pt="35px" roundedTop="8px">
          <Flex minH="79px" justifyContent="start" alignItems="flex-end">
            <Image src={props.image} alt={`${props.data.fuelType} Image`} />
          </Flex>
          <Text
            pt="28px"
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight="semibold"
            color="gray.600"
          >
            {props.data.history[0].price}
          </Text>
          <Text pt="12px" color="gray.400" fontSize="14px">
            *Terakhir diperbarui{" "}
            {dateToIndonesiaLocalString(props.data.history[0].date)}
          </Text>
        </Box>

        {isOpen && (
          <>
            <Divider orientation="horizontal" bg="gray.200" h="2px" />
            <TableFuelCard history={props.data.history} />
          </>
        )}
        <Spacer />
        <Box
          roundedBottom="8px"
          px="40px"
          py="10px"
          color="whiteAlpha.900"
          cursor="pointer"
          bg={isOpen ? "gray.500" : "blue.500"}
          _hover={{ bg: isOpen ? "gray.600" : "blue.600" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <HStack>
            <Text>{isOpen ? "Tutup" : "Lihat Riwayat"}</Text>
            <Spacer />
            <Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} h="7" w="7" />
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
};

export default FuelCard;

const TableFuelCard = ({ history }: { history: History[] }) => {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Tanggal</Th>
              <Th>Harga</Th>
            </Tr>
          </Thead>
          <Tbody>
            {history.map((item, id) => {
              return (
                <Tr key={id}>
                  <Td color="blackAlpha.700" fontWeight="normal">
                    {dateToIndonesiaLocalString(item.date)}
                  </Td>
                  <Td color="blackAlpha.700" fontWeight="normal">
                    {item.price}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
