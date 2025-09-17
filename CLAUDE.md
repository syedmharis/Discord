# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Native Discord-like chat application built with Expo, using AWS Amplify for backend services and Stream Chat for real-time messaging functionality.

## Development Commands

### Starting the Application
- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser

### Testing
- `npm test` - Run Jest tests with watch mode

### Other Commands
- `npm run eject` - Eject from Expo (not recommended unless necessary)

## Architecture

### Core Technologies
- **Frontend**: React Native with Expo
- **Backend**: AWS Amplify (Auth, API, Functions)
- **Chat**: Stream Chat SDK for real-time messaging
- **Navigation**: React Navigation v6 with drawer navigation
- **State Management**: React Context for authentication state

### Key Components Structure

#### Authentication Flow
- Uses AWS Amplify authentication with `withAuthenticator` HOC
- `AuthContext` (`src/contexts/AuthContext.tsx`) manages user state and Stream Chat connection
- Automatic Stream Chat token generation via AWS Lambda function (`amplify/backend/function/getStreamToken/`)

#### Navigation Architecture
- Main entry point: `src/navigation/index.tsx`
- Drawer navigation: `src/navigation/DrawerNavigator.tsx`
- Channel-specific navigation: `src/navigation/ChannelStack.tsx`
- Uses conditional rendering based on authentication state

#### Screen Components
- `ChannelScreen` - Main chat interface using Stream Chat components
- `UserListScreen` - Display and manage users
- `NewChannelScreen` - Create new chat channels
- `InviteMembersScreen` - Add members to channels
- `ChannelMembersScreen` - View channel membership

#### AWS Amplify Integration
- GraphQL API defined in `amplify/backend/api/discord/schema.graphql`
- Single query: `getStreamToken` for Stream Chat authentication
- Lambda function handles Stream Chat token generation using server-side SDK

### Important File Locations
- Main app entry: `App.tsx`
- AWS exports: `src/aws-exports.js` (auto-generated, not in git)
- Stream Chat configuration: Stream API key hardcoded in `App.tsx`
- GraphQL queries: `src/graphql/queries.js`

### Development Notes
- Uses TypeScript with strict configuration
- Stream Chat theme customization in `src/constants/Colors.ts`
- Expo SDK ~44.0.0 (older version - consider upgrading for new features)
- Metro bundler configuration in `metro.config.js`

### AWS Amplify Backend
- Authentication configured for email/password
- GraphQL API with custom resolver for Stream token generation
- Lambda function with Stream Chat server SDK dependency
- Environment variables managed through Amplify CLI