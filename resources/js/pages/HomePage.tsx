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
        return _.slice(
            _.orderBy(features, ['isPopular'], ['desc']),
            0,
            config.popularFeaturesLimit
        );
    };

    const getRecentFeatures = (features: Feature[]) => {
        return _.slice(
            _.slice(
                _.orderBy(features, ['launch'], ['desc']),
                1,
                config.mainThumbsLimit + 1
            )
        );
    };

    const getMainFeature = (features: Feature[]) => {
        return _.orderBy(features, ['launch'], ['desc'])[0];
    };


    return (
        features && (
            <FrontLayout>
                <Head>
                    <title>{config.siteName}</title>
                    <meta property="og:image"
                          content={config.siteBase + config.featureUrlPrefix + getMainFeature(features).thumbLocation} />
                    <meta name="twitter:image"
                          content={config.siteBase + config.featureUrlPrefix + getMainFeature(features).thumbLocation} />
                </Head>

                <Flex className={classes.stage}
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
