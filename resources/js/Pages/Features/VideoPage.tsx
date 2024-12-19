import {AspectRatio} from "@mantine/core";
import {PageProps} from "@/Pages/Features/FeaturePage";
import { usePage } from "@inertiajs/react";
import { PagePropsInterface } from "@/Pages/HomePage";
import { formatFeature } from "@/util/data-access";
import { config } from "@/config/config";


export default function VideoPage({feature}: PageProps) {
    const { sections } = usePage<PagePropsInterface>().props
    const formattedFeature = formatFeature(feature, sections)

    return <AspectRatio ratio={16 / 9}>
        <iframe
            src={`${config.mediaBase}/${formattedFeature.mediaLocation}`}
            title={formattedFeature.title}
            style={{border: 0}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </AspectRatio>
}
