import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

const UpdateEvent = () => {
    const {sessionClaims} =  auth();
    const userId = sessionClaims?.userId as string;


  return (
    <>
      <section className="bg-blue-50 bg-dotted bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          update event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Update"/>
      </div>
    </>
  );
};

export default UpdateEvent;
