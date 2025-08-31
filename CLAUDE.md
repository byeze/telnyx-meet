# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Telnyx Meet video conferencing application built with Next.js 12, React 17, TypeScript, and Grommet UI. It uses Telnyx Video SDK for real-time video communication and supports features like screen sharing, chat, participant management, and virtual backgrounds.

## Development Commands

- `yarn install` - Install dependencies
- `yarn dev` - Start development server (localhost:3000)
- `yarn build` - Build for production
- `yarn build:pwa` - Build PWA version for production
- `yarn lint` - Run ESLint with max warnings = 0
- `yarn start` - Start production server

## Environment Setup

Copy `.env.sample` to `.env.local` and configure:
- `TELNYX_API_KEY` - Required Telnyx API key for room management
- `TELNYX_API_HOST` - API endpoint (defaults to https://api.telnyx.com/v2)
- `NEXT_PUBLIC_BUGSNAG_API_KEY` - Optional error tracking
- `HOSTNAME` - Required for Bugsnag source map uploads

## Architecture

### Core Structure
- **Pages**: Next.js pages in `/pages` including room joining (`/rooms`) and individual room views (`/rooms/[roomId]`)
- **Components**: Reusable UI components in `/components` with main room functionality in `Room.tsx`
- **Hooks**: Custom hooks in `/hooks`, primarily `useRoom()` for video session management
- **Contexts**: React contexts for global state management (TelnyxMeetContext, DebugContext)
- **Utils**: Utility functions including virtual background processing and user media handling

### Video Architecture
- Uses `@telnyx/video` SDK for WebRTC communication
- Custom `useRoom` hook manages room connection lifecycle, participant events, and stream management
- Supports multiple stream types: camera (`self`), screen sharing (`presentation`), and audio tracks
- Implements auto-reconnection on network errors
- Network metrics monitoring with optional reporting

### Key Features
- Virtual background support with customizable backgrounds
- Chat messaging system with participant targeting
- Dynamic layout switching (grid vs presentation mode)
- Participant management with kick/mute capabilities
- WebRTC statistics monitoring and reporting
- Audio/video device selection and management
- Screen sharing with presenter detection

### State Management
- `TelnyxMeetContext` provides global state for device settings, network metrics, notifications, and feature flags
- Room state managed through Telnyx SDK with local React state for UI-specific concerns
- Messages and participant activity tracked separately from SDK state

### API Routes
Located in `/pages/api/`:
- `client_token.ts` - Generate client tokens for room access
- `refresh_client_token.ts` - Refresh expired tokens
- `dial_out.ts` - Initiate phone calls to join rooms
- `rooms/` - Room management endpoints

### Testing & Quality
- ESLint configuration with strict warnings (max-warnings=0)
- TypeScript with strict mode enabled
- CI pipeline runs lint and build checks on pull requests
- Bugsnag integration for error tracking and source map support

## Important Implementation Notes

- The app uses absolute imports configured via TypeScript baseUrl
- Grommet UI library provides the design system
- FontAwesome icons are configured with manual CSS import
- PWA capabilities with manifest.json and service worker support
- Dynamic imports used for performance optimization (ReportIssueModal)
- WebRTC adapter ensures cross-browser compatibility