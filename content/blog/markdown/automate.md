---
title: Automate - Remember DRY!
date: '2019-01-27'
---

Every time I create new blog these are the steps involved.
- gatsby build
- Remove content of Github Pages repo and push the commit, this ensures unused files are removed.
- Copy content of public folder from source repo to GitHub Pages repo, push the commit.
- Finally source repo needs to be commited and pushed.

As I was doing it manually, this is against DRY (Don't Repeat Yourself) principle.

This is how I come up with automating this task with these bash scripts:
1. One repo requires cleaning old content or else unused files will live on.
```bash
    #!/bin/bash
    
    REPO_DIR=/Users/vinkrish/Documents/workspace/javascript/vinkrish.github.io
    cd $REPO_DIR
    rm -r *
    
    git add .
    git commit -m "deleting cache and previous files"
    git push origin master
```

2. Updating two repos with newly added blog post
```bash
    #!/bin/bash
    
    read blog_name
    REPO_DIR=/Users/vinkrish/Documents/workspace/javascript/vinkrish.github.io
    SRC_DIR=/Users/vinkrish/Documents/workspace/javascript/my-blog-starter
    
    cp -R $SRC_DIR/public/* $REPO_DIR
    
    cd $REPO_DIR
    git add .
    git commit -m "added $blog_name"
    git push origin master
    
    cd $SRC_DIR
    git add .
    git commit -m "added $blog_name"
    git push origin master
```
You need to update `.bash_profile`:
```bash
export PATH=$PATH:/Users/vinay/bin
```

Your script will be in bin directory:
```bash
cd ~
mkdir bin
```

Give permission for the script to be executable:
```bash
chmod u+x file_name
```

Now you can call `file_name` from terminal.