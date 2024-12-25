import { ThumbStack } from '@/components/ThumbStack/ThumbStack';
import classes from '@/pages/Home.module.css';
import { Feature } from '@/types/toadstones';
import { Flex, Stack, Title } from '@mantine/core';
import { TextRule } from '@/components/TextRule/TextRule';

interface SidebarProps {
    popularFeatures: Feature[];
}

// function StoreLink() {
//     return <Anchor component={Link}  href="https://dogsandsorcerers.creator-spring.com/" >
//         <Image src="/img/store-ad.png" mb="xs" alt="Visit the Bad Gods Store"/>
//     </Anchor>;
// }

export function Sidebar({ popularFeatures }: SidebarProps) {
    return (
        <Stack className={classes.sidebar} gap="sm">
            <TextRule label="Popular"/>
            <Flex
                className={classes.popularFeatures}
                justify="space-between"
                gap="0.75rem"
            >
                {popularFeatures.map((feature: Feature) => {
                    return (
                        <ThumbStack
                            key={feature.slug}
                            feature={feature}
                            position={-1}
                        />
                    );
                })}
            </Flex>
        </Stack>
    );
}
