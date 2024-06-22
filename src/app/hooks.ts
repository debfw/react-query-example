"use client";

import { useMutation, useQuery } from "@tanstack/react-query";

interface UserPreferences {
  id: string;
  preference: string;
  username: string;
  frequency: number;
}
const mockUserPreferences: { [key: string]: UserPreferences } = {
  dad: { id: "dad", preference: "Mandarin", username: "Dad123", frequency: 2 },
  sister: {
    id: "sister",
    preference: "TikTok",
    username: "Sister456",
    frequency: 1,
  },
  grandma: {
    id: "grandma",
    preference: "Korean",
    username: "Grandma789",
    frequency: 30,
  },
};

const family = {
  sister: ["id", "username", "frequency"] as const,
  all: ["id", "preference", "frequency"] as const,
  lists: () => [...family.all, "list"] as const,
  list: (filters: string) => [...family.lists(), { filters }] as const,
};

const fetchUserPreferences = async () => {
  return new Promise<{ [key: string]: UserPreferences }>((resolve) => {
    setTimeout(() => {
      resolve(mockUserPreferences);
    }, 1000); // Simulate a network delay
  });
};
const updateUserPreference = async (userPreferences: UserPreferences) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockUserPreferences[userPreferences.id] = userPreferences;
      resolve(userPreferences);
    }, 1000);
  });
};

export const useGetMockUserPrefQuery = () =>
  useQuery({
    queryKey: ["userData"],
    queryFn: () => fetchUserPreferences(),
    initialData: mockUserPreferences,
  });

export const useUpdateMockUserMutation = () =>
  useMutation({
    mutationFn: updateUserPreference,
  });
