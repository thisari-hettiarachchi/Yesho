"use client";

import React from "react";

const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-2.5 text-base",
};

export function Button({
    className = "",
    size = "md",
    children,
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors disabled:opacity-50 disabled:pointer-events-none";
    const sizeCls = sizeClasses[size] || sizeClasses.md;
    return (
        <button className={`${base} ${sizeCls} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;


