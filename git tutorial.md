# Basic Git
## Git Comnmands Introduction
### Git add
* Moves changes from the working directory to the staging area. 
* This gives you the opportunity 
  * to prepare a snapshot 
  * before committing it to the official history

### Git branch
* This command is your general-purpose branch administration tool. 
* It lets you create isolated development environments 
  * within a single repository.

### Git checkout
* In addition to checking out old commits and old file revisions, 
  * git checkout is also the means to navigate existing branches. 
* Combined with the basic Git commands, 
  * it’s a way to work on a particular line of development.

### Git clean
* Removes untracked files from the working directory. 
* This is the logical counterpart to git reset, 
  * which (typically) only operates on tracked files.

### Git clone
* Creates a copy of an existing Git repository. 
* Cloning is the most common way for developers 
  * to obtain a working copy of a central repository.

### Git commit
* Takes the staged snapshot and commits it to the project history. 
* Combined with git add, this defines the basic workflow for all Git users.

### git commit `--amend`
* Passing the `--amend` flag to 
  * git commit lets you amend the most recent commit.
* This is very useful when you forget to stage a file or omit important information from the commit message.

### git config
* A convenient way to set configuration options for your Git installation. 
* You’ll typically only need to use this immediately after installing Git on a new development machine.

### git fetch
* Fetching downloads a branch from another repository, 
  * along with all of its associated commits and files. 
* But, it doesn't try to integrate anything into your local repository. 
* This gives you a chance to inspect changes before merging them with your project.

### git init
* Initializes a new Git repository. 
* If you want to place a project under revision control, 
  * this is the first command you need to learn.

### git merge
* A powerful way to integrate changes from divergent branches. 
* After forking the project history with `git branch`, `git merge` 
  * lets you put it back together again.

### git pull
* Pulling is the automated version of git fetch. 
* It downloads a branch from a remote repository, 
  * then immediately merges it into the current branch. 
* This is the Git equivalent of svn update.

### git push
* Pushing is the opposite of fetching (with a few caveats). 
* It lets you move a local branch to another repository, 
  * which serves as a convenient way to publish contributions. 
* This is like `svn commit`, 
  * but it sends a series of commits instead of a single changeset.

### git rebase
* Rebasing lets you move branches around, 
  * which helps you avoid unnecessary merge commits. 
* The resulting linear history is often much easier to understand and explore.

### git rebase -i
* The -i flag is used to begin an interactive rebasing session. 
* This provides all the benefits of a normal rebase, 
  * but gives you the opportunity 
    * to add, edit, or delete commits along the way.

### git reflog
* Git keeps track of updates to 
  * the tip of branches using a mechanism called reflog. 
* This allows you to 
  * go back to change sets even though 
    * they are not referenced by any branch or tag.

### git remote
* A convenient tool for administering remote connections. 
* Instead of passing the full URL 
  * to the fetch, pull, and push commands, 
  * it lets you use a more meaningful shortcut.

### git reset
* Undoes changes to files in the working directory. \
* Resetting lets you clean up or completely remove changes 
  * that have not been pushed to a public repository.

### git revert
* Undoes a committed snapshot. 
* When you discover a faulty commit, 
  * reverting is a safe and easy way 
    * to completely remove it from the code base.

### git status
* Displays the state of the working directory and the staged snapshot. 
* You’ll want to run this in conjunction 
  * with git add and git commit 
  * to see exactly what’s being included in the next snapshot.

## Git Terminology
### Branch
* A branch represents an independent line of development. 
* Branches serve as an abstraction for the edit/stage/commit process discussed in Git Basics.
* You can think of them as a way 
  * to request a brand new working directory, staging area, and project history. 
* New commits are recorded in the history for the current branch, 
  * which results in a fork in the history of the project.

### Centralized workflow
* If your developers are already comfortable with Subversion, 
  * the Centralized Workflow lets you experience the benefits of Git 
    * without having to adapt to an entirely new process. 
* It also serves as a friendly transition into more Git-oriented workflows.

### Feature branch workflow
* The Feature Branch Workflow builds on the Centralized Workflow 
  * by encapsulating new features into dedicated branches. 
* This enables the use of pull requests as a means to discuss changes 
  * before they’re integrated into the official project.

### Forking
* Instead of using a single server-side repository to act as the “central” codebase, 
  * forking gives every developer a server-side repository. 
* This means that each contributor has not one, 
  * but two Git repositories: 
    * a private local one and a public server-side one.

### Gitflow workflow
* The Gitflow Workflow streamlines the release cycle by using isolated branches 
  * for feature development, release preparation, and maintenance. 
* Its strict branching model also lends some much needed structure to larger projects.

### HEAD
* Git’s way of referring to the current snapshot. 
* Internally, the git checkout command simply updates the HEAD to point to either the specified branch or commit. 
* When it points to a branch, 
  * Git doesn't complain, 
  * but when you check out a commit, 
  * it switches into a “detached HEAD” state.

### Hook
* A script that runs automatically every time a particular event occurs in a Git repository. 
* Hooks let you customize Git’s internal behavior and trigger customizable actions at key points in the development life cycle.

### Main
* The default development branch. 
* Whenever you create a git repository, 
  * a branch named "main" is created, and becomes the active branch.

### Pull request
* Pull requests are a feature 
  * that makes it easier for developers to collaborate using Bitbucket. 
* They provide a user-friendly web interface 
  * for discussing proposed changes before integrating them into the official project.

### Repository
* A collection of commits, and branches and tags to identify commits.

### Tag
* A reference typically used to mark a particular point in the commit chain. 
* In contrast to a head, 
  *  a tag is not updated by the commit command.

### Version control
* A system that records changes 
  * to a file or set of files over time so that 
  * you can recall specific versions later.

### Working tree
* The tree of actual checked out files, 
  * normally containing the contents of the HEAD commit's tree and 
  * any local changes you've made but haven't yet committed.

# Beginner concept for git

## What is version control?
* Version control, 
  * also known as source control, 
  * is the practice of tracking and managing changes to software code. 
* Version control systems are software tools 
  * that help software teams manage changes to source code over time. 
* As development environments have accelerated, 
  * version control systems help software teams work faster and smarter. 
* They are especially useful for DevOps teams 
  * since they help them to 
    * reduce development time and 
    * increase successful deployments.
* Version control software keeps track of every modification to the code in a special kind of database. 
* If a mistake is made, 
  * developers can turn back the clock and 
  * compare earlier versions of the code to help fix the mistake 
    * while minimizing disruption to all team members.

## Source code management
* Source code management (SCM) is used to track modifications to a source code repository. SCM tracks a running history of changes to a code base and helps resolve conflicts when merging updates from multiple contributors. SCM is also synonymous with Version control. 
* As software projects grow in lines of code and contributor head count, the costs of communication overhead and management complexity also grow. SCM is a critical tool to alleviate the organizational strain of growing development costs.

### Source code management best practices
* Commit often
* Ensure you're working from latest version
* Make detailed notes
* Review changes before committing
* Use Branches
* Agree on a Workflow

## Git for Windows stand-alone installer
1. Download the latest Git for Windows installer.
2. When you've successfully started the installer, 
   * you should see the Git Setup wizard screen. 
   * Follow the Next and Finish prompts to complete the installation. 
   * The default options are pretty sensible for most users.
3. **Open a Command Prompt** (or Git Bash if during installation you elected not to use Git from the Windows Command Prompt).
4. Run the following commands to configure your Git username and email using the following commands, replacing Emma's name with your own. 
   * These details will be associated with any commits that you create:
     * `$ git config --global user.name "Emma Paris"`
     * `$ git config --global user.email "eparis@gmail.com"`
5. **Optional: Install the Git credential helper on Windows**
   * Bitbucket supports pushing and pulling over HTTP to your remote Git repositories on Bitbucket. 
   * Every time you interact with the remote repository, 
     * you must supply a username/password combination. 
   * You can store these credentials, 
     * instead of supplying the combination every time, 
     * with the Git Credential Manager for Windows.

## Git for Mac Installer
1. Download the latest Git for Mac installer.
2. Follow the prompts to install Git.
3. Open a terminal and verify the installation was successful by typing 
   * `git --version`:
4. Configure your Git username and email using the following commands, replacing Emma's name with your own. 
   * These details will be associated with any commits that you create:
     * `$ git config --global user.name "Emma Paris"`
     * `$ git config --global user.email "eparis@atlassian.com"`
5. **(Optional)** 
   * To make Git remember your username and password when working with HTTPS repositories,
     * configure the git-credential-osxkeychain helper.




## What is a Git SSH Key?
* An SSH key is an access credential for the SSH (secure shell) network protocol. 
* This authenticated and encrypted secure network protocol is used 
  * for remote communication between machines on an unsecured open network. 
* SSH is used for 
  * remote file transfer, 
  * network management, and 
  * remote operating system access. 
* The SSH acronym is also used to 
  * describe a set of tools used 
    * to interact with the SSH protocol.
* SSH uses a pair of keys 
  * to initiate a secure handshake between remote parties. 
* The key pair contains a public and private key. 
* The private vs public nomenclature can be confusing as 
  * they are both called keys. 
* It is more helpful to think of the 
  * public key as a "lock" and 
  * the private key as the "key". 
* You give the public 'lock' 
  * to remote parties to encrypt or 'lock' data. 
* This data is then opened with the 'private' key 
  * which you hold in a secure place.

### How to create an SSH Key
SSH keys are generated through a public key cryptographic algorithm, the most common being RSA or DSA. At a very high level SSH keys are generated through a mathematical formula that takes 2 prime numbers and a random seed variable to output the public and private key. This is a one-way formula that ensures the public key can be derived from the private key but the private key cannot be derived from the public key.

SSH keys are created using a key generation tool. The SSH command line tool suite includes a keygen tool. Most git hosting providers offer guides on how to create an SSH Key.

### Generate an SSH Key on Mac and Linux
Both OsX and Linux operating systems have comprehensive modern terminal applications that ship with the SSH suite installed. The process for creating an SSH key is the same between them.

1. execute the following to begin the key creation

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
Git logo
RELATED MATERIAL
Git cheat sheet
Check it out
Bitbucket logo
SEE SOLUTION
Learn Git with Bitbucket Cloud
Read tutorial
This command will create a new SSH key using the email as a label

2. You will then be prompted to "Enter a file in which to save the key."
You can specify a file location or press “Enter” to accept the default file location.

> Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
3. The next prompt will ask for a secure passphrase. A passphrase will add an additional layer of security to the SSH and will be required anytime the SSH key is used. If someone gains access to the computer that private keys are stored on, they could also gain access to any system that uses that key. Adding a passphrase to keys will prevent this scenario.

> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
At this point, a new SSH key will have been generated at the previously specified file path.

4. Add the new SSH key to the ssh-agent

The ssh-agent is another program that is part of the SSH toolsuite. The ssh-agent is responsible for holding private keys. Think of it like a keychain. In addition to holding private keys it also brokers requests to sign SSH requests with the private keys so that private keys are never passed around unsecurly.

Before adding the new SSH key to the ssh-agent first ensure the ssh-agent is running by executing:

$ eval "$(ssh-agent -s)"
> Agent pid 59566
Once the ssh-agent is running the following command will add the new SSH key to the local SSH agent.

ssh-add -K /Users/you/.ssh/id_rsa
The new SSH key is now registered and ready to use!

### Generate an SSH Key on Windows
Windows environments do not have a standard default unix shell. External shell programs will need to be installed for to have a complete keygen experience. The most straight forward option is to utilize Git Bash. Once Git Bash is installed the same steps for Linux and Mac can be followed within the Git Bash shell.

# Git Cheat code
## Setting up a repository
### Initializing a new repository: git init
* You'll first cd to the root project folder and then execute the git init command.
  * `cd /path/to/your/existing/code` 
  * `git init`
* Pointing git init to an existing project directory will execute the same initialization setup as mentioned above
  * `git init <project directory>`
### Cloning an existing repository: git clone