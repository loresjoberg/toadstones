export interface RawFeature {
    id: number;
    section_id: number;
    title: string;
    launch: string;
    status: string;
    views: number;
    slug: string;
    html?: string;
    medium?: string;
    mediaLocation?: string;
    thumbLocation: string;
    isPopular: boolean;
}

export interface Feature {
    id: number;
    section: string;
    section_id: number;
    sectionTitle: string;
    thumbLocation: string;
    mediaLocation?: string;
    title: string;
    url: string;
    launch: Date;
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
    color: string;
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
