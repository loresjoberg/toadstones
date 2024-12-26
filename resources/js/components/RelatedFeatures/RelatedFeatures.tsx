import { Feature } from '@/types/toadstones';
import { Flex } from '@mantine/core';
import { ThumbStack } from '@/components/ThumbStack/ThumbStack';
import _ from 'lodash';
import classes from "./RelatedFeatures.module.css"

interface RelatedFeaturesProps {
    features: Feature[];
    mainFeature: Feature;
}

export function RelatedFeatures({ features, mainFeature }: RelatedFeaturesProps) {


    const getRelatedFeatures = (): Feature[] => {
        const forSection = _.filter(features, function(feature) {
            return (feature.section_slug === mainFeature.section_slug && feature.slug !== mainFeature.slug);
        });
        return _.sampleSize(forSection, 3);
    };


    return (<Flex
        wrap="wrap"
        gap="1rem"
        mt="2rem"
        className={classes.relatedFeatures}>
        {
            getRelatedFeatures().map((feature) => {
                return <ThumbStack key={feature.slug} feature={feature} position={-1} />;
            })
        }
    </Flex>);
}
