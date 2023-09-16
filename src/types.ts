export interface Job {
  uuid: string;
  amount: number;
  currency: string;
  executionDate: string;
  agent: string;
  contractPeriodicity: number;
  floorAndDoor: string;
  locationComment: string;
  type: string;
  duration: number;
  location: string;
  locationUuid: string;
}
export interface JobByLocation {
  location: string;
  total: number;
  jobs: string[];
  uuid: string;
  state: string;
  city: string;
}

export interface Data {
  jobs: Job[];
  jobsByLocation: JobByLocation[];
}
