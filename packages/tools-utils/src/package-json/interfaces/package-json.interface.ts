type BinRecord = Record<string, string>;
type DependenciesRecord = Record<string, string>;

export interface PackageJson {
    name?: string;

    bin?: string | BinRecord;

    dependencies?: DependenciesRecord;
    devDependencies?: DependenciesRecord;
    peerDependencies?: DependenciesRecord;
    optionalDependencies?: DependenciesRecord;
}
