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
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'

import { IconButton, Layout } from 'UI'
import { CarImage } from 'components'
import { fetcher } from 'lib/graphql/api'
import { GetCarDocument, useGetCarQuery } from 'lib/graphql/generated/hooks'
import {
  GetCarQuery,
  GetCarQueryVariables,
} from 'lib/graphql/generated/operations'
import { isNumeric } from 'utils/string'

type CarPageProps = {
  initialData: GetCarQuery
}

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<CarPageProps>> {
  const id = query.id
  if (!isNumeric(id)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const initialData = await fetcher<GetCarQuery, GetCarQueryVariables>(
    GetCarDocument,
    { id: Number(id) }
  )()

  if (!initialData.carById) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { initialData },
  }
}

const CarPage = ({ initialData }: CarPageProps) => {
  const router = useRouter()
  const [modalImage, setModalImage] = useState<string | null>(null)

  const { data, isLoading } = useGetCarQuery(
    { id: Number(router.query.id) },
    { initialData }
  )

  if (isLoading) return null

  return (
    <>
      <Layout>
        <Text variant="headingSmall" sx={{ textAlign: 'center' }}>
          {data?.carById?.name}
        </Text>
        <Text variant="label" sx={{ fontStyle: 'italic' }}>
          {data?.carById?.year}
        </Text>
        <Grid
          sx={{
            gridTemplateColumns: {
              base: '1fr',
              md: `repeat(${Math.min(
                2,
                data?.carById?.images.length || 0
              )},1fr)`,
              lg: `repeat(${Math.min(
                3,
                data?.carById?.images.length || 0
              )}, 1fr)`,
            },
            gridGap: '2rem',
            mt: '2rem',
          }}
        >
          {data?.carById?.images?.map((image, index) => {
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
              <Text variant="label">{data?.carById?.name}</Text>
              <ChakraIconButton
                aria-label="close"
                icon={<CloseIcon />}
                onClick={() => setModalImage(null)}
                data-testid="modal-close"
              />
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Image src={modalImage || ''} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CarPage
