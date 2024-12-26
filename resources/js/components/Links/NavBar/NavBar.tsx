import { NavBarLink } from '@/components/Link/NavLink/NavBarLink';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { SiteLink } from '@/types/toadstones';
import { Box, Container, Group } from '@mantine/core';

interface NavLinksProps {
    navLinks: SiteLink[];
    stageWidth?: string | undefined;
}

export function NavBar({ navLinks, stageWidth }: NavLinksProps) {
    return (
        <Box bg="primary.3">
            <Container size="100%" style={{ maxWidth: stageWidth }}>
                <Group
                    justify="space-between"
                    gap={0}
                    bg="primary.3"
                    mt="xs"
                    mb="md"
                    pos="relative"
                >
                    {navLinks.map((link) => (
                        <NavBarLink
                            key={link.href}
                            text={link.text}
                            href={link.href}
                        />
                    ))}
                    <SearchForm />
                </Group>
            </Container>
        </Box>
    );
}
