## First of all you need to install Node.js on your local machine!

## Run the development server
```bash
npm i
npm run dev
```

## Run the production server
```bash
cd /home/frontend
npm i
npm run build
npm run start
```

## Pages files
Static site pages - about, contact and policy are located in these directory:

    PROJECT_DIRECTORY/src/components/screens/staticPages

## Styles for the static pages
First of all, in Next.js you need to use css modules to locate styles at certain pages.
CSS modules for this pages you can see in these directory:

    PROJECT_DIRECTORY/staticPages/styles

Files has the same names as the pages. To use it write your css classes through using styles variable.
For example if you have .Content CSS class you need to write className={styles.Content} in tag that you want to style.

## Translation
Example of language translation is in those page files - about.tsx, contact.tsx, policy.tsx
Translation files is located in subdirectories for each language in these directory:

    PROJECT_DIRECTORY/public/locales

"en" for english translation for example.
You need to edit only .json files with the same name as the page files has.
Using translation in details you can see in pages files. Read comments there.

## GitHub
Clone repo

    git clone {full URL of you repository without branch}

If you already have repository on your local machine, then pull it from git repo if it was some changes in git repo before 

    git pull

To push local repo to github write those commands in terminal from project root folder

    git add .
    git commit -m "{here is your commit}"
    git branch -m main
    git remote remove origin
    git remote add origin {put here URL of you git repo}
    git push -u origin main


## Docker
Refresh (stop and remove current container)

    docker stop frontend
    docker rm frontend

Build another container (with the same image)

    docker-compose build

Then run new container

    docker-compose up