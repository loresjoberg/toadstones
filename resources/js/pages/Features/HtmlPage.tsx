import { PageProps } from '@/pages/Features/FeaturePage';
import { PagePropsInterface } from '@/pages/HomePage';
import { formatFeature } from '@/util/data-access';
import { usePage } from '@inertiajs/react';
import '@mantine/core/styles.css';
import _ from 'lodash';

export default function HtmlPage({ feature }: PageProps) {
    const { sections } = usePage<PagePropsInterface>().props;
    const formattedFeature = formatFeature(feature, sections);
    if (_.isUndefined(formattedFeature.html)) {
        return <p>Empty</p>;
    }

    return (
        <div className={`feature feature-${formattedFeature.slug}`}>
            <div dangerouslySetInnerHTML={{ __html: formattedFeature.html }} />
        </div>
    );
}
