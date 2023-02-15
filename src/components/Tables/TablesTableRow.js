import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { EditIcon } from "@chakra-ui/icons";
import { ItemContent } from "components/Menu/ItemContent";
import burger from "assets/img/food/burger.png";
import chicken from "assets/img/food/chicken.png";
import chilli from "assets/img/food/chilli.png";
import potato from "assets/img/food/potato.png";
import salmon from "assets/img/food/salmon.png";

function TablesTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date, day, cost } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
        <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {day}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {date}
          </Text>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>
      {/* <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>
      </Td> */}
            <Td>
            <Menu>
        <MenuButton>
          <EditIcon color='black' w="18px" h="18px" />
        </MenuButton>
        <MenuList p="16px 8px">
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="80 minutes"
                info=""
                boldInfo="Turkey Chilli"
                aName="Alicia"
                aSrc={chilli}
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="30 minutes"
                info=""
                boldInfo="Maple Salmon"
                aName="Josh Henry"
                aSrc={salmon}
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="50 minutes"
                info=""
                boldInfo="Black Bean Veggie Burger"
                aName="Kara"
                aSrc={burger}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
        </Td>
    
      <Td>
        
      
      <Input variant='flushed' placeholder='1' width='20px'/>
      </Td>
      <Td>
        <Text fontSize="md" color='green.400' fontWeight="bold" pb=".5rem">
          {cost}
        </Text>
      </Td>
      <Td>
        <Badge
          bg={status === "Online" ? "green.400" : bgStatus}
          color={status === "Online" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          Regenerate
        </Badge>
      </Td>



    </Tr>
  );
}

export default TablesTableRow;
