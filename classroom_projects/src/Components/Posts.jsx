import React, { useEffect, useState } from "react";

export default function Posts({ post }) {
  return (
    <div>
      <h1 className="text-primary mb-3">My Blog</h1>
      <ul className="list-group mb-4">
        {post.map((item, index) => {
          return (
            <li key={item.id} className="list-group-item">
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
