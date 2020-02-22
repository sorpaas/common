interface PackageJson {
    name: string;
    version: string;
}
/**
 * @name detectPackage
 * @summary Checks that a specific package is only imported once
 */
export default function detectPackage({ name, version }: PackageJson, path?: string): void;
export {};
