# How to Add/Edit Projects

This folder contains the data for your portfolio projects. To add or modify projects, simply edit the `projects.json` file.

## Structure

Each project in the `projects.json` file has the following structure:

```json
{
  "id": 1,
  "title": "Project Title",
  "tech": "Technology Stack (comma-separated)",
  "points": [
    "First achievement or feature description",
    "Second achievement or feature description",
    "Additional points as needed"
  ]
}
```

## Fields Explanation

- **id**: Unique identifier for the project (required, must be a number)
- **title**: The name of your project (required)
- **tech**: Technologies used, separated by commas (required)
- **points**: Array of strings describing achievements, features, or details (required)

## Adding a New Project

1. Open `projects.json`
2. Add a new object to the `projects` array
3. Make sure to:
   - Use a unique `id`
   - Follow the JSON format with proper commas
   - Keep descriptions clear and concise
4. Save the file - changes will appear automatically!

## Example

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your New Project",
      "tech": "React, Node.js, MongoDB",
      "points": [
        "Built a full-stack application with 10,000+ users",
        "Implemented real-time features using WebSockets",
        "Reduced loading time by 50% through optimization"
      ]
    }
  ]
}
```

## Tips

- Projects are displayed in the order they appear in the JSON file
- The grid automatically adjusts to show 1, 2, or 3 columns based on screen size
- Keep project titles concise for better display in the cards
- Limit points to 2-4 items for readability in the modal
