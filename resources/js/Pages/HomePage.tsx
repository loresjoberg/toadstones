import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { config } from "@/config/config";
import { Feature, Section } from "@/types/toadstones";
import { formatFeatures } from "@/util/data-access";
import _ from "lodash";
import { Flex } from "@mantine/core";
import { MainColumn } from "@/Components/Main/MainColumn";
import { Sidebar } from "@/Components/Sidebar/Sidebar";
import FrontLayout from "@/Layouts/FrontLayout";
import { usePage } from "@inertiajs/react";


export interface PagePropsInterface  {
    sections: Section[];
}
export default function HomePage({features}) {
    const [popularFeatures, setPopularFeatures] = useState<Feature[]>([]);
    const [recentFeatures, setRecentFeatures] = useState<Feature[]>([]);
    const [mainFeature, setMainFeature] = useState<Feature | undefined>();

    const { sections } = usePage<PagePropsInterface>().props

    useEffect(() => {
        const formattedFeatures = formatFeatures(features, sections)
        setPopularFeatures(_.slice(_.orderBy(formattedFeatures, ["isPopular"], ["desc"]), 0, config.popularFeaturesLimit));
        setRecentFeatures(_.slice(_.orderBy(formattedFeatures, ["id"], ["desc"]), 1, config.mainThumbsLimit + 1));
        setMainFeature(_.orderBy(formattedFeatures, ["id"], ["desc"])[0]);
    }, []);


    return mainFeature && mainFeature.title && <FrontLayout>
        <Flex className={classes.stage} gap="1.5rem" align="flex-start" justify="space-between">
            <MainColumn mainFeature={mainFeature} features={recentFeatures} />
            <Sidebar popularFeatures={popularFeatures} />
        </Flex>
    </FrontLayout>;
}
