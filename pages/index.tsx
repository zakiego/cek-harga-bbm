import {
  Box,
  Container,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";

import Layout from "~/components/Layout";
import { getLocationByName } from "~/utils/dictionaryLocation";

interface Props {
  provinces: string[];
}

const Index = ({ provinces }: Props) => {
  const [selectProvince, setSelectProvince] = useState<string>("");

  const filterProvince = provinces.filter((province) =>
    province.toLowerCase().includes(selectProvince.toLowerCase()),
  );

  return (
    <Layout title="Cek Harga BBM" descritpion="Harga BBM hari ini">
      <VStack pt="23px" spacing="1px">
        <Text color="gray.500" fontSize="20px">
          Provinsi
        </Text>
        <Container>
          <Input
            mt="8px"
            bg="white"
            placeholder="Pilih Provinsi"
            onChange={(e) => setSelectProvince(e.target.value)}
          />
        </Container>
        <Container>
          <SimpleGrid pt="10px" spacing="10px" w="full">
            {selectProvince &&
              filterProvince.map((province) => {
                return (
                  <GridItem key={province}>
                    <Link href={`/${getLocationByName(province)?.id}`}>
                      <Box
                        w="full"
                        _hover={{ bg: "blue.500", color: "white" }}
                        _active={{ bg: "blue.500", color: "white" }}
                        cursor="pointer"
                        bg="white"
                        px="20px"
                        rounded="8px"
                        py="7px"
                      >
                        {province.replace("JawaBarat", "Jawa Barat")}
                      </Box>
                    </Link>
                  </GridItem>
                );
              })}
          </SimpleGrid>
        </Container>
      </VStack>
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const provinces: string[] = await fetch(
    "https://raw.githubusercontent.com/zakiego/dataset-daftar-harga-bbm-pertamina/main/province.json",
  )
    .then((resp) => resp.json())
    .then((resp) => resp.provinces);

  return { props: { provinces } };
};
