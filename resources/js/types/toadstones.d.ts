export interface Feature {
    id: number;
    section_slug: string;
    section_id: number;
    section_title: string;
    thumbLocation: string;
    mediaLocation?: string;
    title: string;
    launch: string;
    status: string;
    slug: string;
    html?: string;
    medium?: string;
    isPopular: boolean;
}

export interface Section {
    id: number;
    slug: string;
    title: string;
}

export interface PageProps {
    pageData: Feature;
}

export interface SiteLinkProps {
    text: string;
    href: string;
}

export interface SiteLink {
    href: string;
    text: string;
}

export interface LinksProps {
    socialLinks: SiteLink[];
}

export interface SelectorOption {
    label: string;
    value: string;
}

export interface FeatureFormValues {
    title: string;
    slug: string;
    section_id: number;
    medium: string;
    html: string;
    imageFile?: File;
    videoFile?: File;
    thumbnailFile?: File;
    imageUrl: string;
    videoUrl: string;
    thumbnailUrl: string;
    status: string;
    isPopular: boolean;
    launch: Date;
}
