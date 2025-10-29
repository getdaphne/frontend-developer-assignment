# Daphne Frontend Engineering Assignment

Thank you for applying for a frontend engineering position at Daphne! This assignment is designed to assess your frontend development skills, architectural decisions, and attention to detail. The assignment should take 3-4 hours to complete.

## Overview

Build a production-ready email recipient management system with an intuitive interface, proper state management, and comprehensive testing. This assignment evaluates your ability to create scalable, maintainable React applications.

## Requirements

Implement a React application that manages email recipients with the following features:

### Core Features

1. **Available Recipients List**
   - Display all available recipients from `recipientsData.json`
   - Support both individual emails and company domains
   - Group emails by domain automatically

2. **Smart Autocomplete**
   - Search recipients by company name or email address
   - Intelligent filtering with debounced input
   - Support adding new valid email addresses on-the-fly
   - Email validation with clear error states

3. **Selected Recipients Management**
   - Display selected recipients grouped by domain
   - Expandable/collapsible domain groups
   - Show member count for each domain
   - Individual and bulk removal options

4. **Domain Selection**
   - Selecting a domain adds all associated emails
   - Visual indication of partially vs fully selected domains
   - Smart deduplication

### Technical Requirements

- **Framework**: React 18.3+ with TypeScript
- **Styling**: TailwindCSS + shadcn/ui components (already configured)
- **State Management**: Choose and justify your approach (Context, Zustand, Jotai, etc.)
- **Build Tool**: Vite (already configured)
- **Testing**: Vitest + React Testing Library
  - Minimum 70% code coverage
  - Test critical user flows
  - Include edge cases

### Code Quality Expectations

- TypeScript strict mode (already enabled)
- Proper type safety throughout
- Clean component architecture
- Custom hooks for reusable logic
- Proper error handling
- Accessibility (ARIA labels, keyboard navigation)
- Performance optimizations (memoization, virtualization if needed)

### Deliverables

1. Working application with all features implemented
2. At least 3 meaningful unit tests
3. Brief documentation of:
   - Architecture decisions
   - State management approach
   - Potential improvements given more time

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Type check
npm run typecheck

# Lint
npm run lint

# Build for production
npm run build
```

## Evaluation Criteria

- **Code Quality** (30%): Clean, maintainable, well-structured code
- **TypeScript Usage** (20%): Proper typing, no `any`, effective use of generics
- **User Experience** (20%): Intuitive interface, smooth interactions, edge cases handled
- **Testing** (15%): Meaningful tests, good coverage
- **Performance** (10%): Optimized renders, efficient algorithms
- **Accessibility** (5%): Keyboard navigation, screen reader support

## Submission

1. Fork this repository
2. Complete the assignment
3. Ensure all tests pass and type check succeeds
4. Include a brief README section with your architectural decisions
5. Send us the repository URL

## Notes

- The wireframe (`src/assets/wireframe.png`) is a reference - feel free to improve the UX
- Focus on code quality over pixel perfection
- Use the provided shadcn/ui components and build additional ones as needed
- Feel free to add additional libraries if they significantly improve the solution (document why)

Good luck! We're excited to see your solution.