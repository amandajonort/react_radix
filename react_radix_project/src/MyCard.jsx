import React from 'react';
import { Card, Flex, Avatar, Text } from '@radix-ui/react-card';

const MyCard = ({ title, amount, name, email }) => (
  <Card style={{ width: 240, padding: 16 }}>
    <Text as="div" size="2" weight="bold" style={{ marginBottom: 8 }}>
      {title}
    </Text>
    <Flex gap="3" align="center" style={{ marginBottom: 8 }}>
      <Avatar
        size="3"
        src={`https://source.unsplash.com/64x64/?${name}`}
        radius="full"
        fallback={name[0]}
      />
      <div>
        <Text as="div" size="2" weight="bold">
          {name}
        </Text>
        <Text as="div" size="2" color="gray">
          {email}
        </Text>
      </div>
    </Flex>
    <Text as="div" size="2" weight="bold" style={{ marginBottom: 8 }}>
      +${amount}
    </Text>
  </Card>
);

export default MyCard;
