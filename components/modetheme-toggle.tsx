import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ModeThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'); // Toggle the theme
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="size-4 text-violet-700" />
      ) : (
        <MoonIcon className="size-4 text-sky-950" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
