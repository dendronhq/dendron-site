const execa = require('execa');
const moment = require("moment");
const _ = require("lodash");
const YAML = require('yamljs');
const fs = require("fs-extra");


async function gitLogs(repoPath) {
    const gitTagCmd = `git describe --abbrev=0 --tags`;
    const { stdout: gitTag } = await execa.command(gitTagCmd, { cwd: repoPath, shell: true })
    console.log(gitTag)
    // v0.5.13
    const [major, minor, patch] = gitTag.split(".");
    const gitTagAnchor = `${major}.${minor}.0`;
    console.log(gitTagAnchor)
    const command = `git log ${gitTagAnchor}..HEAD --format=\'%C(auto) %h %s\'`;
    const out = await execa.command(command, { cwd: repoPath, shell: true })
    const commits = out.stdout.split("\n").map(line => {
        const [skip, chash, ctype, ...cmsg] = line.split(" ")
        return { chash, ctype, cmsg: cmsg.join(" ") }
    })
    const tag = { major, minor, patch }
    return { commits, tag };
}

async function cleanCommits(commits) {
    return _.reject(commits, ent => {
        return _.some(["chore", "docs", "spike", "tests", "refactor", "invest"], bad => ent.ctype.startsWith(bad))
    });
}

function addExtraFields(commits) {
    return commits.map(c => {
        return { ...c, topic: "", desc: "", tags: [] }
    })
}

async function main() {
    const stats = {
        numCommits: 0
    };
    const { commits, tag } = await gitLogs('/Users/kevinlin/projects/dendronv2/dendron');
    stats.numCommits = commits.length;
    const commitsClean = await cleanCommits(commits);
    const yamlString = YAML.stringify(addExtraFields(commitsClean), 4);
    console.log(commitsClean)
    const tagName = [tag.major, tag.minor, tag.patch].join(".");
    fs.writeFileSync(`data/${tagName}.yml`, yamlString)
}

const sections = {
    commands: {},
    notes: {},
    other: {},
    pods: {},
    schemas: {},
    workspace: {},
}

main();