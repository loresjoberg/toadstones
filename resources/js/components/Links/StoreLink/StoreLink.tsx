import { config } from '@/config/config';
import { Link } from '@inertiajs/react';
import { Image } from '@mantine/core';

export function StoreLink() {
    return (
        <Link href={config.adDestinationUrl}>
            <Image
                mb="xs"
                src={config.adImgUrl}
                alt="Visit the Bad Gods Store"
            />
        </Link>
    );
}
