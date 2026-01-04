# CardioPredict - Cardiovascular Risk Assessment Platform

A production-grade Next.js application for AI-powered cardiovascular disease risk prediction with advanced UI/UX, form validation, and real-time analysis.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Multi-Step Form**: Intuitive step-by-step data collection
- **Form Validation**: Zod schema validation with react-hook-form
- **Real-time Results**: Instant AI-powered risk assessment
- **Risk Stratification**: Detailed risk levels with personalized recommendations
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Reusable shadcn/ui components
- **Error Handling**: Comprehensive error states and user feedback
- **Print Support**: Save results functionality

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Running FastAPI backend (from your provided code)

## 🛠️ Installation

### 1. Clone or Create Project

```bash
mkdir cardio-predict-frontend
cd cardio-predict-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
cardio-predict-frontend/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Homepage
│   ├── prediction/              # Prediction assessment page
│   │   └── page.tsx
│   └── globals.css              # Global styles and Tailwind
├── components/
│   ├── ui/                      # Reusable UI components (shadcn)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── progress.tsx
│   │   ├── alert.tsx
│   │   └── badge.tsx
│   ├── prediction/              # Prediction-specific components
│   │   ├── PredictionForm.tsx   # Multi-step form with validation
│   │   ├── PredictionResult.tsx # Results display with recommendations
│   │   └── FormSteps.tsx        # Step indicator component
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── home/                    # Homepage components
│       ├── Hero.tsx
│       └── Features.tsx
├── lib/                         # Utilities and services
│   ├── api.ts                   # API client and functions
│   ├── utils.ts                 # Helper functions
│   └── validations.ts           # Zod validation schemas
├── types/                       # TypeScript type definitions
│   └── prediction.ts
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── .env.local
```

## 🔧 Configuration Files

### package.json Dependencies

Key dependencies:
- **next**: Framework
- **react**, **react-dom**: UI library
- **react-hook-form**: Form management
- **@hookform/resolvers**: Form validation
- **zod**: Schema validation
- **tailwindcss**: Styling
- **lucide-react**: Icons
- **clsx**, **tailwind-merge**: Utility classes

### API Integration

The application connects to your FastAPI backend via the API client in `lib/api.ts`:

```typescript
// Prediction endpoint
POST /predict

// Request body matches your FastAPI schema:
{
  gender: number,
  height: number,
  weight: number,
  ap_hi: number,
  ap_lo: number,
  cholesterol: number,
  gluc: number,
  smoke: number,
  alco: number,
  active: number,
  age_years: number,
  bmi: number
}
```

## 📱 Pages

### 1. Homepage (`/`)
- Hero section with CTA
- Feature highlights
- Medical disclaimer
- Responsive design

### 2. Assessment Page (`/prediction`)
- Multi-step form (4 steps):
  1. Personal Information
  2. Vital Signs
  3. Health Markers
  4. Lifestyle Factors
- Real-time validation
- Progress indicator
- Results display with:
  - Risk level classification
  - Probability percentage
  - Visual indicators
  - Personalized recommendations
  - Print/save functionality

## 🎨 UI Components

### Form Components
- Custom input fields with validation
- Select dropdowns
- Labels with proper accessibility
- Error messages

### Display Components
- Cards for content organization
- Badges for status indicators
- Progress bars for risk visualization
- Alerts for important information

### Layout Components
- Sticky header with navigation
- Footer with links
- Responsive grid system

## 🔒 Form Validation

Comprehensive validation using Zod:
- Age: 18-120 years
- Height: 100-250 cm
- Weight: 30-300 kg
- Blood Pressure: Systolic (80-250), Diastolic (40-150)
- Required fields enforcement
- Real-time error feedback

## 🎯 Risk Assessment Logic

Risk levels based on prediction probability:
- **Low Risk** (< 25%): Green indicators, maintenance recommendations
- **Moderate Risk** (25-50%): Yellow indicators, lifestyle modifications
- **High Risk** (50-75%): Orange indicators, medical consultation suggested
- **Very High Risk** (≥ 75%): Red indicators, immediate medical attention

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables for Production

Update `.env.local` or set environment variables:

```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

### Deployment Platforms

Compatible with:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Docker containers
- Any Node.js hosting

## 🧪 Development

### Running Backend

Ensure your FastAPI backend is running:

```bash
# In your backend directory
uvicorn app:app --reload
```

### Development Mode

```bash
npm run dev
```

Access the application at `http://localhost:3000`

## 📝 Key Features Implementation

### 1. Type Safety
- Full TypeScript implementation
- Strict type checking
- Interface definitions for all data structures

### 2. Form Management
- react-hook-form for performance
- Zod for schema validation
- Multi-step form with state management

### 3. Error Handling
- API error handling
- Form validation errors
- User-friendly error messages
- Loading states

### 4. Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions

### 5. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## 🔍 Code Quality

- **ESLint**: Configured for Next.js
- **TypeScript**: Strict mode enabled
- **Component Structure**: Modular and reusable
- **State Management**: React hooks
- **API Layer**: Abstracted in service files

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

## ⚠️ Important Notes

1. **Medical Disclaimer**: This is a screening tool, not a diagnostic tool
2. **API Connection**: Ensure backend is running before testing
3. **CORS**: Backend must allow requests from frontend origin
4. **Data Privacy**: No data is stored permanently by default
5. **Production**: Update API URL for production deployment

## 🤝 Contributing

1. Follow TypeScript best practices
2. Maintain component modularity
3. Add proper error handling
4. Write descriptive commit messages
5. Test across different devices

## 📄 License

This project is for educational and demonstration purposes.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**