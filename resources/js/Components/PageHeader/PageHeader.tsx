import { HeaderBanner } from '@/components/HeaderBanner/HeaderBanner';
import { NavBar } from '@/Components/Links/NavLinks/NavBar';
import { SiteLink } from '@/types/toadstones';

interface PageHeaderProps {
    navLinks: SiteLink[];
    stageWidth?: string;
}

export function PageHeader({ navLinks, stageWidth }: PageHeaderProps) {
    return (
        <div>
            <HeaderBanner stageWidth={stageWidth} />
            <NavBar stageWidth={stageWidth} navLinks={navLinks} search />
        </div>
    );
}
