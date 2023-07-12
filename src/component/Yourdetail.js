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


export default function Yourdetail() {
  return (
    <VStack w="full" h="full" p={10} spacing={10} align={"flex-start"}>
          <VStack spacing={2} align="flex-start">
            <Heading>Your Details</Heading>
            <Text>If you already have an account, click here to log in.</Text>
          </VStack>

          <SimpleGrid column={2} columnGap={3} rowGap={4}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter First Name" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Enter First Name" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea placeholder="Enter your address" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="Enter City" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>
                  Contry
                  <Select placeholder="select contry">
                    <option value="India">India</option>
                  </Select>
                </FormLabel>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <Checkbox>Shipt to the billing address.</Checkbox>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <Button width="full" size="lg">
                  Place Items
                </Button>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </VStack>
  )
}
