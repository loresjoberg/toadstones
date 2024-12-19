import {Flex} from "@mantine/core";
import { Feature } from "@/types/toadstones";
import classes from "@/pages/Home.module.css";
import React from "react";
import {ThumbStack} from "@/components/ThumbStack/ThumbStack";

interface ThumbRowsProps {
    features: Feature[]
}


export function ThumbRows({features}: ThumbRowsProps) {
    return <Flex className={classes.pageFeatures} direction="row" justify="space-between" wrap="wrap">
        {
            features.map((feature, position) => {
                    return <ThumbStack key={feature.slug} feature={feature} position={position}/>;
                }
            )
        }
    </Flex>;
}
