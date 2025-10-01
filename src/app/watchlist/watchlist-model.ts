export interface WatchlistBundle {
  steps: string[];
  current: string;
}

export interface WatchlistSystem {
  name: string;
  steps: string[];
  current: string;
  arc: string;
}

export interface WatchlistResponse {
  bundleId: number;
  bundleName: string;
  bundle: WatchlistBundle;
  systems: WatchlistSystem[];
  plannedBundle: WatchlistBundle;
  delivery: WatchlistBundle;
}
