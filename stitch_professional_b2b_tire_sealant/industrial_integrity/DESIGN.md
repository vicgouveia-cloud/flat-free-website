---
name: Industrial Integrity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system is engineered for the heavy-duty B2B sector, prioritizing **reliability, efficiency, and industrial strength**. The brand personality is authoritative yet modern, moving away from consumer-grade "quick-fix" aesthetics toward a sophisticated corporate identity.

The visual style is **Corporate / Modern** with a high-contrast edge. It utilizes a structured layout, clean lines, and a deliberate information hierarchy to convey technical precision. The emotional response should be one of absolute trust—positioning the product not just as a sealant, but as a critical infrastructure component that prevents downtime and ensures operational continuity.

## Colors

The palette transitions the high-energy "Flat Free" logo into a professional B2B context. 

*   **Primary (Deep Navy):** Represents stability and authority. Used for navigation, primary headings, and heavy UI anchors.
*   **Secondary (Safety Orange):** A direct nod to the logo’s heat, used sparingly for critical calls to action (CTAs) and "Active" status indicators.
*   **Tertiary (Industrial Lime):** Derived from the "Permanent" footer of the reference, used for success states and secondary highlights.
*   **Neutrals (Slate Grays):** Provides the technical, "machined metal" feel necessary for a B2B industrial brand.

The system defaults to a **Light Mode** to maintain clarity for technical documentation and sales portals, utilizing heavy white space to emphasize the "clean" nature of the solution.

## Typography

We employ **Inter** across all levels for its exceptional legibility and neutral, systematic character. The hierarchy is designed for quick scanning of technical data.

*   **Headlines:** Heavy weights (700) with slight negative letter-spacing to create a "solid" and impactful visual presence.
*   **Labels:** We utilize uppercase transformations for functional labels (e.g., table headers, category tags) to evoke the feeling of industrial stamping and technical specifications.
*   **Mobile Scaling:** Larger headlines are compressed for mobile devices to maintain a tight, professional information density without excessive scrolling.

## Layout & Spacing

The layout follows a **Fluid Grid** model based on an 8px square system. 

*   **Desktop:** A 12-column grid with 24px gutters. Content is housed in a centered container with a maximum width of 1280px to ensure readability on ultra-wide monitors used in logistics offices.
*   **Mobile:** Shifts to a 4-column grid with 16px gutters and 20px side margins. 
*   **Rhythm:** Vertical rhythm is strict; components are spaced in multiples of 8px (e.g., 16, 32, 64) to reinforce the "engineered" precision of the brand. High-impact photography should span full-width or large column blocks to break up data-heavy sections.

## Elevation & Depth

To maintain a professional B2B feel, the design system avoids complex gradients or skeuomorphism. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

*   **Surface Hierarchy:** The background is white (#FFFFFF). Cards and secondary containers use a very light slate tint (#F8FAFC) with a 1px border (#E2E8F0).
*   **Shadows:** When depth is required (e.g., for dropdowns or modals), use a single, highly diffused ambient shadow: `0px 10px 15px -3px rgba(15, 23, 42, 0.08)`. The shadow should be tinted with the primary navy color to maintain palette harmony.
*   **Interaction:** Active states for cards should be indicated by a weightier 2px border in the Primary color rather than a shadow increase, emphasizing structural rigidity.

## Shapes

The shape language is **Soft (Level 1)**. 

While the industry is "rugged," the UI should feel modern and accessible. We use a 4px (0.25rem) base radius for standard components like input fields and buttons. Larger containers like cards use 8px (0.5rem). This subtle rounding prevents the interface from feeling "sharp" or "hostile" while maintaining the overall rectangular, structured aesthetic of an industrial dashboard.

## Components

*   **Buttons:** Primary buttons use a solid Navy background with white text. "Action" buttons (e.g., *Order Now*, *Emergency Support*) use the Safety Orange. Buttons are strictly rectangular with subtle 4px corner rounding.
*   **Input Fields:** Ghost-style inputs with 1px Slate borders that turn Primary Navy on focus. Labels always sit above the field in `label-bold` style.
*   **Chips/Tags:** Used for tire specifications (e.g., "Heavy Duty," "Off-Road"). These use the Tertiary Green or Neutral Slate with low-opacity backgrounds to avoid visual clutter.
*   **Data Cards:** High-contrast white backgrounds. Use a vertical Primary Navy accent bar on the left edge to denote "Premium" or "Active" product categories.
*   **Progress Bars:** Specifically for "Sealant Longevity" or "Tire Life" indicators, utilizing the Safety Orange to Lime Green gradient to visually represent health and energy.
*   **Technical Specs List:** Use "zebra-striping" with the light slate tint for readability in long tables.