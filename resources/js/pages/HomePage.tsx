import { MainColumn } from '@/components/Main/MainColumn';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { config } from '@/config/config';
import FrontLayout from '@/layouts/FrontLayout';
import { Feature, Section } from '@/types/toadstones';
import { formatFeatures } from '@/util/data-access';
import { Head, usePage } from '@inertiajs/react';
import { Flex } from '@mantine/core';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import classes from './Home.module.css';

export interface PagePropsInterface {
    sections: Section[];
}
export default function HomePage({ features }) {
    const [popularFeatures, setPopularFeatures] = useState<Feature[]>([]);
    const [recentFeatures, setRecentFeatures] = useState<Feature[]>([]);
    const [mainFeature, setMainFeature] = useState<Feature | undefined>();

    const { sections } = usePage<PagePropsInterface>().props;

    useEffect(() => {
        const formattedFeatures = formatFeatures(features, sections);
        setPopularFeatures(
            _.slice(
                _.orderBy(formattedFeatures, ['isPopular'], ['desc']),
                0,
                config.popularFeaturesLimit,
            ),
        );
        setRecentFeatures(
            _.slice(
                _.orderBy(formattedFeatures, ['launch'], ['desc']),
                1,
                config.mainThumbsLimit + 1,
            ),
        );
        setMainFeature(_.orderBy(formattedFeatures, ['launch'], ['desc'])[0]);
    }, []);

    return (
        mainFeature &&
        mainFeature.title && (
            <FrontLayout>
                <Head title={config.siteName}/>
                <Flex
                    className={classes.stage}
                    gap="1.5rem"
                    align="flex-start"
                    justify="space-between"
                >
                    <MainColumn
                        mainFeature={mainFeature}
                        features={recentFeatures}
                    />
                    <Sidebar popularFeatures={popularFeatures} />
                </Flex>
            </FrontLayout>
        )
    );
}
