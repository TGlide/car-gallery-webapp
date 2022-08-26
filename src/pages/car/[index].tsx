import { CloseIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Flex,
  Grid,
  IconButton as ChakraIconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import { useState } from 'react'

import { IconButton, Layout } from 'UI'
import { CarImage } from 'components'
import cars, { Car } from 'data/cars'

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- we check if it's a valid number later on
  const index = parseInt(query.index as any)

  if (Number.isNaN(index)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      car: cars[index],
    },
  }
}

const CarPage = ({ car }: { car: Car }) => {
  const [modalImage, setModalImage] = useState<string | null>(null)

  return (
    <>
      <Layout>
        <Text variant="headingSmall" sx={{ textAlign: 'center' }}>
          {car.name}
        </Text>
        <Text variant="label" sx={{ fontStyle: 'italic' }}>
          {car?.year}
        </Text>
        <Grid
          sx={{
            gridTemplateColumns: {
              base: '1fr',
              md: `repeat(${Math.min(2, car.images.length || 0)},1fr)`,
              lg: `repeat(${Math.min(3, car.images.length || 0)}, 1fr)`,
            },
            gridGap: '2rem',
            mt: '2rem',
          }}
        >
          {car.images?.map((image, index) => {
            return (
              <CarImage
                image={image || undefined}
                key={index}
                data-testid={`car-${index}-image`}
              >
                <IconButton
                  text="View image"
                  sx={{
                    mr: '0.5rem',
                  }}
                  onClick={() => setModalImage(image)}
                >
                  <ViewIcon color="primary" />
                </IconButton>
              </CarImage>
            )
          })}
        </Grid>
      </Layout>
      <Modal
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        isCentered
        size={'6xl'}
      >
        <ModalOverlay />
        <ModalContent pb="1rem">
          <ModalHeader>
            <Flex
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              data-testid="modal"
            >
              <Text variant="label">{car.name}</Text>
              <ChakraIconButton
                aria-label="close"
                icon={<CloseIcon />}
                onClick={() => setModalImage(null)}
                data-testid="modal-close"
              />
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Image
              src={modalImage || ''}
              sx={{
                borderRadius: 8,
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CarPage
