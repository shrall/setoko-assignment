# Setoko | Frontend Engineer Test

## Introduction

This is a React application built with Next.js that integrates with the GitHub API. Users can search for up to 5 GitHub users with a username similar to the value entered in the text input. Upon selecting a user, the application displays the repositories for the chosen GitHub user.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shrall/setoko-assignment.git
   ```
2. Navigate to the project directory:
   ```bash
    cd setoko-assignment
   ```
3. Install dependencies:
   ```bash
    npm install
   ```
4. Run the application:
   ```bash
    npm run dev
   ```
5. Navigate to http://localhost:3000/ in your browser to view the application.

## Configuration

1. Create a .env file in the root of the project directory.
2. Add the following environment variables to the .env file:
   ```bash
    NEXT_PUBLIC_GITHUB_TOKEN=<your-github-token>
   ```
3. Replace <your-github-token> with your GitHub token.

## Usage

1. Enter a GitHub username in the search input.
2. Select a user from the search results.
3. View the repositories for the selected user.

## Deployment

The application is deployed to Vercel and can be accessed at https://setoko-assignment.vercel.app/
