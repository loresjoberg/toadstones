import { PageProps } from '@/pages/Features/FeaturePage';

import '@mantine/core/styles.css';
import _ from 'lodash';

export default function HtmlPage({ feature }: PageProps) {
    const formattedFeature = feature;
    if (_.isUndefined(formattedFeature.html)) {
        return <p>Empty</p>;
    }

    return (
        <div className={`feature feature-${formattedFeature.slug}`}>
            <div dangerouslySetInnerHTML={{ __html: formattedFeature.html }} />
        </div>
    );
}
