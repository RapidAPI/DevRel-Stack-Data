---
title: Automate API Testing with RapidAPI Testing GitHub Action
description: API development and testing go side by side. The RapidAPI GitHub Action allows you to automate API testing, ensuring high test coverage and easy maintenance.
publishedDate: 2022-02-03T19:10:30.765Z
lastModifiedDate: 2022-02-03T19:10:30.765Z
authors:
    - ahmadBilal
categories:
    - rapidapi
tags:
    - api
    - testing
    - github
    - action
coverImage: ''
---

<Lead>

API development and testing go side by side. A solid, automated testing workflow The RapidAPI GitHub Action allows you to automate API testing, ensuring high test coverage and easy maintenance.

</Lead>

## RapidAPI Testing

[RapidAPI Testing](https://RapidAPIapi.com/testing/dashboard?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) is a powerful, easy-to-use API Testing tool that allows you to build complex, automated tests using an intuitive drag-and-drop UI. Moreover, it gives you granular control over these tests, and these tests can run across any of the global data centers. Here is what it looks like:

![RapidAPI Testing Platform](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/rapidapi-github-action/images/example.png)

## GitHub Actions

As you probably know, GitHub Actions is a robust CI/CD tool that allows developers to create automated workflows directly from your GitHub repository. You can easily set up events like a commit or a pull request to trigger these workflows.

We can supercharge RapidAPI Testing by combining it with the action to create a seamless testing process. With the RapidAPI action, you can include comprehensive tests built with RapidAPI Testing in your automated CI/CD pipeline managed through the simplicity of GitHub Actions.

## Usage

Let's see how you can integrate this GitHub Action in your Rapid API Testing workflow.

### → STEP #1

Sign up for a free account at [RapidAPI Testing](https://RapidAPI.com/testing/dashboard?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) if you haven't already. We will assume that you have already created tests for your API. If that is not the case, you can follow [this easy guide](https://RapidAPI.com/blog/how-to-test-api-endpoints?utm_source=RapidAPI.com%2Fguides&utm_medium=DevRel&utm_campaign=DevRel) to create them.

### → STEP #2

Every test you create in RapidAPI Testing comes with its own unique identifier called `Test ID`. We need this `Test ID` for the GitHub Action, so go to your test's **Settings** tab and copy this ID.

![Test ID of a Test](https://raw.githubusercontent.com/RapidAPI/DevRel-Stack-Data/production/guides/posts/rapidapi-github-action/images/id.png)

### → STEP #3

Finally, it is time to specify the GitHub Action. Head over to the [RapidAPI Testing Action](https://github.com/marketplace/actions/rapidapi-testing-trigger) on GitHub Actions Marketplace, where you will find its complete documentation. You can click the **Use Latest Version** button to start using it.

GitHub Actions are specified using YAML files, and a complete example of this file is already provided in the action's documentation which looks like this:

```yaml
on: [push]

jobs:
    run_api_test:
        runs-on: ubuntu-latest
        name: Execute RapidAPI API Tests
        steps:
            - name: Execute Tests
              id: tstExec
              uses: RapidAPI/gh-api-testing-trigger@v0.0.3
              with:
                  test: 'YOUR_TEST_ID'
                  location: 'AWS-US-WEST-2'
                  environment: 'ENV_ID(OPTIONAL)'
            - name: Show Results
              run: echo "The test took ${{ steps.tstExec.outputs.time }}ms to run"; echo "The test result was ${{ steps.tstExec.outputs.computedStatus }}"; echo "View Report - ${{ steps.tstExec.outputs.reportUrl }}"
```

As you can see, the action will be triggered by a push and will run on ubuntu. Here are some parameters you will have to specify:

-   **Test (required)**: This is the Test ID of the test you wish to execute. It is the same ID as what we copied in Step 2. If you wish to store your Test IDs more securely, you can leverage GitHub’s Encrypted Secrets and use the secrets to access them here.

-   **Location (required)**: This is the location where RapidAPI Testing will execute the test. The options are below.

    -   AWS-US-EAST-1: N. Virginia
    -   AWS-US-WEST-2: Oregon
    -   AWS-AP-EAST-1: Hong Kong
    -   AWS-AP-SOUTH-1: Mumbai
    -   AWS-AP-SOUTHEAST-1: Singapore
    -   AWS-AP-NORTHEAST-1: Tokyo
    -   AWS-EU-CENTRAL-1: Frankfurt
    -   AWS-EU-WEST-3: Paris
    -   AWS-SA-EAST-1: São Paulo

-   **Environment ID (optional)**: You can include this if you wish to execute the tests in a specific environment. You can find the environment ID on the same page as the Test ID. If you do not wish to specify the environment, you can leave this field blank.

That is all; your automated API testing workflow is ready to go.
