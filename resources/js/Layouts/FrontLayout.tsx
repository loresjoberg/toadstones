import { Container } from "@mantine/core";
import { config } from "@/config/config";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import React, { PropsWithChildren } from "react";
import { PageFooter } from "@/components/PageFooter/PageFooter";
import { SiteLink } from "@/types/toadstones";
import { Head } from "@inertiajs/react";

const navLinks: SiteLink[] = config.navigationLinks;
const socialLinks: SiteLink[] = config.socialLinks;

export default function FrontLayout({ children }: PropsWithChildren) {

    const stageWidth = "1120px";

    return (
        <>
            <Head title="Bad Gods" />
            <PageHeader navLinks={navLinks} stageWidth={stageWidth} />
            <Container mt="xl" mb="xl" fluid style={{ maxWidth: stageWidth, minHeight: "80vh" }}>
                {children}
            </Container>
            <PageFooter socialLinks={socialLinks} />
        </>

    );
}
