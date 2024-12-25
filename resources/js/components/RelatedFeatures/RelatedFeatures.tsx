import { Feature } from '@/types/toadstones';
import { Flex } from '@mantine/core';
import { ThumbStack } from '@/components/ThumbStack/ThumbStack';
import _ from 'lodash';

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


    return (<Flex mt="2rem" pt="1rem" style={{borderTop: "2px solid #B29BC1"}} justify="space-between" direction="row">
        {
            getRelatedFeatures().map((feature) => {
                return <ThumbStack key={feature.slug} feature={feature} position={-1} />;
            })
        }
    </Flex>);
}
