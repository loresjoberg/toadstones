import { NavLink } from '@/components/Link/NavLink/Navlink';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { dsColors } from '@/config/dsColors';
import { SiteLink } from '@/types/toadstones';
import { Box, Container, Group } from '@mantine/core';

interface NavLinksProps {
    navLinks: SiteLink[];
    search?: boolean;
    stageWidth?: string | undefined;
}

export function NavBar({ navLinks, search, stageWidth }: NavLinksProps) {
    return (
        <Box bg="primary.3">
            <Container size="100%" style={{ maxWidth: stageWidth }}>
                <Group
                    justify="space-between"
                    gap={0}
                    bg="primary.3"
                    mt="xs"
                    mb="md"
                >
                    {navLinks.map((link) => (
                        <NavLink
                            color="secondary.9"
                            key={link.href}
                            text={link.text}
                            href={link.href}
                        />
                    ))}
                    {search && <SearchForm />}
                </Group>
            </Container>
        </Box>
    );
}
