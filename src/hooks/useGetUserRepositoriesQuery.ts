import { OctokitResponse } from "@octokit/types";
import { useInfiniteQuery, UseInfiniteQueryOptions } from "@tanstack/react-query";

import { octokit } from "@/components/services/api";

import { Repository } from "@/models/Repository";

interface useGetUserRepositoriesQueryProps {
    options?: Omit<UseInfiniteQueryOptions<OctokitResponse<Repository[]>, unknown, Repository[], OctokitResponse<Repository[]>, string[], number>, "queryKey" | "initialPageParam" | "getNextPageParam">
    selectedUser: string;
}

export function useGetUserRepositoriesQuery({ options, selectedUser }: useGetUserRepositoriesQueryProps) {
    const results = useInfiniteQuery({
        queryKey: ["repositories", selectedUser],
        queryFn: async ({ pageParam }) => {
            const res = await octokit.request("GET /users/{username}/repos", {
                username: selectedUser,
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                },
                page: pageParam,
                per_page: 10,
            });
            return res;
        },
        select: (data) => data.pages.flatMap((page) => page.data),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => getNextPageNumber(lastPage.headers.link),
        enabled: false,
        ...options,
    });
    return results
}

function getNextPageNumber(header: string | undefined): number | null {
    if (!header) {
        return null;
    }

    const parts = header.split(',');
    let nextPageNumber: number | null = null;

    for (const part of parts) {
        if (part.includes('rel="next"')) {
            const match = /<([^>]+)\?page=(\d+)[^>]*>; rel="next"/.exec(part);
            if (match) {
                nextPageNumber = parseInt(match[2], 10);
                break;
            }
        }
    }

    return nextPageNumber;
}