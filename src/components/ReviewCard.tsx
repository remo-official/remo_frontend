import {
  IconCheckmarkBadgeFill,
  IconDot3HorizontalChatbubbleLeftFill,
  IconHeartLine,
  IconStarLine,
} from '@karrotmarket/react-monochrome-icon';
import {
  Box,
  HStack,
  Icon,
  PrefixIcon,
  Text,
  VStack,
} from '@seed-design/react';
import { ActionButton } from 'seed-design/ui/action-button';
import { Avatar } from 'seed-design/ui/avatar';
import { IdentityPlaceholder } from 'seed-design/ui/identity-placeholder';

export interface ReviewCardProps {
  reviewer: {
    name: string;
    avatar: string;
    height: number;
    weight: number;
    purchaseSize: string;
    isVerified: boolean;
  };
  images: string[];
  content: string;
  product: {
    name: string;
    price: number;
    image: string;
  };
}

export function ReviewCard({
  reviewer,
  images,
  content,
  product,
}: ReviewCardProps) {
  return (
    <VStack
      width="full"
      gap="x4"
      paddingX="x4"
      paddingY="x5"
      bg="bg.layer"
      borderRadius="x4"
    >
      {/* Header: Avatar + Reviewer Name + Verified Badge */}
      <HStack align="center" gap="x3">
        <Avatar
          size="42"
          src={reviewer.avatar}
          fallback={<IdentityPlaceholder />}
        />
        <VStack gap="x1">
          <HStack align="center" gap="x1">
            <Text fontWeight="bold" fontSize="t5">
              {reviewer.name}
            </Text>
            {reviewer.isVerified && (
              <Icon
                svg={<IconCheckmarkBadgeFill />}
                color="palette.blue600"
                size="x4"
              />
            )}
          </HStack>
          {/* 체형 정보: 키·몸무게·구매 사이즈 (원칙 3 준수) */}
          <Text fontSize="t3" color="fg.neutralSubtle">
            {reviewer.height}cm · {reviewer.weight}kg · {reviewer.purchaseSize}{' '}
            구매
          </Text>
        </VStack>
      </HStack>

      {/* Review Images: 착용 이미지 3장 (원칙 준수) */}
      <HStack gap="x2" width="full" overflowX="auto">
        {images.slice(0, 3).map((img, i) => (
          <Box
            key={i}
            flexShrink={0}
            width="x32"
            height="x40"
            borderRadius="x3"
            bg="bg.neutralSubtle"
            style={{ overflow: 'hidden' }}
          >
            <img
              src={img}
              alt={`Review ${i}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </HStack>

      {/* Review Text */}
      <Text fontSize="t4" color="fg.neutral" maxLines={3}>
        {content}
      </Text>

      {/* Product Mini Card (보조 정보) */}
      <HStack
        gap="x3"
        padding="x3"
        borderWidth={1}
        borderColor="stroke.neutralSubtle"
        borderRadius="x3"
        align="center"
      >
        <Box
          width="x12"
          height="x12"
          borderRadius="x2"
          bg="bg.neutralSubtle"
          style={{ overflow: 'hidden' }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <VStack gap="x0">
          <Text fontSize="t3" fontWeight="bold">
            {product.name}
          </Text>
          <Text fontSize="t2" color="fg.neutralSubtle">
            {product.price.toLocaleString()}원
          </Text>
        </VStack>
      </HStack>

      {/* Footer Actions: 채팅 문의(Primary), 좋아요, 저장 */}
      <HStack gap="x2" width="full">
        <ActionButton variant="brandSolid" flexGrow={1}>
          <PrefixIcon svg={<IconDot3HorizontalChatbubbleLeftFill />} />
          채팅 문의
        </ActionButton>
        <ActionButton variant="neutralWeak" layout="iconOnly">
          <Icon svg={<IconHeartLine />} />
        </ActionButton>
        <ActionButton variant="neutralWeak" layout="iconOnly">
          <Icon svg={<IconStarLine />} />
        </ActionButton>
      </HStack>
    </VStack>
  );
}
