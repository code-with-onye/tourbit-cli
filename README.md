# Tourbit


Many applications struggle with effective user onboarding and feature discovery. Static tutorials or extensive documentation often fail to engage users, leading to poor feature adoption.

Tourbit is a customizable, interactive guide designed to introduce users to key features of your web application. 
Built with React and TypeScript, it creates an engaging onboarding experience by guiding users through your app's functionality step-by-step.

![tourbit display](https://github.com/user-attachments/assets/e81f074e-f519-4ca6-8851-599e696f9302)


- Providing an interactive, guided tour of your application's key features
- Highlighting specific elements on the page to draw user attention
- Offering a step-by-step approach that doesn't overwhelm users
- Allowing users to explore the application while learning about its features

## Features

1. **Interactive Popup**: A sleek, animated popup that moves through your webpage, explaining features.
2. **Progress Tracking**: Shows users their current position in the tour (e.g., "Step 2 of 5").
3. **Customizable Styles**: Easy styling customization to match your application's design.
4. **Keyboard Navigation**: Supports navigation using arrow keys and closing with the Escape key.
5. **Element Highlighting**: Draws attention to the current feature with an overlay effect.
6. **Responsive Positioning**: Adjusts the popup's position to ensure visibility on all screen sizes.
7. **Progress Persistence**: Saves the user's progress, allowing them to resume the tour later.
8. **Accessibility**: Designed with accessibility in mind, ensuring all users can benefit from the tour.

## Use Case Example

Here's how you can implement tourbit in a React application:

```shell
  npx tourbit init
```

```tsx
import React, { useState } from "react";
import FeatureTour from "./FeatureTour";

const App: React.FC = () => {
  const [showTour, setShowTour] = useState(true);

  const tourSteps = [
    {
      selector: "#dashboard",
      title: "Dashboard Overview",
      content:
        "Welcome to your personalized dashboard. Here you can see all your key metrics at a glance.",
    },
    {
      selector: "#data-visualization",
      title: "Data Visualization",
      content:
        "This chart shows your performance trends over time. Click on any data point for more details.",
    },
    {
      selector: "#quick-actions",
      title: "Quick Actions",
      content:
        "Use these buttons to quickly add new entries, generate reports, or adjust your settings.",
    },
  ];

  return (
    <div>
      <header>My Awesome App</header>
      <main>
        <section id="dashboard">{/* Dashboard content */}</section>
        <section id="data-visualization">
          {/* Data visualization content */}
        </section>
        <section id="quick-actions">{/* Quick action buttons */}</section>
      </main>
      {showTour && (
        <FeatureTour
          steps={tourSteps}
          onComplete={() => setShowTour(false)}
          customStyles={{ backgroundColor: "#f0f4f8" }}
          persistKey="my-app-onboarding-tour"
        />
      )}
    </div>
  );
};

export default App;
```

In this example, the tourbit component guides new users through the main sections of a dashboard application. It highlights the dashboard overview, explains the data visualization feature, and introduces the quick action buttons. This approach helps users quickly understand the app's core functionality, potentially increasing engagement and user satisfaction.
