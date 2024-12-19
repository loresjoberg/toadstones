import { Center, Stack, Text } from "@mantine/core";
import classes from "@/pages/Home.module.css";
import React from "react";
import { FeaturedStack } from "@/components/FeaturedStack/FeaturedStack";
import { ThumbRows } from "@/components/ThumbRows/ThumbRows";
import { dsColors } from "@/config/dsColors";
import { Feature } from "@/types/toadstones";
import { Link } from "@inertiajs/react";

interface MainProps {
    mainFeature: Feature,
    features: Feature[]
}

export function MainColumn({ mainFeature, features }: MainProps) {
    return <Stack className={classes.mainColumn}>
        <FeaturedStack feature={mainFeature} />
        <ThumbRows features={features} />
        <Center bg={dsColors.lightBlue}>
            <Link href="/archive">
                <Text lh={2} c={dsColors.darkBlue} size="16pt" ff="PT Sans Narrow" fw="bold">View All</Text>
            </Link>
        </Center>
    </Stack>;
}
