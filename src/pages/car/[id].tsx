import { CloseIcon, LinkIcon, ViewIcon } from '@chakra-ui/icons'
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
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useMemo, useState } from 'react'

import { IconButton, Layout } from 'UI'
import { CarImage } from 'components'
import { useGetCarQuery } from 'lib/graphql/generated/hooks'
import { isNumeric } from 'utils/string'

const CarPage = () => {
  const router = useRouter()
  const [modalImage, setModalImage] = useState<string | null>(null)
  const carId = useMemo(() => {
    const { id } = router.query
    if (!isNumeric(id)) return null
    return Number(id)
  }, [router.query])

  const { data, isLoading } = useGetCarQuery(
    { id: carId as number },
    { enabled: typeof carId === 'number' }
  )

  useEffect(
    function handleInvalidId() {
      if (typeof carId !== 'number') {
        router.push('/')
      }
    },
    [carId, router]
  )

  if (isLoading) return null

  return (
    <>
      <Layout>
        <Text variant="headingSmall">{data?.carById?.name}</Text>
        <Text variant="label" fontStyle="italic">
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
              <CarImage image={image || undefined} key={index}>
                <IconButton
                  text="View image"
                  mr="0.5rem"
                  onClick={() => setModalImage(image)}
                >
                  <ViewIcon color="primary" />
                </IconButton>
                <IconButton text="Copy link" mr="0.5rem">
                  <LinkIcon color="primary" />
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
            <Flex justifyContent="space-between" alignItems="center">
              <Text variant="label">{data?.carById?.name}</Text>
              <ChakraIconButton
                aria-label="close"
                icon={<CloseIcon />}
                onClick={() => setModalImage(null)}
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
