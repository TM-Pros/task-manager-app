// MILESTONE
export interface Milestone {
  id: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  projectId: string;
  creatorId: string;
  name: string;
  deadline?: string;
}

// FIXME: MilestoneEvent
