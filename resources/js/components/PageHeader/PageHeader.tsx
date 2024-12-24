import { HeaderBanner } from '@/components/HeaderBanner/HeaderBanner';
import { NavBar } from '@/components/Links/NavBar/NavBar';
import { SiteLink } from '@/types/toadstones';
import { Box, Container } from '@mantine/core';
import { MobileBanner } from '@/components/MobileBanner/MobileBanner';

interface PageHeaderProps {
    navLinks: SiteLink[];
    stageWidth?: string;
}

export function PageHeader({ navLinks, stageWidth }: PageHeaderProps) {
    return (<>
        <Container hiddenFrom="sm" mb="1rem" pb="1rem" mt="1rem" style={{borderBottom: "4px solid #96B6BC"}}>
            <MobileBanner navLinks={navLinks}/>
        </Container>
        <Box visibleFrom="sm">
            <HeaderBanner stageWidth={stageWidth} />
            <NavBar stageWidth={stageWidth} navLinks={navLinks} search />
        </Box>
    </>);
}
