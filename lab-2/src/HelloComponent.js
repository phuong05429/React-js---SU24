import React from "react";

import ApprovalCard from "./ApprovalCard";
import ComponentDetail from "./ComponentDetail";

function HelloComponent() {
  return (
    <div className="text-left">
      <ApprovalCard />
      <ComponentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
      />
      <ComponentDetail
        author="Alex"
        timeAgo="Yesterday at 2:00PM"
        content="Great insights!"
      />
      <ComponentDetail
        author="ChiPhuog"
        timeAgo="Yesterday at 5:00PM"
        content="Đã he Đã heeee!"
      />
    </div>
  );
}
export default HelloComponent;
