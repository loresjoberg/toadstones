import { HeaderBanner } from '@/components/HeaderBanner/HeaderBanner';
import { NavBar } from '@/components/Links/NavLinks/NavBar';
import { SiteLink } from '@/types/toadstones';
import { Box, Container } from '@mantine/core';
import { MobileBanner } from '@/components/MobileBanner/MobileBanner';

interface PageHeaderProps {
    navLinks: SiteLink[];
    stageWidth?: string;
}

export function PageHeader({ navLinks, stageWidth }: PageHeaderProps) {
    return (<Container mt="1em">
        <Box hiddenFrom="sm" mb="1em" pb="1em" style={{borderBottom: "4px solid #0000ff"}}>
            <MobileBanner navLinks={navLinks}/>
        </Box>
        <Box visibleFrom="sm">
            <HeaderBanner stageWidth={stageWidth} />
            <NavBar stageWidth={stageWidth} navLinks={navLinks} search />
        </Box>
    </Container>);
}
