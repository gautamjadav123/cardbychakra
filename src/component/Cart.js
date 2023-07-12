import React from 'react'
import {
  AspectRatio,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";


export default function Cart() {
  return (
    <VStack
      bg={"gray.50"}
      w="full"
      h="full"
      p={10}
      spacing={10}
      align={"flex-start"}
    >
      <VStack align="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button variant="outline" colorScheme="black">
            Try changing the theme.
          </Button>
        </Text>
      </VStack>

      <HStack spacing={6} align="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/cart_empty.png" alt="Skateboard" />
        </AspectRatio>

        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="MD">Pency board</Heading>
            <Text color="gray.600">PNTCCMP27541</Text>
          </VStack>

          <Heading size="sm">$119.00</Heading>
        </Stack>
      </HStack>

      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color="gray.600">Subtotal</Text>

          <Heading size="sm">$119.00</Heading>
        </HStack>

        <HStack justifyContent="space-between">
          <Text color="gray.600">Shipping</Text>

          <Heading size="sm">$19.99n</Heading>
        </HStack>

        <HStack justifyContent="space-between">
          <Text color="gray.600">Texes (estimated)</Text>

          <Heading size="sm">$23.00</Heading>
        </HStack>
      </VStack>

      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color="gray.600">Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
}
