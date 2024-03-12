import React from "react";

export default function TextForm() {
  return (
    <div>
      <div class="mb-3 container">
        <label for="mytext" class="form-label">
          Example textarea
        </label>
        <textarea class="form-control" id="mytext" rows="3"></textarea>
      </div>
    </div>
  );
}
