import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { octokit } from '@/components/services/api';

import { User } from '@/models/User';

interface useGetUsersQueryProps {
    options: UseQueryOptions<User[], unknown, User[], string[]>
    searchQuery: string;
}

export default function useGetUsersQuery({ options, searchQuery }: useGetUsersQueryProps) {
    // NOTE - Fetch users from the Github API
    const results = useQuery({
        queryFn: async () => {
            const res = await octokit.request("GET /search/users", {
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                },
                q: searchQuery,
                per_page: 5,
            })
            return res.data.items
        },
        // NOTE - Only fetch users if the search query is not empty
        enabled: searchQuery !== "",
        ...options
    });
    return results
}