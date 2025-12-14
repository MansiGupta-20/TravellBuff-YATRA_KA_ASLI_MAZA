import React from "react";
import { toast } from "react-toastify";

function MyComponent() {
  const notify = () => {
    toast.success("🦄 Success message!");
    toast.error("❌ Error message!");
    toast.info("ℹ️ Info message!");
    toast.warning("⚠️ Warning message!");
  };

  return (
    <div></div>
  );
}

export default MyComponent;
