import _ from "lodash";
import {PageProps} from "@/Pages/Features/FeaturePage";
import { usePage } from "@inertiajs/react";
import { PagePropsInterface } from "@/Pages/HomePage";
import { formatFeature } from "@/util/data-access";
import '@mantine/core/styles.css';



export default function HtmlPage({feature}: PageProps) {

    const { sections } = usePage<PagePropsInterface>().props
    const formattedFeature = formatFeature(feature, sections)
    if (_.isUndefined(formattedFeature.html)) {
        return (<p>Empty</p>);
    }

    return <div className={`feature feature-${formattedFeature.slug}`}><div dangerouslySetInnerHTML={{ __html: formattedFeature.html }}/></div>
}
