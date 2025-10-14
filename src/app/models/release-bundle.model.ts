import { ReleaseBundleEnum } from '../release-bundle/release-bundle.enum';

export interface ReleaseBundle {
  id: number;
  name: string;
  status: ReleaseBundleEnum.Planned | ReleaseBundleEnum.Released | ReleaseBundleEnum.InProgress;
  releaseDate?: string;
}
