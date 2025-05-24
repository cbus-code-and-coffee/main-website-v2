# Columbus Code & Coffee Main Website

This repo houses the next iteration of [Columbus Code & Coffee's website](https://cbuscodeandcoffee.com/).

## Getting Started

Yarn is needed for development. You can download it using
`npm install --global yarn`

Install dependencies using
`yarn install`

Spin up the frontend with
`yarn dev`

## Working on Issues

Design specifications come from [this](https://www.figma.com/design/Mk9tKqHnybGx6klCCuY8g7/Revision%2C-Main-Website-v2?node-id=0-1&t=qYm28o9oRsfN1BCz-1) Figma document. Ping [Noel](mailto:noelcastillon1@gmail.com) if you need access to the file.

Branches are created based on issues defined in the GitHub repo. Branch names should follow the naming convention of `issue-category/issue#/brief-description` e.g., `feat/21/add-footer`

Commits follow the ["conventional commits" naming convention](https://www.conventionalcommits.org/en/v1.0.0/) of `category: short description` e.g. `bug: div not centered`. Please use present verb tense when forming your commit message.

Before pushing your changes, remember to lint your work by running `yarn lint`

If you're making changes that require access to the db, you'll need to make a copy of `example.env`, rename it to `.env`, and you'll need to change the value to the correct firebase API key. Reach out to Noel if this is necessary for your PR.

## Technologies Used

**General Tools**

- [Typescript](https://www.typescriptlang.org/) - scripting language
- [Yarn](https://yarnpkg.com/) - package manager
- [Jest](https://jestjs.io/) - unit test framework

**Frontend Tools**

- [React.js](https://reactjs.org/) - UI framework
- [Tailwind.css](https://tailwindcss.com/) - CSS framework

Thanks for helping to grow a grassroots community of developers! <3
