import { SocialLink } from '@/components/Link/SocialLink/SocialLink';
import { LinksProps } from '@/types/toadstones';
import { Stack } from '@mantine/core';

export function SocialLinks({ socialLinks }: LinksProps) {
    return (
        <Stack gap={0}>
            {socialLinks.map((link) => (
                <SocialLink
                    color="secondary.3"
                    key={link.href}
                    text={link.text}
                    href={link.href}
                />
            ))}
        </Stack>
    );
}
