import ImagePage from "@/Pages/Features/ImagePage";
import HtmlPage from "@/Pages/Features/HtmlPage";
import VideoPage from "@/Pages/Features/VideoPage";
import React from "react";
import {Container} from "@mantine/core";
import FrontLayout from "@/Layouts/FrontLayout";
import { usePage } from "@inertiajs/react";
import { RawFeature } from "@/types/toadstones";

export interface PageProps {
    feature: RawFeature
}

export default function FeaturePage({feature}) {

    const { sections } = usePage().props

    console.log('sections',sections)
    console.log('feature',feature)

    if (!feature) {
        return (<p>"Nope."</p>);
    }

    if (feature.section === "the-ratings" || feature.medium === "html") {
        return <FrontLayout><Container size="md"><HtmlPage feature={feature}/></Container></FrontLayout>
    }

    if (feature.section === "bandwidth-theater" || feature.medium === "video") {
        return <FrontLayout><Container size="md"><VideoPage feature={feature}/></Container></FrontLayout>
    }

    return <FrontLayout><Container size="md"><ImagePage feature={feature}/></Container></FrontLayout>
}
