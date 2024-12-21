import { PageFooter } from '@/components/PageFooter/PageFooter';
import { PageHeader } from '@/components/PageHeader/PageHeader';
import { config } from '@/config/config';
import { SiteLink } from '@/types/toadstones';
import { Container, MantineProvider } from '@mantine/core';
import { PropsWithChildren } from 'react';

const navLinks: SiteLink[] = config.navigationLinks;
const socialLinks: SiteLink[] = config.socialLinks;

export default function FrontLayout({ children }: PropsWithChildren) {
    const stageWidth = '1120px';

    return (
        <MantineProvider>
            <PageHeader navLinks={navLinks} stageWidth={stageWidth} className=/>
            <Container
                mt="xl"
                mb="xl"
                fluid
                style={{ maxWidth: stageWidth, minHeight: '80vh' }}
            >
                {children}
            </Container>
            <PageFooter socialLinks={socialLinks} />
        </MantineProvider>
    );
}
