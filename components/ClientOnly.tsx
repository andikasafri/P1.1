// components/ClientOnly.tsx
"use client";

import React, { useState, useEffect } from "react";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Optionally, render a placeholder (like a spinner) until mounted.
    return null;
  }

  return <>{children}</>;
}
