# react_16x-demo
Step by step demo of react

Each step is tagged by git.
You'd look after the differences in each release.
There are also inline comments to drive you.

First, make sure that the tag exists locally by doing

```sh
# --all will fetch all the remotes.
# --tags will fetch all tags as well
git fetch --all --tags --prune
```

Then check out the tag by running

```sh
git checkout tags/<tag_name> -b <branch_name>
```

Instead of origin use the tags/ prefix.
