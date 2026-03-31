/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    branches: [
        {
            name: "release/stable",
            channel: "stable"
        },
        {
            name: "main",
            channel: "dev",
            prerelease: "dev"
        },
        {
            name: ".+",
            channel: "ci",
            prerelease: "ci-do-not-use"
        },
    ],
    repositoryUrl: "https://github.com/citizenid-space/passport-citizenid",
    tagFormat: "v${version}",
    debug: false,
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
        "@semantic-release/npm"
    ],
};
