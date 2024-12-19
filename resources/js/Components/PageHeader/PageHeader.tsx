import React from "react";
import {HeaderBanner} from "@/components/HeaderBanner/HeaderBanner";
import {NavLinks} from "@/components/Links/NavLinks/NavLinks";
import { SiteLink } from "@/types/toadstones";

interface PageHeaderProps {
    navLinks: SiteLink[],
    stageWidth?: string
}

export function PageHeader({navLinks, stageWidth}: PageHeaderProps) {

    return <div>
        <HeaderBanner stageWidth={stageWidth}/>
        <NavLinks stageWidth={stageWidth} navLinks={navLinks} search/>
    </div>;
}
