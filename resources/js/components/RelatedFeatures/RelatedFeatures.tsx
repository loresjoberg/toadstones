import { Feature } from '@/types/toadstones';
import { Flex } from '@mantine/core';
import { ThumbStack } from '@/components/ThumbStack/ThumbStack';
import _ from 'lodash';

interface RelatedFeaturesProps {
    features: Feature[];
    section: string;
}

export function RelatedFeatures({ features, section }: RelatedFeaturesProps) {


    const getRelatedFeatures = (): Feature[] => {
        const forSection = _.filter(features, ['section_slug', section])
        return _.sampleSize(forSection, 3);
    }


    return (<Flex mt="2rem" justify="space-between" direction="row">
            {
                getRelatedFeatures().map((feature) => {
                    return <ThumbStack key={feature.slug} feature={feature} position={-1} />;
                })
            }
        </Flex>);
}
