# Overview

This is a full-stack web application for GMPG International, a company specializing in the export of GMP-compliant medical-grade cannabis from Sudan to international markets. The application serves as a corporate website with contact functionality, built using a modern React frontend and Express.js backend architecture.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: Shadcn/ui components built on top of Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submissions
- **Validation**: Zod schemas for runtime type checking and validation
- **Storage**: In-memory storage implementation with interface-based design for easy database integration
- **Middleware**: Custom logging middleware for API request tracking

## Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Shared schema definitions between frontend and backend using Drizzle Zod integration
- **Database**: PostgreSQL (configured via Neon serverless driver) with migration support
- **Current Storage**: Temporary in-memory storage (MemStorage class) for development, designed to be easily replaced with database implementation

## Component Architecture
- **Design System**: Modular component structure with reusable UI components
- **Layout**: Section-based page layout (Header, Hero, About, Services, Contact, Footer)
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive behavior
- **Accessibility**: Built-in accessibility features through Radix UI components

## Development Workflow
- **Build System**: Vite for development server and production builds
- **Type Checking**: Full TypeScript coverage with strict type checking
- **Code Organization**: Monorepo structure with shared types and schemas
- **Path Aliases**: Configured path mapping for clean imports (@/, @shared/, etc.)

# External Dependencies

## UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Backend Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle Kit**: Database migration and introspection tooling

## Development Tools
- **Vite**: Build tool with HMR and optimized production builds
- **TanStack Query**: Data fetching and caching library
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for runtime type safety

## Deployment Platform
- **Replit**: Development and hosting platform with integrated tooling
- **PostCSS**: CSS processing with Autoprefixer for vendor prefixes

The application follows a clean architecture pattern with clear separation between presentation, business logic, and data layers, making it maintainable and scalable for future enhancements.