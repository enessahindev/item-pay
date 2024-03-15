import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Center,
  Container,
  Input,
  Button,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Select,
} from "@chakra-ui/react";

const TaxCalculator = () => {
  const [items, setItems] = useState([{ name: "", price: 0 }]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [totalTax, setTotalTax] = useState(0);
  const [perPersonShare, setPerPersonShare] = useState(0);

  const handleItemNameChange = (index, value) => {
    const newItems = [...items];
    newItems[index].name = value;
    setItems(newItems);
  };

  const handleItemPriceChange = (index, value) => {
    const newItems = [...items];
    newItems[index].price = parseFloat(value);
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: "", price: 0 }]);
  };

  const handleCalculate = () => {
    const totalPrices = items.reduce((acc, item) => acc + item.price, 0);
    const tax = totalPrices * 0.02;
    const totalPriceWithTax = totalPrices - tax;
    const perPersonShare = totalPriceWithTax / numberOfPeople;

    setTotalTax(tax);
    setPerPersonShare(perPersonShare);
  };

  return (
    <Container mx={2} mt={2}>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Item payı hesaplamak artık çok kolay!</Heading>
          </Box>
        </Box>
      </Flex>
      <Box my={4} textAlign="left">
        {items.map((item, index) => (
          <div key={index}>
            <FormControl>
              <FormLabel>{`Item ${index + 1} Adı:`}</FormLabel>
              <Select
                placeholder="İtem Seçiniz.."
                value={item.name}
                onChange={(e) => handleItemNameChange(index, e.target.value)}
              >
                <option value="Hatred's Blade (+1)">Hatred's Blade (+1)</option>
                <option value="Vixen (+1)">Vixen (+1)</option>
                <option value="War Scythe (+1)">War Scythe (+1)</option>
                <option value="Golden Snake (+1)">Golden Snake (+1)</option>
                <option value="Epic Upgrade Scroll">Epic Upgrade Scroll</option>
                <option value="Warrior Radiant Helmet (+1)">
                  Warrior Radiant Helmet (+1)
                </option>
                <option value="Warrior Radiant Cuirass (+1)">
                  Warrior Radiant Cuirass (+1)
                </option>
                <option value="Warrior Radiant Tasset (+1)">
                  Warrior Radiant Tasset (+1)
                </option>
                <option value="Warrior Radiant Gauntlets (+1)">
                  Warrior Radiant Gauntlets (+1)
                </option>
                <option value="Warrior Radiant Greaves (+1)">
                  Warrior Radiant Greaves (+1)
                </option>
                <option value="Rogue Radiant Helmet (+1)">
                  Rogue Radiant Helmet (+1)
                </option>
                <option value="Rogue Radiant Cuirass (+1)">
                  Rogue Radiant Cuirass (+1)
                </option>
                <option value="Rogue Radiant Tasset (+1)">
                  Rogue Radiant Tasset (+1)
                </option>
                <option value="Rogue Radiant Gauntlets (+1)">
                  Rogue Radiant Gauntlets (+1)
                </option>
                <option value="Rogue Radiant Greaves (+1)">
                  Rogue Radiant Greaves (+1)
                </option>
                <option value="Priest Radiant Helmet (+1)">
                  Priest Radiant Helmet (+1)
                </option>
                <option value="Priest Radiant Cuirass (+1)">
                  Priest Radiant Cuirass (+1)
                </option>
                <option value="Priest Radiant Tasset (+1)">
                  Priest Radiant Tasset (+1)
                </option>
                <option value="Priest Radiant Gauntlets (+1)">
                  Priest Radiant Gauntlets (+1)
                </option>
                <option value="Priest Radiant Greaves (+1)">
                  Priest Radiant Greaves (+1)
                </option>
                <option value="Mage Radiant Helmet (+1)">
                  Mage Radiant Helmet (+1)
                </option>
                <option value="Mage Radiant Cuirass (+1)">
                  Mage Radiant Cuirass (+1)
                </option>
                <option value="Mage Radiant Tasset (+1)">
                  Mage Radiant Tasset (+1)
                </option>
                <option value="Mage Radiant Gauntlets (+1)">
                  Mage Radiant Gauntlets (+1)
                </option>
                <option value="Mage Radiant Greaves (+1)">
                  Mage Radiant Greaves (+1)
                </option>
              </Select>
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>{`Item ${index + 1} Fiyatı:`}</FormLabel>
              <Input
                type="number"
                placeholder="e.g. 16,100 or 20,400"
                value={item.price}
                onChange={(e) => handleItemPriceChange(index, e.target.value)}
              />
            </FormControl>
          </div>
        ))}
        <Button colorScheme="whatsapp" mt={2} onClick={handleAddItem}>
          <Text>Item Ekle</Text>
        </Button>
        <FormControl mt={2}>
          <FormLabel>Kişi Sayısı:</FormLabel>
          <Input
            type="number"
            min={1}
            placeholder="Kişi sayısını girin"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          mx={2}
          mt={12}
          width="full"
          onClick={handleCalculate}
        >
          Hesapla
        </Button>
        <Center>
          <Table variant="striped" colorScheme="messenger" mt={6}>
            <Thead>
              <Tr>
                <Th>İtem Adı</Th>
                <Th>Fiyatı</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.price}</Td>
                </Tr>
              ))}
              <Tr>
                <Td>Toplam Vergi (%2)</Td>
                <Td>{totalTax.toFixed(2)}</Td>
              </Tr>
              <Tr>
                <Td>Kişi başı düşen pay</Td>
                <Td>{perPersonShare.toFixed(2)} m</Td>
              </Tr>
            </Tbody>
          </Table>
        </Center>
      </Box>
      <footer className="flex bg-white border-t fixed w-full justify-center items-center bottom-0">
        Copyright &copy; <a href="https://enessahin.dev">Enes Şahin</a>
      </footer>
    </Container>
  );
};

export default TaxCalculator;
