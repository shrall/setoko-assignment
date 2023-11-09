import * as React from "react";
import { useSelector } from "react-redux";

import { useGetUserRepositoriesQuery } from "@/hooks/useGetUserRepositoriesQuery";
import useGetUsersQuery from "@/hooks/useGetUsersQuery";
import { useOnVisible } from "@/hooks/utils/useOnVisible";

import Layout from "@/components/layout/Layout";
import { RepositoryCard } from "@/components/repository/RepositoryCard";
import { RepositoryCardLoading } from "@/components/repository/RepositoryCardLoading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { UserCard } from "@/components/user/UserCard";
import { UserCardLoading } from "@/components/user/UserCardLoading";

import { RootState } from "@/store/store";

export default function Home() {
  // NOTE - Get the user search query from the store
  const user = useSelector((state: RootState) => state.user);

  const {
    data: usersData,
    isFetching: isFetchingUsers,
    isFetched: isFetchedUsers,
  } = useGetUsersQuery({
    searchQuery: user.searchQuery,
  });

  const [selectedUser, setSelectedUser] = React.useState("");

  const {
    data: repositoriesData,
    fetchNextPage: fetchNextRepositoriesPage,
    isFetching: isFetchingRepositories,
    isFetched: isFetchedRepositories,
    hasNextPage: hasNextRepositoriesPage,
  } = useGetUserRepositoriesQuery({
    selectedUser: selectedUser,
  });

  const targetElementRef = useOnVisible(
    () => selectedUser && fetchNextRepositoriesPage(),
  );

  return (
    <Layout>
      {isFetchedUsers && (
        <div className="my-2 text-sm text-secondary-foreground">
          Shows users for "{user.searchQuery}"
        </div>
      )}
      <Separator className="mb-4" />
      {isFetchingUsers || !usersData ? (
        <UserCardLoading isFetching={isFetchingUsers} />
      ) : (
        <Accordion
          type="single"
          collapsible
          value={selectedUser}
          onValueChange={setSelectedUser}
        >
          {usersData?.length === 0 ? (
            <UserCardLoading description="No Users Found" />
          ) : (
            usersData?.map((user) => (
              <AccordionItem
                key={user.id}
                value={user.login}
                className="mb-2 border-0"
              >
                <UserCard user={user} />
                <AccordionContent className="py-2 pl-8">
                  {repositoriesData?.map((repository) => (
                    <RepositoryCard
                      key={repository.id}
                      repository={repository}
                    />
                  ))}
                  {(!isFetchedRepositories ||
                    isFetchingRepositories ||
                    hasNextRepositoriesPage) && (
                    <RepositoryCardLoading ref={targetElementRef} />
                  )}
                </AccordionContent>
              </AccordionItem>
            ))
          )}
        </Accordion>
      )}
    </Layout>
  );
}
