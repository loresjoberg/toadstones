import { MainColumn } from '@/components/Main/MainColumn';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { config } from '@/config/config';
import FrontLayout from '@/layouts/FrontLayout';
import { Feature, Section } from '@/types/toadstones';
import { Head } from '@inertiajs/react';
import { Flex } from '@mantine/core';
import _ from 'lodash';
import classes from './Home.module.css';

export interface PagePropsInterface {
    sections: Section[];
}

interface HomePageInterface {
    features: Feature[];
}
export default function HomePage({ features }: HomePageInterface) {
    const getPopularFeatures = (features: Feature[]) => {
        const formattedFeatures = features;

        return _.slice(
            _.orderBy(formattedFeatures, ['isPopular'], ['desc']),
            0,
            config.popularFeaturesLimit,
        )
    }

    const getRecentFeatures = (features: Feature[]) => {
        const formattedFeatures = features;

        return _.slice(
            _.slice(
                _.orderBy(formattedFeatures, ['launch'], ['desc']),
                1,
                config.mainThumbsLimit + 1,
            ),
        )
    }

    const getMainFeature = (features: Feature[]) => {
        const formattedFeatures = features;

       return _.orderBy(formattedFeatures, ['launch'], ['desc'])[0];
    }



    return (
        features && (
            <FrontLayout>
                <Head title={config.siteName}/>
                <Flex
                    className={classes.stage}
                    gap="1.5rem"
                    align="flex-start"
                    justify="space-between"
                >
                    <MainColumn
                        mainFeature={getMainFeature(features)}
                        features={getRecentFeatures(features)}
                    />
                    <Sidebar popularFeatures={getPopularFeatures(features)} />
                </Flex>
            </FrontLayout>
        )
    );
}
