// user-role.enum.ts
export enum UserRole {
  Guest = -1,           // Special case for non-logged in users
  Developer = 0,        // Maps to Developer in backend
  TestManager = 1,          // Maps to Tester in backend
  ReleaseManager = 2,   // Maps to Manager in backend
  Operations = 3,       // Maps to Operations in backend
  Architect = 4         // Maps to Architect in backend
}
