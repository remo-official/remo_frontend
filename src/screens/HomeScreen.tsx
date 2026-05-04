import {
  IconDot3HorizontalChatbubbleLeftLine,
  IconHouseFill,
  IconMagnifyingglassLine,
  IconPersonLine,
  IconPlusLine,
} from '@karrotmarket/react-monochrome-icon';
import { Box, HStack, Icon, Text, VStack } from '@seed-design/react';
import { useState } from 'react';
import { Chip } from 'seed-design/ui/chip';
import type { ReviewCardProps } from '../components/ReviewCard';
import { ReviewCard } from '../components/ReviewCard';

const MOCK_REVIEWS: ReviewCardProps[] = [
  {
    reviewer: {
      name: '패션피플123',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      height: 175,
      weight: 70,
      purchaseSize: 'L',
      isVerified: true,
    },
    images: [
      'https://picsum.photos/seed/1/300/400',
      'https://picsum.photos/seed/2/300/400',
      'https://picsum.photos/seed/3/300/400',
    ],
    content:
      '원단이 정말 탄탄하고 핏이 예뻐요. 특히 어깨 라인이 잘 잡혀있어서 체형 보완이 잘 됩니다. 평소에 L 사이즈 입는데 딱 정사이즈네요!',
    product: {
      name: '헤비 웨이트 오버핏 티셔츠',
      price: 39000,
      image: 'https://picsum.photos/seed/p1/100/100',
    },
  },
  {
    reviewer: {
      name: '미니멀리스트',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
      height: 162,
      weight: 52,
      purchaseSize: 'S',
      isVerified: true,
    },
    images: [
      'https://picsum.photos/seed/4/300/400',
      'https://picsum.photos/seed/5/300/400',
      'https://picsum.photos/seed/6/300/400',
    ],
    content:
      '색감이 사진보다 더 예뻐요! 은은한 크림색이라 어디든 잘 어울립니다. 기장감도 적당해서 넣입하기 좋네요.',
    product: {
      name: '코튼 린넨 셔츠',
      price: 45000,
      image: 'https://picsum.photos/seed/p2/100/100',
    },
  },
];

export function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState('my-body');

  return (
    <Box bg="bg.neutralSubtle" minHeight="100vh">
      {/* Top Header */}
      <Box
        position="sticky"
        top={0}
        zIndex={10}
        bg="bg.layer"
        borderBottomWidth={1}
        borderColor="stroke.neutralSubtle"
      >
        <VStack gap="x0">
          <HStack
            paddingX="x4"
            paddingY="x3"
            justify="space-between"
            align="center"
          >
            <Text fontSize="t6" fontWeight="bold" color="fg.brand">
              Rimo
            </Text>
          </HStack>

          {/* 체형 필터 Chip Row (원칙 준수) */}
          <Box overflowX="auto" paddingX="x4" paddingBottom="x3">
            <Chip.RadioRoot
              value={selectedFilter}
              onValueChange={setSelectedFilter}
            >
              <HStack gap="x2">
                <Chip.RadioItem value="my-body">
                  <Chip.Label>내 체형 피드</Chip.Label>
                </Chip.RadioItem>
                <Chip.RadioItem value="160-165">
                  <Chip.Label>160-165cm</Chip.Label>
                </Chip.RadioItem>
                <Chip.RadioItem value="170-175">
                  <Chip.Label>170-175cm</Chip.Label>
                </Chip.RadioItem>
                <Chip.RadioItem value="all">
                  <Chip.Label>전체</Chip.Label>
                </Chip.RadioItem>
              </HStack>
            </Chip.RadioRoot>
          </Box>
        </VStack>
      </Box>

      {/* Review Feed */}
      <VStack gap="x2" paddingBottom="x20">
        {MOCK_REVIEWS.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </VStack>

      {/* Bottom Navigation (커스텀 구현) */}
      <Box
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg="bg.layer"
        borderTopWidth={1}
        borderColor="stroke.neutralSubtle"
        paddingBottom="spacingY.screenBottom"
        paddingTop="x3"
        zIndex={20}
      >
        <HStack justify="space-around" align="center">
          <VStack gap="x1" align="center">
            <Icon svg={<IconHouseFill />} color="fg.brand" size="x6" />
            <Text fontSize="t1" fontWeight="bold" color="fg.brand">
              홈
            </Text>
          </VStack>
          <VStack gap="x1" align="center">
            <Icon
              svg={<IconMagnifyingglassLine />}
              color="fg.neutralSubtle"
              size="x6"
            />
            <Text fontSize="t1" color="fg.neutralSubtle">
              탐색
            </Text>
          </VStack>
          <Box
            width="x12"
            height="x12"
            bg="fg.brand"
            borderRadius="full"
            style={{ marginTop: '-24px' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon svg={<IconPlusLine />} color="white" size="x6" />
          </Box>
          <VStack gap="x1" align="center">
            <Icon
              svg={<IconDot3HorizontalChatbubbleLeftLine />}
              color="fg.neutralSubtle"
              size="x6"
            />
            <Text fontSize="t1" color="fg.neutralSubtle">
              채팅
            </Text>
          </VStack>
          <VStack gap="x1" align="center">
            <Icon svg={<IconPersonLine />} color="fg.neutralSubtle" size="x6" />
            <Text fontSize="t1" color="fg.neutralSubtle">
              마이
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
