'use client'
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from 'react-toastify';
import { CoolMode } from "./magicui/cool-mode";


interface ShortenFormProps {
  handleUrlShortened: () => void;
}


const ShortenForm = ({handleUrlShortened}: ShortenFormProps) => {
  const [url, setUrl] = useState<string>("");

  /**
   * Handles the submission of the URL shortening form.
   *
   * @param {React.FormEvent} e The form event.
   * @returns {Promise<void>} A promise that resolves when the form has been submitted.
   */
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      // Send a POST request to the `/api/shorten` endpoint with the URL as the body.
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        // Check if the response status is 409 (Conflict) indicating the URL is already in the database
        if (response.status === 409) {
          toast.error("URL is already in the database.");
          return;
        }
        throw new Error("Network response was not ok");
      }

      // Get the response data and log it to the console.
      const data = await response.json();
      console.log(data);

      // Reset the URL state after submitting the form.
      setUrl("");

      // Call the handleUrlShortened function passed in as a prop.
      handleUrlShortened();
      
      // Show a toast notification with the shortened URL.
      toast.success(`URL shortened successfully: ${data.shortCode}`);
    } catch (error) {
      // Log any errors to the console.
      console.error("Error shortening URL:", error);
      toast.error("An error occurred while shortening the URL.");
    }

  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="space-y-4 ">
        
        <Input
          
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          className="h-12"
          type="url"
          placeholder="Enter URL to shorten"
          required
        />
        <CoolMode>
        <Button className="w-full p-2 h-12 font-semibold uppercase hover:bg-primary-foreground hover:text-primary" type="submit">
        
          Shorten Url
        </Button>
        </CoolMode>
      </div>
    </form>
  );
};

export default ShortenForm;
