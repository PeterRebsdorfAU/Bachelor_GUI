export interface ChecklistResponse {
  bundleId: number;
  name: string;
  sections: ChecklistSection[];
}

export interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
}

export interface ChecklistItem {
  text: string;
  isChecked: boolean;
  subItems: ChecklistItem[];
}
