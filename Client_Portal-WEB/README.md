# Contents

- Board: https://dev.azure.com/Prime-Solutions/New%20Client%20Portal/_boards/board/t/New%20Client%20Portal%20Team/Backlog%20items
- Develop environment: https://red-glacier-0556e9103.2.azurestaticapps.net
- Develop swagger: https://client-portal-qa.azurewebsites.net/swagger
- User for login: **email: `admin@primeit.pt`, password: `Admin123456`**

# Project description

The main objective of this project is to digitize the entire recruitment process that takes place between clients, business managers, and account owners.

While, until now, the entire process of recruiting new candidates has mostly been carried out by sending emails, the objective of this platform is to concentrate all the information in a single space, in order to monitor all stages of recruitment: from suggesting candidates to scheduling interviews and final decision on whether or not to employ a consultant.

It will also have integrated a notification system, to remind all participants of their tasks, as well as inform them of new updates that may have occurred.

# Getting started

## Via Docker (preferable)

1. Install [Node.js](https://nodejs.org/en).
2. Install [Docker](https://www.docker.com/).
3. To setup docker container with all environment run:

```
npm run setup
```

4. To run app run:

```
npm run start
```

5. Application will be available on `http://localhost/`

## Via NPM

1. To set up project run `npm i` (use `sudo npm i` if u have permissions issue with husky).
2. Create new `.env` file (for development it should be `.env.development`).
3. Run project with `npm run dev`.

# Contributing

## Branching

It's important to create new branch for each task. Branch should follow next pattern: `feature/CP-<ticket_number>` or `bug/CP-<ticket_number>`.

**For example: `feature/CP-1234` or `bug/CP-1234`.**

New branch should be created from the `develop` branch and it's important to always sync with `develop` via rebase.

## Commit

All commits should follow next pattern: `CP-<ticket_number>: <description>`. Description should describe what was done in this commit.

**For example: `CP-1234: Implemented Table component`.**

## Pull Request

After task is completed developer should create Pull Request (PR). All necessary reviewers will be added automatically. PR should be create into `develop` branch. If u want to set `autocomplete` Azure feature, please be sure u selected `squash commit` options and set message following pattern the same as commit message but `<description>` should describe what was done in the whole PR.

> **For example:**
>
> - Commit 1: `CP-1234: Added Header`
> - Commit 2: `CP-1234: Added nav bar`
> - Commit 3: `CP-1234: Change navigation buttons`
>
> After squash commit it should be like:
>
> `CP-1234: Added header with navigation bar`

```

```
