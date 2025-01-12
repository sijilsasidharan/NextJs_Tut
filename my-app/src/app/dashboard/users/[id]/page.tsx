import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  throw new Error("This is an error");
  const { id } = params;
  return <div>User {id} Details</div>;
};

export default page;
