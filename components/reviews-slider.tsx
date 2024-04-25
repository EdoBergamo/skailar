"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface Feedback {
  id: string;
  avatar: string;
  user: string;
  rating: number;
  title: string;
  description: string;
  featured: boolean;
  joinedAt: string;
}

interface ApiResponse {
  allFeedbacks: Feedback[];
}

export const ReviewsSlider = () => {
  const [testimonials, setTestimonials] = useState([] as Feedback[]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/feedbacks');
        if (!response.ok) {
          throw new Error('Errore durante il recupero dei dati');
        }
        const data: ApiResponse = await response.json();
        const allFeedbacks = data.allFeedbacks;
        const formattedTestimonials = allFeedbacks.map(feedback => ({
          id: feedback.id,
          avatar: feedback.avatar,
          user: feedback.user,
          rating: feedback.rating,
          title: feedback.title,
          description: feedback.description,
          featured: feedback.featured,
          joinedAt: feedback.joinedAt,
        }));
        setTestimonials(formattedTestimonials);
      } catch (error) {
        console.error('Errore durante il fetch dei dati:', error);
      }
    };

    fetchTestimonials();

    return () => { };
  }, []);

  return (
    <section className="mt-28 flex flex-col justify-center">
      <h2 className="text-center text-white font-medium text-5xl">
        Reviews
      </h2>

      <div className="mt-16 flex justify-center items-center">
        <div className="">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </section>
  )
}
