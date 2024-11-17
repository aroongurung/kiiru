'use client'

import { useTheme } from 'next-themes'; // Import the useTheme hook from next-themes
import { useEffect, useState } from 'react'; // Use useState and useEffect hooks
import Link from 'next/link';
import Image from 'next/image';

// Import your logos
import kiiruwhiteLogo from "@/public/images/authors/kiirulogo_whitebg.png";
import kiirublackLogo from "@/public/images/authors/kiirulogo_darkbg.png";

const LogoComponent = () => {
  const { resolvedTheme } = useTheme();  // Get the current theme (light/dark)
  const [mounted, setMounted] = useState(false); // Track if component is mounted

  // UseEffect to update the mounted state once the component is rendered client-side
  useEffect(() => {
    setMounted(true);  // Set mounted to true once component is mounted
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server-side
  }

  // Render the logo based on the resolved theme (light or dark)
  return (
    <div className="flex gap-1 pb-1">
      <Link href="/">
        <Image
          src={resolvedTheme === 'dark' ? kiiruwhiteLogo : kiirublackLogo} // Use the correct logo based on theme
          alt="Aroon"
          width={40}
          height={8}
          priority
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default LogoComponent;
