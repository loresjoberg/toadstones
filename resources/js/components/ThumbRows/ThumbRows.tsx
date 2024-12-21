import { ThumbStack } from '@/components/ThumbStack/ThumbStack';
import { Feature } from '@/types/toadstones';
import { Flex } from '@mantine/core';

interface ThumbRowsProps {
    features: Feature[];
}

export function ThumbRows({ features }: ThumbRowsProps) {
    return (
        <Flex direction="row" justify="space-between" wrap="wrap">
            {features.map((feature, position) => {
                return (
                    <ThumbStack
                        key={feature.slug}
                        feature={feature}
                        position={position}
                    />
                );
            })}
        </Flex>
    );
}
