import { Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import FuelCard from "~/components/FuelCard";
import Layout from "~/components/Layout";
import { getFuelImage } from "~/utils/dictImage";
import { dictionaryLocations } from "~/utils/dictionaryLocation";
import { getURL } from "~/utils/getUrl";

interface Props {
  resp: Resp;
}

const Index = ({ resp }: Props) => {
  return (
    <Layout
      title={`Cek Harga BBM di ${resp.location}`}
      descritpion={`Harga BBM di ${resp.location}`}
    >
      <VStack pt="23px" spacing="1px">
        <Text color="gray.500" fontSize="20px">
          Provinsi
        </Text>
        <Heading fontSize="24px" fontWeight="semibold" color="gray.600">
          {resp.location}
        </Heading>
      </VStack>

      <SimpleGrid pt="40px" columns={{ base: 1, md: 2, lg: 3 }} spacing="40px">
        {resp.data.map((item, id) => {
          return (
            <FuelCard
              key={id}
              image={getFuelImage(item.fuelType) as string}
              data={item}
            />
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default Index;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dictionaryLocations.map((loc) => {
    return { params: { location: loc.id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { location } = context.params as { location: string };

  const resp: Resp = await fetch(`${getURL}/api/update/${location}`).then(
    (resp) => resp.json(),
  );

  return { props: { resp } };
};

export interface Resp {
  location: string;
  data: Data[];
}

export interface Data {
  fuelType: string;
  history: History[];
}

export interface History {
  date: string;
  price: string;
}
