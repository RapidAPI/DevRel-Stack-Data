# DevRel Stack Data

This repository will contain all the assets for the DevRel-Stack repository.

## Contributing

### Clone the repository

You can clone the repository by typing the following command in your terminal:

```sh
git clone git@github.com:RapidAPI/DevRel-Stack-Data.git
```

### Generate the templates

Use the [FrontMatter](https://frontmatter.codes/) VS Code extension to generate templates.

### Writing guidelines

-   Link to **RapidAPI.com/hub** instead of **RapidAPI.com**.
-   When you are linking to RapidAPI Hub, use the following UTM parameters :

    ```md
    ?utm_source=<APP_NAME>.RapidAPI.com&utm_medium=DevRel&utm_campaign=DevRel
    ```

    For example, when you are adding a link from our Guides, you would use the following in the markdown file:

    ```md
    [RapidAPI Hub](https://RapidAPI.com/hub?utm_source=RapidAPI.com/guides&utm_medium=DevRel&utm_campaign=DevRel)
    ```

### Before committing

Install all the necessary dependencies which run [Prettier](https://prettier.io/) and automatically adds slugs for the new posts. You can install the dependencies by running the following command from the root:

```bash
npm install
```

### Writing Commit messages

Use the [Emoji Log](https://github.com/ahmadawais/Emoji-Log) convention for writing new commit messages.

### Creating a Pull Request

Once you are done with your changes, create a Pull Request against the [production](https://github.com/RapidAPI/DevRel-Stack-Data/tree/production) branch of this repository for us to review your content.
