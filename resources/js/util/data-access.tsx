import { config } from '@/config/config';
import { Feature, RawFeature, Section } from '@/types/toadstones';
import axios from 'axios';
import _ from 'lodash';

export function formatFeature(
    rawFeature: RawFeature,
    sections: Section[],
): Feature {
    const section: Section | undefined = _.find(sections, [
        'id',
        rawFeature.section_id,
    ]);

    return {
        id: rawFeature.id,
        section: section ? section.slug : '',
        section_id: rawFeature.section_id,
        sectionTitle: section ? section.title : '',
        thumbLocation: rawFeature.thumbLocation,
        mediaLocation: rawFeature.mediaLocation,
        title: rawFeature.title,
        url: `/p/${rawFeature.slug}`,
        launch: new Date(rawFeature.launch),
        slug: rawFeature.slug,
        html: rawFeature.html,
        medium: rawFeature.medium,
        isPopular: rawFeature.isPopular,
    };
}

export const formatFeatures = (
    rawFeatures: RawFeature[],
    sections: Section[],
): Feature[] => {
    return rawFeatures.map((rawFeature: RawFeature) => {
        return formatFeature(rawFeature, sections);
    });
};

export const fetchRawFeatures = async () => {
    return await axios
        .get(config.apiFeatures)
        .then((response) => {
            // console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchSections = async () => {
    return await axios
        .get(config.apiSections)
        .then((response) => {
            // console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};
