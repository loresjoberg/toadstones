import {Flex, Stack, Title} from "@mantine/core";
import {dsColors} from "@/config/dsColors";
import { Feature } from "@/types/toadstones";
import classes from "@/pages/Home.module.css";
import React from "react";
import {ThumbStack} from "@/components/ThumbStack/ThumbStack";



interface SidebarProps {
    popularFeatures: Feature[]
}


// function StoreLink() {
//     return <Link href="https://dogsandsorcerers.creator-spring.com/" >
//         <Image src="/img/store-ad.png" mb="xs" alt="Visit the Bad Gods Store"/>
//     </Anchor>;
// }

export function Sidebar({popularFeatures}: SidebarProps) {
    return <Stack className={classes.sidebar} gap="sm">
        <Title order={3} c={dsColors.white} ta="center" mb="sm" bg={dsColors.lightPurple}>Popular</Title>
        <Flex className={classes.popularFeatures} justify="space-between" gap="0.75rem">
            {
                popularFeatures.map((feature: Feature) => {
                        return <ThumbStack key={feature.slug} feature={feature} position={-1}/>;
                    }
                )
            }
        </Flex>
    </Stack>;
}
