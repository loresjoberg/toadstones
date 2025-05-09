import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { config } from '@/config/config';
import { SiteLink } from '@/types/toadstones';
import { Container } from '@mantine/core';
import { PropsWithChildren } from 'react';

const navLinks: SiteLink[] = config.navigationLinks;
const socialLinks: SiteLink[] = config.socialLinks;

export default function FrontLayout({ children }: PropsWithChildren) {
    const stageWidth = '900px';

    return (<>
            <PageHeader navLinks={navLinks} stageWidth={stageWidth} />
            <Container
                mb="xl"
                fluid
                style={{ maxWidth: stageWidth }}
            >
                {children}
            </Container>
            <PageFooter socialLinks={socialLinks} stageWidth={stageWidth}/>
        </>
    );
}
