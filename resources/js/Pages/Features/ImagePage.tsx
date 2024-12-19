import {Center, Image} from "@mantine/core";
import {PageProps} from "@/Pages/Features/FeaturePage";
import {config} from "@/config/config";
import { usePage } from "@inertiajs/react";
import { PagePropsInterface } from "@/Pages/HomePage";
import { formatFeature, formatFeatures } from "@/util/data-access";


export default function ImagePage({feature}: PageProps) {
    const { sections } = usePage<PagePropsInterface>().props
    const formattedFeature = formatFeature(feature, sections)

    return <Center>
        <Image maw="800px" src={`${config.mediaBase}/${formattedFeature.mediaLocation}`} alt={formattedFeature.title}/>
    </Center>

}
