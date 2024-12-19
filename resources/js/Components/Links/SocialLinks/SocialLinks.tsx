import {Stack} from "@mantine/core";
import {dsColors} from "@/config/dsColors";
import React from "react";
import {SocialLink} from "@/components/Link/SocialLink/SocialLink";
import { LinksProps } from "@/types/toadstones";

export function SocialLinks({socialLinks}: LinksProps) {
    return <Stack gap={0}>
        {
            socialLinks.map(link => <SocialLink color={dsColors.lightPurple}
                                                key={link.href}
                                                text={link.text}
                                                href={link.href}/>)
        }
    </Stack>;
}
