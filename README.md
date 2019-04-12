
# Create GIT Repository

1. Create a new folder, and set up an express project inside it.

2. Add a `.gitignore` file, inside which add `node_modules/` so that folder is not uploaded.

3. Inside the folder, from command line

```shell

# initialize git
git init
# Add files
git add -A
# Commit your changes
git commit -m "simple hello world server"

```

4. Upload to github

```shell
git remote add origin https://github.com/championswimmer/ngbc-sample-march19-.git
git push -u origin master
```
