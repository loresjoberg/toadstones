import { SocialLinks } from '@/components/Links/SocialLinks/SocialLinks';
import { SiteLink } from '@/types/toadstones';
import { Box, Container, Group, Stack } from '@mantine/core';

interface PageFooterProps {
    socialLinks: SiteLink[];
    stageWidth: string;
}

export function PageFooter({ socialLinks, stageWidth }: PageFooterProps) {
    return (
        <Box bg="secondary.9" pt="2rem" pb="2rem">
            <Container style={{ maxWidth: stageWidth }}>
                <Group justify="space-between" align="top">
                    <Stack c="secondary.3">
                        Copyright &copy; 2024 Lore Sjöberg
                    </Stack>
                    <SocialLinks socialLinks={socialLinks} />
                </Group>
            </Container>
        </Box>
    );
}
