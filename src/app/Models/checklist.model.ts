// progress-overview.model.ts
export interface ChecklistResponse {
  bundleReleaseID: number;
  bundleReleaseName: string;
  totalChecklists: number;
  completedChecklists: number;
  totalItems: number;
  completedItems: number;
  completionPercentage: number;
  checklists: Checklist[];
}

export interface Checklist {
  checklistID: number;
  name: string;
  order: number;
  isCompleted: boolean;
  totalSubChecklists: number;
  completedSubChecklists: number;
  subChecklists: SubChecklist[];
}

export interface SubChecklist {
  subChecklistID: number;
  name: string;
  order: number;
  isCompleted: boolean;
  totalItems: number;
  completedItems: number;
  items: ChecklistItem[];
}

export interface ChecklistItem {
  checklistItemID: number;
  description: string;
  isCompleted: boolean;
  order: number;
  role?: number | string;
  detailedDescription?: string;
}
