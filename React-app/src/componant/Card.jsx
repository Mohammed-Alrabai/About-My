import {
  chakra,
  Box,
  Stack,
  Text,
  Image,
  Container,
  Button,
  useColorModeValue,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import ReactImg from "../assets/img/ReactImg.jpg";
import NativeImg from "../assets/img/Reactnative.png";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Index = () => {
  return (
    <Container p={{ base: 5, md: 10 }} w="100%" maxW="6xl">
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign={"center"}
        pb={10}
        color={"#3182ce"}>
        مدوناتي
      </Text>
      <SimpleGrid spacing={10} columns={{ base: 1, md: 2 }}>
        <Box
          borderWidth="1px"
          _hover={{ shadow: "lg" }}
          rounded="md"
          textAlign={"right"}
          overflow="hidden"
          bg={useColorModeValue("white", "gray.800")}>
          <Image src={ReactImg} objectFit="cover" w="100%" />
          <Box p={{ base: 3, sm: 5 }}>
            <Box mb={6}>
              <chakra.h3
                fontSize={{ base: "lg", sm: "2xl" }}
                fontWeight="bold"
                textAlign={"right"}
                lineHeight="1.2"
                mb={2}>
                ما هي الرياكت React js
              </chakra.h3>
              <Text fontSize={{ base: "md", sm: "lg" }} noOfLines={2}>
                يبدو من اسمها أنها مكتبة مبنية للبرمجة بلغة JavaScript تم بناؤها
                من قبل شركة فيسبوك، وهي مكتبة متخصصة بواجهات ...
              </Text>
            </Box>
            <Stack
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 2, sm: 1 }}>
              <CustomAccordion></CustomAccordion>
            </Stack>
          </Box>
        </Box>
        {/* Box-2 */}
        <Box
          borderWidth="1px"
          _hover={{ shadow: "lg" }}
          rounded="md"
          overflow="hidden"
          bg={useColorModeValue("white", "gray.800")}>
          <Image
            src={NativeImg}
            objectFit="fill"
            w={"100%"}
            maxH={"67%"}
            />
          <Box p={{ base: 3, sm: 5 }}>
            <Box mb={6}>
              <chakra.h3
                fontSize={{ base: "lg", sm: "2xl" }}
                fontWeight="bold"
                lineHeight="1.2"
                mb={2}>
                ما هو React Native ؟{" "}
              </chakra.h3>
              <Text fontSize={{ base: "md", sm: "lg" }} noOfLines={2}>
                يُعد React Native (المعروف أيضاً باسم RN) إطاراً شائعاً لتطبيقات
                الأجهزة المحمولة يعتمد على JavaScript والذي يسمح لك بإنشاء
                تطبيقات محمولة يتم عرضها محلياً لنظامي التشغيل iOS و Android .
                كذلك يتيح لك إطار العمل إنشاء تطبيق للعديد من الأنظمة الأساسية
                باستخدام نفس التعليمات البرمجية . تم إطلاق React Native لأول مرة
                بواسطة فيس بوك كمشروع مفتوح المصدر في عام 2015. وفي غضون عامين
                فقط ، أصبح أحد أفضل الحلول المستخدمة لتطوير الأجهزة المحمولة.
              </Text>
            </Box>
            <Stack
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 2, sm: 0 }}>
              <CustomAccordion></CustomAccordion>
            </Stack>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      textTransform="uppercase"
      lineHeight="inherit"
      rounded="md"
      {...props}>
      {children}
    </Button>
  );
};
const CustomAccordion = ({ children, ...props }) => {
  return (
    <Accordion defaultIndex={[]} allowMultiple w={"100%"}>
      <AccordionItem>
        <h2>
          <AccordionButton bg={"blue.500"} _hover={{ bg: "blue.600" }}>
            <Box as="span" flex="1" textAlign="left">
              اقراء المزيد
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          المستخدم، حيث تقدم طريقة سهلة وسلسلة وقوية في الوقت ذاته لبناء
          الواجهات وتخفف العبء عن المبرمجين أثناء بناء أي واجهة، وهي مبنية على
          أساس مفهوم الـ Component والذي يمكن إعادة استخدامه بسهولة فائقة دون
          الحاجة لبنائه مرة أخرى في كل مرة، ويشير الموقع الرسمي للمكتبة إلى
          قابلية استخدام المعلومات التي يتعلمها المبرمج عند تعلمه التعامل مع
          مكتبة React في كتابة كودات مختصة بالسيرفر عن طريق Node وبناء تطبيقات
          قوية للموبايل عن طريق React Native....
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Index;
