import { Octokit } from "octokit";

export const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

export interface APIResponse<T> {
    status: number;
    url: string;
    headers: {
        'cache-control': string;
        'content-type': string;
        link: string;
        'x-github-media-type': string;
        'x-github-request-id': string;
        'x-ratelimit-limit': string;
        'x-ratelimit-remaining': string;
        'x-ratelimit-reset': string;
        'x-ratelimit-resource': string;
        'x-ratelimit-used': string;
    };
    data: {
        total_count: number;
        incomplete_results: boolean;
        items: T;
    };
}
