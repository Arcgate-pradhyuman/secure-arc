import React, { useState, useEffect } from 'react';

export default function App() {
  const [Button, setButton] = useState(null);
  const [App2Page, setApp2Page] = useState(null); // Start with no App2Page

  useEffect(() => {
    // Define an async function for loading components
    const loadComponents = async () => {
      try {
        const { default: ButtonComponent } = await import("MicroFrontend/Button");
        setButton(() => ButtonComponent); // Set the imported Button component to state
      } catch (error) {
        console.error("Failed to load MicroFrontend/Button", error);
        // Handle the error, e.g., show a fallback UI or an error message
      }

      try {
        const { default: App2PageComponent } = await import('App2/cube');
        setApp2Page(() => App2PageComponent); // Set the imported App2Page component to state
      } catch (error) {
        console.error("Failed to load App2/AppPage", error);
        // Handle the error, e.g., show a fallback UI or an error message
      }
    };

    // Call the async function to load components
    loadComponents();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>this is container app</h2>
      App 2
      {Button ? <Button buttonName={"Hey there"} /> : <p>Button not available</p>}
      {App2Page ? <App2Page buttonName={"Hey there"} /> : <p>App2Page not available</p>}
    </div>
  );
}
