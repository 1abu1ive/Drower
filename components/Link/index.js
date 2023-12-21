import Link from "next/link";
import React from "react";

export default function MyLink({ href, children, className, style, ...props }) {
  return (
    <div>
      <Link href={href} {...props}>
        {children}
      </Link>
    </div>
  );
}
