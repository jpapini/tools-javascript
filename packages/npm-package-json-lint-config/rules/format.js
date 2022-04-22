module.exports = {
    rules: {
        // Error if the value in bin is not either a string nor an object.
        'bin-type': 'error',
        // Error if the value in bundledDependencies is not an object.
        'bundledDependencies-type': 'error',
        // Error if the value in config is not an object.
        'config-type': 'error',
        // Error if the value in cpu is not an array.
        'cpu-type': 'error',
        // Error if the value in dependencies is not an object.
        'dependencies-type': 'error',
        // Error if the value in description is not a string.
        'description-type': 'error',
        // Error if the value in devDependencies is not an object.
        'devDependencies-type': 'error',
        // Error if the value in directories is not an object.
        'directories-type': 'error',
        // Error if the value in engines is not an object.
        'engines-type': 'error',
        // Error if the value in files is not an array.
        'files-type': 'error',
        // Error if the value in homepage is not a string.
        'homepage-type': 'error',
        // Error if the value in keywords is not an array.
        'keywords-type': 'error',
        // Error if the value in license is not a string.
        'license-type': 'error',
        // Error if the value in main is not a string.
        'main-type': 'error',
        // Error if the value in man is not either a string nor an object.
        'man-type': 'error',
        // Error if the value in name is not a string.
        'name-type': 'error',
        // Error if the value in optionalDependencies is not an object.
        'optionalDependencies-type': 'error',
        // Error if the value in os is not an array.
        'os-type': 'error',
        // Error if the value in peerDependencies is not an object.
        'peerDependencies-type': 'error',
        // Error if the value in preferGlobal is not a boolean.
        'preferGlobal-type': 'error',
        // Error if the value in private is not a boolean.
        'private-type': 'error',
        // Error if the value in repository is not either a string nor an object.
        'repository-type': 'error',
        // Error if the value in scripts is not an object or any of the individual scripts aren't strings.
        'scripts-type': 'error',
        // Error if the value in version is not a string.
        'version-type': 'error',

        // Error if a dependency exists in both dependencies and devDependencies.
        'no-repeated-dependencies': 'error',

        // Error if one of the dependencies in dependencies is url to archive file.
        'no-archive-dependencies': 'error',
        // Error if one of the dependencies in dependencies uses caret versions.
        'no-caret-version-dependencies': 'error',
        // Error if one of the dependencies in dependencies is url to local file.
        'no-file-dependencies': 'error',
        // Error if one of the dependencies in dependencies uses git repository.
        'no-git-dependencies': 'error',
        // Error if one of the dependencies in dependencies uses tilde versions.
        'no-tilde-version-dependencies': 'error',
        // Error if the dependencies in dependencies are not in alphabetical order.
        'prefer-alphabetical-dependencies': 'error',

        // Error if one of the devDependencies in devDependencies is url to archive file.
        'no-archive-devDependencies': 'error',
        // Error if one of the dependencies in devDependencies uses caret versions.
        'no-caret-version-devDependencies': 'error',
        // Error if one of the devDependencies in devDependencies is url to local file.
        'no-file-devDependencies': 'error',
        // Error if one of the devDependencies in devDependencies uses git repository.
        'no-git-devDependencies': 'error',
        // Error if one of the dependencies in devDependencies uses tilde versions.
        'no-tilde-version-devDependencies': 'error',
        // Error if the dependencies in devDependencies are not in alphabetical order.
        'prefer-alphabetical-devDependencies': 'error',

        // Error if the dependencies in bundledDependencies are not in alphabetical order.
        'prefer-alphabetical-bundledDependencies': 'error',

        // Error if the dependencies in optionalDependencies are not in alphabetical order.
        'prefer-alphabetical-optionalDependencies': 'error',

        // Error if the dependencies in peerDependencies are not in alphabetical order.
        'prefer-alphabetical-peerDependencies': 'error',

        // Error if description doesn't meet the configured options.
        'description-format': [
            'error',
            {
                requireEndingPeriod: true,
            },
        ],
        // Error if name does not meet the naming constraints.
        'name-format': 'error',
        // Error if version is not a valid semantic version.
        'version-format': 'error',

        // Error if package.json has duplicate properties in block section.
        'no-duplicate-properties': 'error',

        // Error if contributors is present.
        'prefer-no-contributors': 'error',
    },
};
