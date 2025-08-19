#!/bin/bash

# Configuration variables
GENERATED_FILE="generated.tsx"
APP_DIR="src/app"
COMPONENTS_DIR="$APP_DIR/components"
PAGE_FILE="$APP_DIR/page.tsx"

# --- Main Script Logic ---

echo "Starting integration process..."

# 1. Check if the generated file exists
if [ ! -f "$GENERATED_FILE" ]; then
    echo "Error: The file $GENERATED_FILE does not exist in the root directory."
    exit 1
fi

echo "Found $GENERATED_FILE. Proceeding with component splitting."

# 2. Create the components directory if it doesn't exist
mkdir -p "$COMPONENTS_DIR"

# 3. Extract and save imports to be added to page.tsx later
echo "Extracting imports..."
IMPORTS_CODE=$(awk '/\/\/ IMPORTS_START/,/\/\/ IMPORTS_END/' "$GENERATED_FILE" | grep -v 'IMPORTS')

# 4. Extract and save the main App component to be used as the new page.tsx
echo "Extracting main App component..."
MAIN_APP_CODE=$(awk '/\/\/ MAIN_APP_START/,/\/\/ MAIN_APP_END/' "$GENERATED_FILE" | grep -v 'MAIN_APP')

# 5. Extract and save the export statement
echo "Extracting export statement..."
EXPORT_CODE=$(awk '/\/\/ EXPORT_START/,/\/\/ EXPORT_END/' "$GENERATED_FILE" | grep -v 'EXPORT')


# 6. Extract each component and save it to a new file
echo "Splitting components into individual files..."
grep -oP '// COMPONENT_START: \K[a-zA-Z]+' "$GENERATED_FILE" | while read -r component_name; do
    echo "  -> Processing $component_name..."
    START_MARKER="// COMPONENT_START: $component_name"
    END_MARKER="// COMPONENT_END: $component_name"

    # Use awk to extract the component code between the markers
    awk "/$START_MARKER/,/$END_MARKER/" "$GENERATED_FILE" | \
    grep -vE "$START_MARKER|$END_MARKER" > "$COMPONENTS_DIR/$component_name.tsx"

    echo "    - Saved $component_name to $COMPONENTS_DIR/$component_name.tsx"
done

# 7. Create the new page.tsx file
echo "Creating the new home page file at $PAGE_FILE..."
cat << EOF > "$PAGE_FILE"
$IMPORTS_CODE
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import AboutUsSection from "./components/AboutUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ServicesListSection from "./components/ServicesListSection";
import CallToActionFooter from "./components/CallToActionFooter";
import Footer from "./components/Footer";

$MAIN_APP_CODE

$EXPORT_CODE
EOF

echo "Integration complete. Your home page is now set up with the new components."
echo "You can now safely delete the temporary generated.tsx file."
